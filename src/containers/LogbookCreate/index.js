import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import CreateEventForm from './Form';
import { db } from '../../firebaseConfig';

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

class CreateEvent extends Component {
  render() {
    const { user, history } = this.props;
    return (
      <div>
        <CreateEventForm user={user} submitFunction={handleSubmit} history={history} />
      </div>
    );
  }
}

export default CreateEvent;
