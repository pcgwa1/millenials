import React, { Component } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';

const MainIntro = styled.h1`
  font-family: ${props => props.theme.fonts.openSansSemiBold};
  font-weight: 800;
  font-size: 88px;
  color: #ffffff;
  width: 100%;
  text-shadow: 2px 2px #000;

  ${props => props.theme.breakpoints.maxTablet} {
    font-size: 30px;
  }
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;

`;

const JoinButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 0.2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto',sans-serif;
  font-weight: 400;
  color: #FFFFFF;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
  text-align: center;
  position: relative;
  cursor: pointer;
  font-size: 45px;
  margin-top: 50%;
  
  ${props => props.theme.breakpoints.maxTablet} {
    font-size: 25px;
    margin-top: 30%;
  }
  
  top: 0;
  background: rgba( 0, 0, 0, 1 );
  transform: translateZ(0);
  transition: all 0.2s ease;
  
:hover {
  top: -10px;
  box-shadow: 5px 10px 10px rgba( 0, 0, 0, 0.2 );
  transform: rotateX(20deg);
  color: #fff;
  background: black;
}

:active {
  top: 0px;
  box-shadow: 0px 0px 0px rgba( 0, 0, 0, 0.0 );
  background: rgba( 0, 0, 0, 0.5 );

`;


export default class MyComponent extends Component {

  render() {
    return (
      <MainIntro>
        <Wrapper>
        <Typist>
            <span>Be The Generation</span>
            <Typist.Backspace count={10} delay={2000} />
            <span>Movement</span>
          <Typist.Backspace count={8} delay={8000} />
          <span>Generation</span>
          <Typist.Backspace count={10} delay={2000} />
          <span>Movement</span>
        </Typist>
          <Zoom>
            <JoinButton to='/join'>
              <span style={{fontSize: '1.3em', fontFamily:'Comic Sans MS', borderRight: '1px solid rgba(255,255,255,0.5)', paddingRight:'0.3em', marginRight: '0.3em', verticalAlign: 'middle'}}>J</span>
              Join Private Group
            </JoinButton>
          </Zoom>
        </Wrapper>
      </MainIntro>
    );
  }
}