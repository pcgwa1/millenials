import React, { PureComponent } from 'react';
import { Content } from '../../components/MainWrapper';
import Parallax from '../../components/Parallax';
import Mosaic from '../../components/Mosaic';

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
      <Content>
        <Parallax />
        <Mosaic />
      </Content>
    );
  }
}

export default Home;
