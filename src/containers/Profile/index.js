import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import PropTypes from 'prop-types';
import cloudinary from 'cloudinary-core';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import { Row, Col } from 'react-flexbox-grid';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageUploader from './imageUploader';
import { db } from '../../firebaseConfig';
import { setUserProfile } from './actions';

const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'pcgwa'});

const styles = {
  card: {
    minWidth: '100%',
    boxShadow: '10px 6px 34px -1px rgba(0,0,0,1)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    min-height: 100vh
    padding: 0 100px;
    background: #2B414E;
`;

const CardWrapper = styled.div`
    width: 100%;
  //height: fit-content;
  //box-shadow: 10px 6px 34px -1px rgba(0,0,0,1);
`;

const ProfileImage = styled.div`  
  margin-top: 15vh;
  width: 100%;
  min-height: 60vh;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 	0% 20%;
  box-shadow: 10px 6px 34px -1px rgba(0,0,0,1); 
`;

const ProfileDetailsImage = styled.div`  
  width: 30vw;
  min-height: 50vh;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 	0% 0%;
`;

const ProfileDetails = styled.div`
  position: absolute;
  box-shadow: 10px 6px 34px -1px rgba(0,0,0,1);
  top: 30vh;
  margin-left: 1.5vw;
  max-width: 30vw;
`;

const ProfileFeed = styled(Row)`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  min-height: 50vh;
`;

export const SubText = styled.div`
display: flex;
flex-wrap: wrap;
  white-space: pre-line;
`;

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
    const { user, userProfile, classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    const profilePicture = cloudinaryCore.url('profileImage/propic');
    console.log(userProfile);
    return (
      <Wrapper>
        <CardWrapper>
          <ProfileImage src={profilePicture} />
          <Card className={classes.card}>
            <ProfileDetails xs={4}>
              <ImageUploader />
              <ProfileDetailsImage src={profilePicture} />
              <CardContent>
                <Typography className={classes.title} color="textSecondary">
                  Profile
                </Typography>
                <Typography variant="headline" component="h2">
                  {userProfile.firstname}
                  {' '}
                  {userProfile.lastname}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  <SubText>
                    {userProfile.biography}
                  </SubText>
                </Typography>
              </CardContent>
            </ProfileDetails>
            <ProfileFeed>
              <Col xs={5}>
              </Col>
              <Col xs={4}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary">
                    Word of the Day
                  </Typography>
                  <Typography variant="headline" component="h2">
                    be
                    {bull}
                    nev
                    {bull}o{bull}
                    lent
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    adjective
                  </Typography>
                  <Typography component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Col>
            </ProfileFeed>
            <Row>
              <Col>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Col>
            </Row>
          </Card>
        </CardWrapper>
      </Wrapper>
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

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ProfilePage = withStyles(styles)(Profile);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);