import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Content } from '../../components/MainWrapper';
import Mosaic from '../../components/Mosaic/signup';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Logo from '../../assets/video/logo.mp4';

const Step1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  width: 100%;
  margin: 5% 0 0 0;
`;

const Step2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: black;
  width: 100%;
  margin: 5% 0 0 0;
  padding: 3% 0;
`;

const Step1Title = styled.h1`
  font-family: ${props => props.theme.fonts.openSansSemiBold};
  font-weight: 800;
  font-size: 48px;
  color: black;
  padding: 0;
  margin: 22px 0;
  text-transform: uppercase;
  
  > span {
    color: #ffffff;
    text-shadow: 4px 4px #000;
  }
`;

const Step2Title = styled.h1`
  font-family: ${props => props.theme.fonts.openSansSemiBold};
  font-weight: 800;
  font-size: 48px;
  color: white;
  padding: 0;
  margin: 22px 0;
  text-transform: uppercase;
  
  > span {
    color: #ffffff;
    text-shadow: 4px 4px #000;
  }
`;

const InnerStep = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: rgba(0,0,0,0.75);
  width: 40%;
   box-shadow: 2px 4px 6px 1px rgba( 0, 0, 0, 0.5);
`;

const Player = styled(ReactPlayer)`
  width: 40vw;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.7em 1.7em;
  margin: 18px 0.3em 0.3em 0;
  border-radius: 0.2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto',sans-serif;
  font-weight: 400;
  color: #FFFFFF;
  background-color: #3369ff;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
  text-align: center;
  position: relative;
  cursor: pointer;
`;

const Paragraph = styled.p`
  text-align: justify;
  padding: 0;
  font-weight: 600;
  color: white;
`;

class JoinGroup extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      user: '',
    };
  }
  async componentDidMount() {

  }
  render() {
    return (
      <Content>
        <Mosaic />
        <Step1>
          <Step1Title>Step 1: Watch this video</Step1Title>
          <Player
            url={Logo}
            loop={false}
            playing
            style={{width: 840, height: 560}}
          />
        </Step1>
        <Step2>
          <Step2Title>STEP 2: FILL OUT THE CREATOR FORM</Step2Title>
          <InnerStep>
            <Paragraph>Millenials is an active online community curated to help creators of any type be better versions of themselves.
              It was created to expand our limits as creators, help push each other, share techniques, receive honest feedback on projects,
              network and a space for people to collaborate with each other.
            </Paragraph>
          </InnerStep>
          <Button to='/signup' style={{backgroundColor:'#000'}}>
            <span style={{fontSize: '3em', fontFamily:'Comic Sans MS', borderRight: '1px solid rgba(255,255,255,0.5)', paddingRight:'0.3em', marginRight: '0.3em', verticalAlign: 'middle'}}>M</span>
            Join Millennials by filling out the form
          </Button>
        </Step2>
      </Content>
    );
  }
}

export default JoinGroup;
