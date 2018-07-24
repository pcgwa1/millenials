import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 3.5em;
  height: 2.5em;
  cursor: pointer;
  transform: rotate(0deg);
  transition: .5s ease;
  font-size: 0.5em;
  align-items: center;
  justify-content: center;
  z-index: 999;
  > span {
    position: absolute;
    height: 0.5em;
    width: 3.5em;
    background: ${props => props.theme.colors.dove};
    transition: .25s ease;
    ${props => props.theme.breakpoints.maxTablet}{
      background: ${props => props.theme.colors.dove};
    }
    &:nth-child(1) {
      top: ${props => (props.open ? '1em' : '0')};
      width: ${props => (props.open ? '0%' : '3.5em')};
      left: ${props => (props.open ? '50%' : '0%')};
    }
    &:nth-child(2) {
      top: 1em;
      transform: rotate(${props => (props.open ? '45deg' : '0deg')});
    }
    &:nth-child(3) {
      top: 1em;
      transform: rotate(${props => (props.open ? '-45deg' : '0deg')});
    }
    &:nth-child(4) {
      top: ${props => (props.open ? '1em' : '2em')};
      width: ${props => (props.open ? '0%' : '3.5em')};
      left: ${props => (props.open ? '50%' : '0%')};
    }
  }
  ${props => props.theme.breakpoints.tablet} {
    display: none;
    margin-bottom: 100%;
  }
`;

class Hamburger extends Component {
  render() {
    return (
      <Wrapper open={this.props.menu} onClick={() => this.props.toggleMenu()}>
        <span />
        <span />
        <span />
        <span />
      </Wrapper>
    );
  }
}

export default Hamburger;
