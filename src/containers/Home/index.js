import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { Parallax } from 'react-parallax';
import ParallaxIntro from '../../components/Parallax';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Logo from '../../assets/video/logo.mp4';
import Image1 from '../../assets/images/graffiti.jpg';

export const PageHeader = styled(Col)`
  width: 100vw;
  margin: 0;
  padding: 0;
`;

export const Content = styled(Col)`
  height: 67vh;
`;

export const FullRow = styled(Row)`
  height: 100%;
`;

export const Column = styled(Col)`

`;

export const ColumnBlack = styled(Col)`
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
  background: transparent;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 40vh;
  background: rgba(255,255,255,0.75);
  width: 100%;
   box-shadow: 2px 4px 6px 1px rgba( 0, 0, 0, 0.5);
`;

const Paragraph = styled.p`
  text-align: center;
  padding: 0 15%;
  font-weight: 600;
  
  ${props => props.theme.breakpoints.maxTablet} {
    text-align: justify;
    padding: 0 5%;
  }
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
  
    ${props => props.theme.breakpoints.maxTablet} {
     font-size: 44px;
  }
`;

const PanelParallax = styled(Parallax)`
  width: 50vw;
  height: 50vh;
  
  ${props => props.theme.breakpoints.maxTablet} {
    width: 100vw;
    height: 40vh;
  }
`;

class Home extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      user: '',
    };
  }
  async componentDidMount() {

  }
  render() {
    return (
      <Row>
        <PageHeader xs={12}>
          <ParallaxIntro />
        </PageHeader>
        <ColumnBlack xs={12} md={6}>
          <Video autoPlay
                 controls={[]}
                 style={{width: '100%', margin: '0'}}
                 poster="http://sourceposter.jpg"
                 onCanPlayThrough={() => {
                   // Do stuff
                 }}>
            <source src={Logo} type="video/webm" />
          </Video>
        </ColumnBlack>
        <Column center='xs' xs={12}  md={6}>
          <Panel>
            <Inner>
              <MainIntro>Who are we<span>?</span></MainIntro>
              <Paragraph>Millenials is an active online community curated to help creators of any type be better versions of themselves.
              It was created to expand our limits as creators, help push each other, share techniques, receive honest feedback on projects,
              network and a space for people to collaborate with each other.
              </Paragraph>
            </Inner>
          </Panel>
        </Column>
        <Column center='xs' xs={12}  md={6}>
          <Panel>
            <Inner>
              <MainIntro>Who are we<span>?</span></MainIntro>
              <Paragraph>Millenials is an active online community curated to help creators of any type be better versions of themselves.
                It was created to expand our limits as creators, help push each other, share techniques, receive honest feedback on projects,
                network and a space for people to collaborate with each other.
              </Paragraph>
            </Inner>
          </Panel>
        </Column>
        <ColumnBlack center='xs' xs={12}  md={6}>
          <Parallax
            blur={0}
            bgImage={Image1}
            bgImageAlt="Millennial Generation"
            strength={300}
          >
          <PanelParallax />
          </Parallax>
        </ColumnBlack>
      </Row>
    );
  }
}

export default Home;
