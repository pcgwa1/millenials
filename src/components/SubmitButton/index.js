import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

export const BtnText = styled.div`
  display: ${props => (props.show ? 'none' : 'flex')};
  color : white;
  transition : .3s;
  font-weight: bold;
  padding: 12px 0;
    
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    margin: 12px 0;
    box-sizing: border-box;
    text-decoration:none;
    font-family: 'Roboto',sans-serif;
    font-weight:600;
    color:#FFFFFF;
    background-color: ${props => (props.disabled ? '#808080' : '#000')};
    text-align:center;
    position:relative;
    border: none;
    cursor: pointer;
    width: 100%;
    outline: none;
    text-transform: uppercase;
    
    :active{
      box-shadow:inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
    }
`;

export const bounceDelay = keyframes`
0%, 80%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    } 40% {
          -webkit-transform: scale(1.0);
          transform: scale(1.0);
      }
`;

export const Loader = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  
  div {
      width: 11px;
      height: 11px;
      background-color: #fff;
      margin: 0 5px;
  
      border-radius: 100%;
      display: inline-block;
      animation: ${bounceDelay} 1s infinite ease-in-out both;
  }
  
  div:nth-child(1) {
    animation-delay: -0.32s;
}
 div:nth-child(2) {
    animation-delay: -0.16s;
}
`;

class SubmitButton extends PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      show: false,
    };
  }

  componentWillUnmount() {
    this.setState({
      show: false,
    });
  }

  toggle() {
    this.setState({
      show: true,
    });
  }

  render() {
    const { type, label, disabled } = this.props;
    const { show } = this.state;
    return (
      <Button type={type} onClick={this.toggle} disabled={disabled}>
        <BtnText show={show}>
          {label}
        </BtnText>
        <Loader show={show}>
          <div />
          <div />
          <div />
        </Loader>
      </Button>
    );
  }
}


export default SubmitButton;
