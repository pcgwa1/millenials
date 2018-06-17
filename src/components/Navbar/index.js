import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/logo/M-Logo2-stroke-300dpi.png';
import { Navbar } from '../MainWrapper';

const Top = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 20%;
    background-color: #000; 
    color: #fff;
    padding: 15px 0px 15px 30px;
    text-decoration: none;
    max-width: 100%;   
`;

const LinkWrapper = styled.li`
      display: flex;
      align-items: center; 
    
    > a {
      display: flex;
      align-items: center;
      color: #000;
      padding: 15px 30px;
      text-decoration: none;
      width: 100%;
      font-weight: bold;
            
      &:hover {
        background-color: #333;
        color: white;
      }
    }
`;

const Image = styled.img`
  width: 200px;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
`;

export default class TopNavbar extends Component {
  render() {
    return (
      <Navbar>
        <ul>
          <Top>
           <LogoLink to='/'>
             <Image src={Logo} />
           </LogoLink>
          </Top>
          <LinkWrapper><Link to='/surveys'>Dashboard</Link></LinkWrapper>
          <LinkWrapper><Link to='/surveys/new'>Create Survey</Link></LinkWrapper>
        </ul>
      </Navbar>
    );
  }
}