import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { Content } from '../../components/MainWrapper';
import { db } from '../../firebaseConfig';
import { setUserProfile } from './actions';

class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.getUserProfile = this.getUserProfile.bind(this);
  }

  componentDidMount() {
    const {
      user, setUserProfileToState,
    } = this.props;
    this.getUserProfile(setUserProfileToState, user);
  }

  getUserProfile(setUserProfileToState, user) {
    const docRef = db.collection('users').doc(user);
    docRef.get().then((doc) => {
      if (doc.exists) {
        setUserProfileToState(doc.data());
      } else {
        setUserProfileToState(null);
        this.props.history.push('/register');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }
  render() {
    const { user, userProfile } = this.props;
    console.log(userProfile);
    return (
      <Content>
        Profile: {user}
      </Content>
    );
  }
}

export function mapStateToProps(state) {
  return {
    userProfile: state.profile.userProfile,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    setUserProfileToState: data => dispatch(setUserProfile(data)),
    initializeForm: (data) => {
      dispatch(initialize('UpdateLogForm', data));
    },

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);