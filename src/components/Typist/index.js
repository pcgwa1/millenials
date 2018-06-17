import React, { Component } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import ReactPlayer from 'react-player';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/iconApp.png';

const MainIntro = styled.h1`
  font-family: ${props => props.theme.fonts.openSansSemiBold};
  font-weight: 800;
  font-size: 88px;
  color: #ffffff
  width: 90%;
  text-shadow: 2px 2px #000;
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
  border: 2px solid black;
  background: white;
  font-family: ${props => props.theme.fonts.openSansSemiBold};
  font-weight: 800;
  font-size: 20px;
  color: #000;
  width: 300px;
  text-decoration: none;
  margin-top: 50%;
	border-radius: 10px;
	cursor:pointer;
	font-family: Arial;
	text-decoration: none;
	text-shadow:0px 1px 0px #000;
	padding: 10px 12px;
	
  position: relative;
  top: 0;
  background: rgba( 255, 255, 255, 1 );
  box-shadow: 1px 1px 1px rgba( 0, 0, 0, 0.1 );
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
              Join Private Group
            </JoinButton>
          </Zoom>
        </Wrapper>
      </MainIntro>
    );
  }
}