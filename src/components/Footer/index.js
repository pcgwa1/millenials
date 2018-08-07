import React, { Component } from 'react';
import styled from 'styled-components';
import { Footer } from '../MainWrapper';

export const ListWrapper = styled.ul`
  display: inline-flex;
  margin-right: 10%;
`;

export default class Header extends Component {
  render() {
    return (
      <Footer>
        © 2018 Millennials
      </Footer>
    );
  }
}