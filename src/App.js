import SiteHeader from './components/SiteHeader'
import List from './components/List'
import majors from './Data'
import './App.css';

import {Typography} from 'antd'

const { Title, Paragraph, Text, Link } = Typography;

function App() {
  return (
    <div className="App">
      <SiteHeader/>
      <div style={{height:"100vh", overflow: "scroll"}}>
        <div style={{height: "6vh"}}></div>

        <Typography style={{textAlign: "center", color: "white"}} className={"animated fadeIn"}>
          <Title style={{paddingLeft:"2vw", paddingRight:"2vw"}}>
            Majors Ranked is a website aimed to help students learn about the variety of majors offered in college.
          </Title>

          <Paragraph style={{paddingLeft:"2vw", paddingRight:"2vw"}}>
            Deciding a major is hard for many students, and we wish to offer a solution to make the process easy and simple to understand.
          </Paragraph>

          <Paragraph style={{paddingLeft:"2vw", paddingRight:"2vw"}}>
            Use the Search Below to find information on the collection of {majors.length} majors we have currently.
          </Paragraph>

          <Paragraph style={{paddingLeft:"2vw", paddingRight:"2vw"}}>
            Brought to you by Ankit Joju and Joshua Galvez.
          </Paragraph>


        </Typography>

        <List/>

        <div style={{height: "10vh"}}></div>
      </div>
    </div>
  );
}

export default App;
