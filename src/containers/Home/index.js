import React, { PureComponent } from 'react';
import { Content } from '../../components/MainWrapper';
import Parallax from '../../components/Parallax';
import Mosaic from '../../components/Mosaic';


class Home extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      surveyList: [],
    };
  }
  async componentDidMount() {
    this.setState({
      surveyList: '',
    });
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
