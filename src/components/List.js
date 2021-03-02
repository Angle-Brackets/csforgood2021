import React from "react";
import {Input} from "antd"
import {UpOutlined, DownOutlined, LineOutlined} from '@ant-design/icons'
import { Component } from "react";
import Major from "./Major.js"
import majors from '../Data.js'
import '../App.css';

const Search = {Input}

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      majors: majors,
      sort: ["NONE", 0],
      searchTerm: '',
    }

    this.search = this.search.bind(this);
  }

  search(event) {
    this.setState({searchTerm: event.target.value}, () => this.setState({majors: this.applySearch(majors)}));
  }

  applySearch(items) {
    let temp = [];
    items.forEach(major => {
      if(major.name.toLowerCase().search(this.state.searchTerm.toLowerCase()) != -1)
        temp.push(major);
    })
    return temp;
  }

  sort = type => {
    let temp = this.applySearch(majors)
    if(type == "RANK") {
      if(this.state.sort[0] != "RANK" || this.state.sort[1] == 0) {
        temp.sort(function(a, b){
          if(a.rank < b.rank) { return -1; }
          if(a.rank > b.rank) { return 1; }
          return 0;
        })
        this.setState({sort: ["RANK", 1]})
      } else if (this.state.sort[1] == 1) {
        temp.sort(function(a, b){
          if(a.rank > b.rank) { return -1; }
          if(a.rank < b.rank) { return 1; }
          return 0;
        })
        this.setState({sort: ["RANK", 2]});
      } else {
        this.setState({sort: ["RANK", 0]});
      }
    } else if (type == "SALARY") {
      if(this.state.sort[0] != "SALARY" || this.state.sort[1] == 0) {
        temp.sort(function(a, b){
          if(a.salary < b.salary) { return -1; }
          if(a.salary > b.salary) { return 1; }
          return 0;
        })
        this.setState({sort: ["SALARY", 1]})
      } else if (this.state.sort[1] == 1) {
        temp.sort(function(a, b){
          if(a.salary > b.salary) { return -1; }
          if(a.salary < b.salary) { return 1; }
          return 0;
        })
        this.setState({sort: ["SALARY", 2]});
      } else {
        this.setState({sort: ["SALARY", 0]});
      }
    }
    this.setState({majors: temp});
  }

  render(){

  let wrap = {
    width: "90vw",
    marginLeft: "auto",
    marginRight: "auto",
    height: "fit-content",
    borderCollapse: "collapse",
    borderColor: "#dcdcdc",
  };

  let inputCSS = {
    border: "1px solid #dcdcdc",
    margin: "1vw 0 0 2.5vw",
    padding: "0px 20px 0px 0px",
    backgroundPosition: "10px 10px",
    backgroundRepeat: "no-repeat",
    fontSize: "1rem",
  };

  console.log(this.state.sort)

    return(
      <div style={{backgroundColor: "white", width: "90vw", marginLeft: "auto", marginRight: "auto", paddingTop:"1.5vw", paddingBottom: "1.5vw", marginTop: "2vw", borderRadius: "25px"}} className={"animated fadeIn"}>

      
      <input style={inputCSS} value={this.state.searchTerm} type="text" placeholder="Enter Major" onChange={this.search}/>
      <text style={{fontSize: "2rem", fontWeight: "bold", justifyContent: "center"}}>Major List</text>

      <table border="1" frame="void" rules="rows" style={wrap}>
        <colgroup>
         <col style={{width: "3%", minWidth: "3%"}}/>
         <col style={{width: "67%", minWidth: "70%"}}/>
         <col style={{width: "10%", minWidth: "10%"}}/>
         <col style={{width: "20%", minWidth: "20%"}}/>
        </colgroup>
        <tr style={{background: "#f9f9f9", textAlign: "left", padding: "2vw", fontSize: "2.75vh"}}>
          <th></th>
          <th>Major</th>
          <th>Ranking <span onClick={() => this.sort("RANK")}>{this.state.sort[0] == "RANK" && this.state.sort[1] == 0 ? <LineOutlined/> : this.state.sort[0] == "RANK" && this.state.sort[1] == 1 ? <UpOutlined/> : <DownOutlined/>}</span></th>
          <th>Salary <span onClick={() => this.sort("SALARY")}>{this.state.sort[0] == "SALARY" && this.state.sort[1] == 0 ? <LineOutlined/> : this.state.sort[0] == "SALARY" && this.state.sort[1] == 1 ? <UpOutlined/> : <DownOutlined/>}</span></th>
        </tr>
        <tbody>
          {this.state.majors.map(major =>
            <Major name={major.name} rank={major.rank} salary={major.salary}
            desc={major.desc} jobs={major.jobs} />
          )}
        </tbody>
      </table>
      </div>
    );
}

}

export default List;
