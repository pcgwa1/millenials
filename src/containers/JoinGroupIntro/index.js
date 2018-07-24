import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { Parallax } from 'react-parallax';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Logo from '../../assets/video/logo.mp4';
import {Link} from "react-router-dom";

export const PageHeader = styled(Col)`
  width: 100vw;
  margin: 0;
  padding: 0;
`;

export const Content = styled(Col)`
  height: 67vh;
`;

export const FullRow = styled(Row)`
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const Column = styled(Col)`

`;

export const ColumnBlack = styled(Col)`
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
  background: transparent;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 40vh;
  background: rgba(255,255,255,0.75);
  width: 100%;
`;

const Paragraph = styled.p`
  text-align: center;
  padding: 0 25%;
   font-size: 38px;
  //font-weight: 600;
      ${props => props.theme.breakpoints.maxTablet} {
     font-size: 18px;
     text-align: justify;
      padding: 0 5%;
     
  }
`;

const MainIntro = styled.h1`
  font-family: ${props => props.theme.fonts.openSansSemiBold};
  font-weight: 800;
  font-size: 58px;
  color: black;
  padding: 0 12px;
  margin: 0;
  text-shadow: 4px 4px #fff;
  
  > span {
    color: #ffffff;
    text-shadow: 4px 4px #000;
  }
  
    ${props => props.theme.breakpoints.maxTablet} {
     font-size: 20px;
  }
`;

const PanelParallax = styled(Parallax)`
  width: 50vw;
  height: 50vh;
  
  ${props => props.theme.breakpoints.maxTablet} {
    width: 100vw;
    height: 40vh;
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
  
  ${props => props.theme.breakpoints.maxTablet} {
        margin: 0.3em 1.5em;
      }
`;


class Home extends PureComponent {
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
      <FullRow>
        <ColumnBlack xs={12}>
          <Video autoPlay
                 controls={[]}
                 style={{width: '100%', margin: '0'}}
                 poster="http://sourceposter.jpg"
                 onCanPlayThrough={() => {
                   // Do stuff
                 }}>
            <source src={Logo} type="video/webm" />
          </Video>
        </ColumnBlack>
        <Column center='xs' xs={12} >
          <Panel>
            <Inner>
              <MainIntro>STEP 2: FILL OUT THE CREATOR FORM</MainIntro>
              <Paragraph>
                Millenials is an active online community curated to help creators of any type be better versions of themselves.
                It was created to expand our limits as creators, help push each other, share techniques, receive honest feedback on projects,
                network and a space for people to collaborate with each other.
              </Paragraph>
            </Inner>
            <Button to='/signup' style={{backgroundColor:'#000'}}>
              <span style={{fontSize: '3em', fontFamily:'Comic Sans MS', borderRight: '1px solid rgba(255,255,255,0.5)', paddingRight:'0.3em', marginRight: '0.3em', verticalAlign: 'middle'}}>M</span>
              Join Millennials form
            </Button>
          </Panel>
        </Column>
      </FullRow>
    );
  }
}

export default Home;
