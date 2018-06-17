import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { Parallax } from 'react-parallax';
import { Fade } from 'react-reveal';
import Image1 from '../../assets/images/graffiti.jpg';

export const MainWrapper = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  bottom: 0;
  font: 1.2em Helvetica, arial, sans-serif;
  display: grid;
  grid-gap: 0;
  grid-template-areas:
          "block1"
          "block2"
          "block3"
          "block4";
          
  ${props => props.theme.breakpoints.tablet} {
    height: 95vh;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
            "block1 block2"
            "block3 block4";

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
  background: white;
  height: 50vh;
`;

const Block3 = styled.div`
  grid-area: block3;
  background: white;
  height: 50vh;
`;

const Block4 = styled.div`
  grid-area: block4;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  height: 45vh;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 40vh;
  background: rgba(255,255,255,0.75);
  width: 80%;
   box-shadow: 2px 4px 6px 1px rgba( 0, 0, 0, 0.5);
`;

const Paragraph = styled.p`
  text-align: center;
  padding: 0 15%;
  font-weight: 600;
`;

const MainIntro = styled.h1`
  font-family: ${props => props.theme.fonts.openSansSemiBold};
  font-weight: 800;
  font-size: 88px;
  color: black;
  padding: 0;
  margin: 0;
  text-shadow: 4px 4px #fff;
  
  > span {
    color: #ffffff;
    text-shadow: 4px 4px #000;
  }
`;

const Mosaic = () => (
  <MainWrapper>
    {/*<Block1>*/}
      {/*<Fade>*/}
        {/*<ReactPlayer*/}
          {/*url={Video}*/}
          {/*loop={false}*/}
          {/*playing*/}
          {/*style={{ height: '100%', weight: '100%'}}*/}
        {/*/>*/}
      {/*</Fade>*/}
    {/*</Block1>*/}
    <Block1>
      <Parallax
        blur={0}
        bgImage={Image1}
        bgImageAlt="Millennial Generation"
        strength={300}
        style={{ height: '100%'}}
      >
        <Panel>
        </Panel>
      </Parallax>
    </Block1>
    <Block2>
      <Panel>
        <Inner>
          <MainIntro>Who are we<span>?</span></MainIntro>
          <Paragraph>Millenials is an active online community curated to help creators of any type be better versions of themselves.
            It was created to expand our limits as creators, help push each other, share techniques, receive honest feedback on projects,
            network and a space for people to collaborate with each other.
          </Paragraph>
        </Inner>
      </Panel>
    </Block2>
    <Block3 />
    <Block4>

    </Block4>
  </MainWrapper>
);
export default Mosaic;
