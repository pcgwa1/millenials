import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderWrapper } from '../MainWrapper';
import Logo from '../../assets/logo/M-Logo2-stroke-300dpi.png';
import './styles.css';

const Burder = styled.div`
  width: 50px;
  height: 50px;
  background: #4CAF50;
`;

export default class Header extends Component {
  render() {
    return (
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" className="icon" onClick="myFunction()">
          <Burder />
        </a>
      </div>
    );
  }
}