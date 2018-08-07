import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { initialize } from 'redux-form';
import moment from 'moment';
import { toastr } from 'react-redux-toastr';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { setUserProfile, setUserEvents } from './actions';
import CreateEventForm from './Form';

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

export const FullWidthRow = styled(Row)`
  width: 100%;
`;

export const LogList = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const TitleRow = styled(Row)`
    margin-top: 3vh;
`;

export const PageTitle = styled.h1`
    margin: 0;
    padding: 6px 12px;
    font-family:'Roboto',sans-serif;
    font-weight:600;
`;

export const ContentRow = styled(Row)`
    padding: 0 12px;
    min-height: 85vh;
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
  padding: 0;
  margin: 16px 0;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
`;

export const ListContentWrapper = styled.div`
  padding: 0 12px;
`;

export const ListItemTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListItemDate = styled.p`
  text-transform: capitalize;
  font-size: 12px;
`;

export const ListItemCategory = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  padding: 12px;
  background: ${props => (props.category === 'Theatre' ? props.theme.colors.redAlert : props.category === 'Ward' ? props.theme.colors.blue : props.theme.colors.lawngreen)};
  font-weight: bold;
  color: #fff;
  border-radius: 0 0 10px 10px;
`;

export const ListItemTitle = styled.h4`
  margin: 0;
  padding: 0;
`;

export const LinkWrapper = styled(Link)`
  margin: 0;
  padding: 0;
  cursor: pointer;
  svg {
    fill: #fff;
    width: 28px;
  }
`;

export const FeedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  if (!userEvents) return <FeedWrapper><h1>No feed yet</h1><CreateEventForm user={user} submitFunction={handleSubmit} history={history} /></FeedWrapper>;
  return (
    <ContentWrapper>
      <ContentRow start='xs'>
        <Column xs={12} md={3}>
          <LogList>
            {userEvents.map((event) => {
              const {
                id, post, timestamp,
              } = event;
              const dateTime = new Date(timestamp);
              const formatDate = moment(dateTime).format('DD MMMM YYYY');
              return (
                <ListItem to='/update' key={id} onClick={() => initializeForm(event)}>
                  <ListItemWrapper>
                    <ListContentWrapper>
                      <ListItemTitle>
                        {post}
                      </ListItemTitle>
                    </ListContentWrapper>
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
      <div>
        {renderLogs(userEvents, initializeForm, user, history)}
      </div>
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
