import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0 1.25em;
  margin: 0 18px;
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  height: 2.2em;
  background: white;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.17);
`;

export const NavigationButton = Button.withComponent(Link);

export const ActionButton = styled.button`
    display:inline-block;
    padding: 18px 28px;
    margin: 12px 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family:'Roboto',sans-serif;
    font-weight:600;
    color:#FFFFFF;
    background-color:#F5A800;
    text-align:center;
    position:relative;
    cursor: pointer;
    width: 100%;
    outline: none;
    text-transform: uppercase;
    border: none;

    :active{
      box-shadow:inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
    }
`;