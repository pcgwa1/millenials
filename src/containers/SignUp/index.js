import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { db } from '../../firebaseConfig';
import { Content } from '../../components/MainWrapper';
import Mosaic from '../../components/Mosaic/signup';
import Field from '../../components/FormField';


const Step1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  width: 100%;
  margin: 5% 0 0 0;
`;

const Step2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: black;
  width: 100%;
  margin: 5% 0 0 0;
  padding: 3% 0;
`;

const Step1Title = styled.h1`
  font-family: ${props => props.theme.fonts.openSansSemiBold};
  font-weight: 800;
  font-size: 28px;
  color: black;
  padding: 0;
  margin: 22px 0;
  text-transform: uppercase;
  width: 50%;
  text-align: center;
  
  > span {
    color: #ffffff;
    text-shadow: 4px 4px #000;
  }
`;

const Step2Title = styled.h1`
  font-family: ${props => props.theme.fonts.openSansSemiBold};
  font-weight: 800;
  font-size: 48px;
  color: white;
  padding: 0;
  margin: 22px 0;
  text-transform: uppercase;
  
  > span {
    color: #ffffff;
    text-shadow: 4px 4px #000;
  }
`;

const InnerStep = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: rgba(0,0,0,0.75);
  width: 40%;
   box-shadow: 2px 4px 6px 1px rgba( 0, 0, 0, 0.5);
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.7em 1.7em;
  margin: 18px 0.3em 0.3em 0;
  border-radius: 0.2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto',sans-serif;
  font-weight: 400;
  color: #FFFFFF;
  background-color: #3369ff;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
  text-align: center;
  position: relative;
  cursor: pointer;
`;

const Paragraph = styled.p`
  text-align: justify;
  padding: 0;
  font-weight: 600;
  color: white;
`;


const Form = styled.form`
  padding: 0;
`;

class JoinGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      surname: '',
      email: '',
      facebookName: '',
      suggestion: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    //step 1: create the reference
    const newNewReference = db.collection('members').doc();
    //step 2: update the reference with the data
    newNewReference.set({
      firstname: this.state.firstname,
      surname: this.state.surname,
      email: this.state.email,
      facebookName: this.state.facebookName,
      id: newNewReference.id })
  };

  handleChange(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    db.collection("members")
      .orderBy("firstname")
      .onSnapshot({ includeMetadataChanges: true }, (collection) => {
        const members = collection.docs.map(doc => doc.data());
        this.setState({members});
      });
  }
  render() {
    return (
      <Content>
        <Mosaic />
        <Step1>
          <Step1Title>
            ****IMPORTANT: WHEN YOU COMPLETE THE FORM, PLEASE CHECK YOUR EMAIL ASAP! THE EMAIL SUBJECT
            WILL BE, 'MILLENNIALS SIGN UP, PLEASE CONFIRM THE SUBSCRIPTION'. MAKE SURE TO CLICK CONFIRM!!!
          </Step1Title>
          <Form>
            <Field name='firstname' label='Firstname' type='text' onChangeHandler={this.handleChange} value={this.state.firstname} />
            <Field name='surname' label='Surname' type='text' onChangeHandler={this.handleChange} value={this.state.surname} />
            <Field name='email' label='Email' type='text' onChangeHandler={this.handleChange} value={this.state.email} />
            <Field name='facebookName' label='Facebook Name' type='text' onChangeHandler={this.handleChange} value={this.state.facebookName} />

            <Button type='button' style={{backgroundColor:'#000'}} onClick={this.handleSubmit}>
              <span style={{fontSize: '3em', fontFamily:'Comic Sans MS', borderRight: '1px solid rgba(255,255,255,0.5)', paddingRight:'0.3em', marginRight: '0.3em', verticalAlign: 'middle'}}>S</span>
              Submit
            </Button>
          </Form>
        </Step1>
        {/*<Step2>*/}
          {/*<Step2Title>STEP 2: FILL OUT THE CREATOR FORM</Step2Title>*/}
          {/*<InnerStep>*/}
            {/*<Paragraph>Millenials is an active online community curated to help creators of any type be better versions of themselves.*/}
              {/*It was created to expand our limits as creators, help push each other, share techniques, receive honest feedback on projects,*/}
              {/*network and a space for people to collaborate with each other.*/}
            {/*</Paragraph>*/}
          {/*</InnerStep>*/}
          {/*<Button style={{backgroundColor:'#000'}}>*/}
            {/*<span style={{fontSize: '3em', fontFamily:'Comic Sans MS', borderRight: '1px solid rgba(255,255,255,0.5)', paddingRight:'0.3em', marginRight: '0.3em', verticalAlign: 'middle'}}>M</span>*/}
            {/*Join Millennials by filling out the form*/}
          {/*</Button>*/}
        {/*</Step2>*/}
      </Content>
    );
  }
}

export default JoinGroup;
