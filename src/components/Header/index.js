import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Logo from '../../assets/logo/M-Logo2-stroke-300dpi.png';
import Hamburger from './Hamburger'
import firebase from '../../firebaseConfig';

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
  
    ${props => props.theme.breakpoints.maxTablet} {
       padding: 12px 24px;
  }
`;

const Image = styled.img`
  width: 200px;
  margin-left: 10%;
`;

export const ListWrapper = styled.ul`
  display: flex;
    
  ${props => props.theme.breakpoints.maxTablet} {
    flex-direction: column;
    margin-top: 5%;
    display: ${props => props.toggle ? 'flex' : 'none'};
  }
`;

export const HeaderWrapper = styled(Row)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 888;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: 80px;
  background: rgba(0,0,0,0.5);
  color: white;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.17);
  padding: 0 18px;
  
  ${props => props.theme.breakpoints.maxTablet} {
    height: ${props => props.toggle ? 'auto' : '80px'};
    background: #000;
  }
`;

const HamburgerCol = styled(Col)`
    ${props => props.theme.breakpoints.maxTablet} {
    //display: none;
  }
`;

const ActionButton = styled.button`
  border: none;
  background: #000;
  color: #fff;
  padding: 0 18px;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  
  a {
    text-decoration: none;
    color: #fff;
  }
`;

function logout() {
  firebase.auth().signOut();
}
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({menu: !this.state.menu});
  }
  render() {
    const { user } = this.props;
    return (
        <HeaderWrapper between='xs' toggle={this.state.menu} >
          <Col center='xs' xs={4}>
            <Image src={Logo} />
          </Col>
          <HamburgerCol center='xs' xs={2}>
            <Hamburger menu={this.state.menu} toggleMenu={this.toggle} />
          </HamburgerCol>
          <Col xs={12} md={4}>
            <ListWrapper toggle={this.state.menu}>
              {user ? <Button onClick={() => this.toggle()}><Link to='/news'>News Feed</Link></Button>
                : <Button onClick={() => this.toggle()}><Link to='/'>Home</Link></Button>}
              {user ? <Button onClick={() => this.toggle()}><Link to='/profile'>Profile</Link></Button>
                : <Button onClick={() => this.toggle()}><Link to='/join'>Join Millennials</Link></Button>}
              <Button onClick={() => this.toggle()}><Link to='/podcast'>Podcast</Link></Button>
              <Button onClick={() => this.toggle()}><Link to='/'>Shop</Link></Button>
              <Button onClick={() => this.toggle()}><Link to='/contact'>Contact</Link></Button>
              {user ? <ActionButton onClick={() => logout()}>Logout</ActionButton>
                : <ActionButton onClick={() => this.toggle()}><Link to='/login'>Login</Link></ActionButton>}
            </ListWrapper>
          </Col>
        </HeaderWrapper>
    );
  }
}