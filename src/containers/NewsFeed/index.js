import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { initialize } from 'redux-form';
import moment from 'moment';
import { toastr } from 'react-redux-toastr';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { setUserEvents } from './actions';
import CreateEventForm from './Form';
import Button from '@material-ui/core/Button';

export const PageHeader = styled(Col)`
  max-width: 100vw;
  height: 50px;
  background: #F5A800;
  padding: 0 12px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
`;

export const Column = styled(Col)`
  width: 100%;
  padding: 12px;
`;

export const Wrapper = styled.div`
  margin: 0;
  padding: 12px;
`;

export const LogList = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ContentRow = styled(Row)`
    padding: 0 12px;

`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 10vh;
`;

export const ListItem = styled(Link)`
  color: #000;
  text-decoration: none;
`;

export const ListItemWrapper = styled.div`
  padding: 18px;
  margin: 16px 0;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
`;

export const ListItemTitle = styled.h4`
  margin: 0;
  padding: 0;
  text-align: left;
`;

export const FeedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  
`;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10vh;
  
`;
export function handleSubmit(values, user, history) {
  // step 1: create the reference
  const timeStamp = new Date().getTime();
  const eventReference = db.collection('posts').doc(`${user}${timeStamp}`);
  // step 2: update the reference with the countries
  eventReference.set({
    id: eventReference.id,
    uid: user,
    post: values.post,
    timestamp: timeStamp,
  }).then(() => {
    toastr.success('Event Created', 'You have successfully created an event');
    history.push('/news');
  }).catch((error) => {
    toastr.error('Something went wrong', 'Your event was not registered.');
    console.log('error: ', error);
  });
}

function renderLogs(userEvents, initializeForm, user, history) {
  if (!userEvents.length) return <FeedWrapper><h1>No feed yet</h1></FeedWrapper>;
  return (
    <ContentWrapper>
      <ContentRow start='xs' center='md'>
        <Column xs={12} md={2}>
          <LogList>
            {userEvents.map((event) => {
              const {
                id, post, timestamp,
              } = event;
              const dateTime = new Date(timestamp);
              const formatDate = moment(dateTime).format('DD MMMM YYYY');
              return (
                <ListItem to='/post' key={id} onClick={() => initializeForm(event)}>
                  <ListItemWrapper>
                    <ListItemTitle>
                      <p>
                        {formatDate}
                      </p>
                      {post}
                    </ListItemTitle>
                  </ListItemWrapper>
                </ListItem>
              );
            })}
          </LogList>
        </Column>
      </ContentRow>
    </ContentWrapper>
  );
}

class Logbook extends Component {
  constructor(props) {
    super(props);
    this.getEvents = this.getEvents.bind(this);
  }

  componentDidMount() {
    const {
      user, setUserEventsToState,
    } = this.props;
    this.getEvents(setUserEventsToState, user);
  }

  getEvents(setUserEventsToState, user) {
    const docRef = db.collection('posts').where('uid', '==', user).orderBy('timestamp', 'desc');
    docRef.onSnapshot({ includeMetadataChanges: true }, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setUserEventsToState(data);
    });
  }


  render() {
    const { user, userEvents, initializeForm, history } = this.props;
    return (
      <PageWrapper>
        <CreateEventForm user={user} submitFunction={handleSubmit} history={history} />
        {renderLogs(userEvents, initializeForm, user, history)}
      </PageWrapper>
    );
  }
}

export function mapStateToProps(state) {
  return {
    userEvents: state.logbook.userEvents,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    setUserEventsToState: data => dispatch(setUserEvents(data)),
    initializeForm: (data) => {
      dispatch(initialize('UpdateLogForm', data));
    },

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logbook);
