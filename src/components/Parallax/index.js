import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import Image1 from '../../assets/images/Mosaic-Speask-Engaging-Millennials-min-min.jpg';
import Typist from '../Typist';

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0,0,0, 1);
  width: 100%;
  height: 100px;
`;

const ParallaxComponent = () => (
  <div>
    <Parallax
      blur={10}
      bgImage={Image1}
      bgImageAlt="Millennial Generation"
      strength={200}
    >
      <TextWrapper>
        <Typist />
      </TextWrapper>
    </Parallax>
    <Wrapper />
  </div>
);
export default ParallaxComponent;
