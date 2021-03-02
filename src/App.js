import SiteHeader from './components/SiteHeader'
import List from './components/List'
import majors from './Data'
import './App.css';

import {Typography} from 'antd'
const { Title, Paragraph, Text, Link } = Typography;

function App() {
  return (
    <div>
      <SiteHeader/>
      <Typography style={{textAlign: "center", color: "white"}} className={"animated fadeIn"}>
        <Title>
          Majors Ranked is a website aimed to help students learn about the variety of majors offered in college.
        </Title>

        <Paragraph>
          Deciding a major is hard for many students, and we wish to offer a solution to make the process easy and simple to understand. 
        </Paragraph>

        <Paragraph>
          Use the Search Below to find information on the collection of {majors.length} majors we have currently.
        </Paragraph>

        <Paragraph>
          Brought to you by Ankit Joju and Joshua Galvez.
        </Paragraph>

      
      </Typography>




      <List/>
    </div>
  );
}

export default App;
