import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import Image1 from '../../assets/images/Mosaic-Speask-Engaging-Millennials-min-min.jpg';
import Typist from '../Typist';

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
`;

const ParallaxIntro = styled(Parallax)`
  max-width: 100%;
  height: 95vh;
  ${props => props.theme.breakpoints.maxTablet} {
    height: 50vh;
  }
`;
const ParallaxComponent = () => (
  <div>
    <ParallaxIntro
      blur={10}
      bgImage={Image1}
      bgImageAlt="Millennial Generation"
      strength={200}
    >
      <TextWrapper>
        <Typist />
      </TextWrapper>
    </ParallaxIntro>
  </div>
);
export default ParallaxComponent;
