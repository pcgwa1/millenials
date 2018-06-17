import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderWrapper } from '../MainWrapper';
import Logo from '../../assets/logo/M-Logo2-stroke-300dpi.png';

const LinkWrapper = styled.li`
      display: flex;
      align-items: center; 
    
    > a {
      display: flex;
      align-items: center;
      color: #fff;
      padding: 15px 30px;
      text-decoration: none;
      width: 100%;
      font-weight: normal;
      font-size: 16px;
           
      &:hover {
        color: black;
        background: white;
      }
    }
`;

const Button = styled.li`
display: flex;
      align-items: center;
      justify-content: center;
  background: transparent;
  color:#fff;
  border:none;
  position: relative;
  padding: 12px 0;
  margin: 0 22px;
  cursor:pointer;
  transition:200ms ease all;
  outline:none;

    > a {
      color: #fff;
      text-decoration: none;
      width: 100%;
      font-weight: normal;
      font-size: 16px;
    }

 :after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #fff;
  transition:200ms ease all;
}
 :after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
:hover:before, :hover:after{
  width:100%;
  transition:200ms ease all;
}

`;

const Image = styled.img`
  width: 200px;
  margin-left: 10%;
`;

export const ListWrapper = styled.ul`
  display: inline-flex;
  margin-right: 10%;
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Image src={Logo} />
        <ListWrapper>
          <Button><Link to='/'>Home</Link></Button>
          <Button><Link to='/'>Join Millennials</Link></Button>
          <Button><Link to='/'>Podcast</Link></Button>
          <Button><Link to='/'>Shop</Link></Button>
          <Button><Link to='/'>Contact</Link></Button>
        </ListWrapper>
      </HeaderWrapper>
    );
  }
}