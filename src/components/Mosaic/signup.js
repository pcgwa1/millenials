import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { Fade } from 'react-reveal';
import Logo from '../../assets/video/logo.mp4';

export const MainWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  bottom: 0;
  font: 1.2em Helvetica, arial, sans-serif;
  display: grid;
  grid-gap: 0;
  grid-template-areas:
          "block1"
          "block2";
          
  ${props => props.theme.breakpoints.tablet} {
    height: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
            "block1 block2";

  } 
`;

const Block1 = styled.div`
  grid-area: block1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  height: 50vh;
`;

const Block2 = styled.div`
  grid-area: block2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  height: 50vh;
`;

const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
  background: transparent;
  width: 50vw;
`;

const Inner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 40vh;
  background: rgba(0,0,0,0.75);
  width: 80%;
   box-shadow: 2px 4px 6px 1px rgba( 0, 0, 0, 0.5);
`;

const MainIntro = styled.h1`
  font-family: ${props => props.theme.fonts.openSansSemiBold};
  font-weight: 800;
  font-size: 48px;
  color: white;
  padding: 0;
  margin: 0;
  text-align: justify;
  
  > span {
    color: #ffffff;
    text-shadow: 4px 4px #000;
  }
`;

const Mosaic = () => (
    <MainWrapper>
      <Block1>
        <Fade>
          <ReactPlayer
            url={Logo}
            loop={false}
            playing
            style={{ height: '100%', weight: '100%'}}
          />
        </Fade>
      </Block1>
      <Block2>
        <Panel>
          <Inner>
            <MainIntro>Help us get to know you better.. Fill out this form and then you will be given access to our Private Group on Facebook!...</MainIntro>
          </Inner>
        </Panel>
      </Block2>
    </MainWrapper>
);
export default Mosaic;
