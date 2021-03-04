import React from "react";
import {Input, Row, Col} from "antd"
import {CaretUpOutlined, CaretDownOutlined, UpOutlined} from '@ant-design/icons'
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
    this.setState({searchTerm: event.target.value}, () => this.setState({majors: this.sort(this.applySearch(majors), this.state.sort)}));
  }

  applySearch(items) {
    let temp = [];
    items.forEach(major => {
      if(major.name.toLowerCase().search(this.state.searchTerm.toLowerCase()) != -1)
        temp.push(major);
    })
    return temp;
  }

  sort = (temp, type) => {
    if(type[1] === 0) {
      return temp;
    } else {
      if(type[0] === "RANK") {
        if(type[1] === 1) {
          temp.sort(function(a, b){
            if(a.rank < b.rank) { return -1; }
            if(a.rank > b.rank) { return 1; }
            return 0;
          })
        } else if (type[1] === 2) {
          temp.sort(function(a, b){
            if(a.rank > b.rank) { return -1; }
            if(a.rank < b.rank) { return 1; }
            return 0;
          })
        }
      } else if (type[0] == "SALARY") {
        if(type[1] === 1) {
          temp.sort(function(a, b){
            if(a.salary > b.salary) { return -1; }
            if(a.salary < b.salary) { return 1; }
            return 0;
          })
        } else if (type[1] === 2) {
          temp.sort(function(a, b){
            if(a.salary < b.salary) { return -1; }
            if(a.salary > b.salary) { return 1; }
            return 0;
          })
        }
      }
    }
    return temp;
  }

  clickSort = type => {
    let temp = this.applySearch(majors)
    if(type == "RANK") {
      if(this.state.sort[0] != "RANK" || this.state.sort[1] == 0) {
        temp = this.sort(temp, ["RANK", 1])
        this.setState({sort: ["RANK", 1]})
      } else if (this.state.sort[1] == 1) {
        temp = this.sort(temp, ["RANK", 2])
        this.setState({sort: ["RANK", 2]});
      } else {
        this.setState({sort: ["NONE", 0]});
      }
    } else if (type == "SALARY") {
      if(this.state.sort[0] != "SALARY" || this.state.sort[1] == 0) {
        temp = this.sort(temp, ["SALARY", 1])
        this.setState({sort: ["SALARY", 1]})
      } else if (this.state.sort[1] == 1) {
        temp = this.sort(temp, ["SALARY", 2])
        this.setState({sort: ["SALARY", 2]});
      } else {
        this.setState({sort: ["NONE", 0]});
      }
    }
    this.setState({majors: []}, () => this.setState({majors: temp}));
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
    border: "0",
    borderBottom: "1px solid #dcdcdc",
    padding: "0px 20px 0px 4px",
    backgroundPosition: "10px 10px",
    backgroundRepeat: "no-repeat",
    fontSize: "1rem",
    borderRadius:"0",
    color: "gray",
  };

    return(
      <div style={{marginLeft: "auto", marginRight: "auto", width:"fit-content", marginTop: "2vw"}}>
      <div style={{boxShadow:"-5px 3px 0px #00000036", padding:"0.5vh 1vw 0.5vh 1vw", borderRadius: "10px 10px 0 0", background: "white", marginLeft: "auto", width: "fit-content"}}>
        <input style={inputCSS} value={this.state.searchTerm} type="text" placeholder="Enter Major" onChange={this.search}/>
      </div>
      <div style={{boxShadow:"-5px 5px 0px #00000036", backgroundColor: "white", width: "90vw", height:"fit-content", paddingTop:"1.5vw", borderRadius: "10px 0 10px 10px", overflow: "scroll"}} className={"animated fadeIn"}>


      <table border="1" frame="void" rules="rows" style={wrap}>
        <colgroup>
         <col style={{width: "3%", minWidth: "3%"}}/>
         <col style={{width: "60%", minWidth: "60%"}}/>
         <col style={{width: "17%", minWidth: "17%"}}/>
         <col style={{width: "20%", minWidth: "20%"}}/>
        </colgroup>
        <tr className="listHeader">
          <th></th>
          <th>Major</th>
          <th onClick={() => this.clickSort("RANK")}><div style={{display:"flex"}}>Ranking<div style={{marginRight: "2px", marginLeft: "2px", display:"grid"}}>{this.state.sort[0] == "NONE" || this.state.sort[0] == "SALARY" ? <><CaretUpOutlined style={{fontSize:"1.5vh", color: "#cacaca"}}/><CaretDownOutlined style={{fontSize:"1.5vh", color: "#cacaca"}}/></> : this.state.sort[0] == "RANK" && this.state.sort[1] == 1 ? <><CaretUpOutlined style={{fontSize:"1.5vh", color: "#01a4ec"}}/><CaretDownOutlined style={{fontSize:"1.5vh", color: "#cacaca"}}/></> : <><CaretUpOutlined style={{fontSize:"1.5vh", color: "#cacaca"}}/><CaretDownOutlined style={{fontSize:"1.5vh", color: "#01a4ec"}}/></>}</div></div></th>
          <th onClick={() => this.clickSort("SALARY")}><div style={{display:"flex"}}>Salary<div style={{marginRight: "2px", marginLeft: "2px", display:"grid"}}>{this.state.sort[0] == "NONE" || this.state.sort[0] == "RANK" ? <><CaretUpOutlined style={{fontSize:"1.5vh", color: "#cacaca"}}/><CaretDownOutlined style={{fontSize:"1.5vh", color: "#cacaca"}}/></> : this.state.sort[0] == "SALARY" && this.state.sort[1] == 1 ? <><CaretUpOutlined style={{fontSize:"1.5vh", color: "#01a4ec"}}/><CaretDownOutlined style={{fontSize:"1.5vh", color: "#cacaca"}}/></> : <><CaretUpOutlined style={{fontSize:"1.5vh", color: "#cacaca"}}/><CaretDownOutlined style={{fontSize:"1.5vh", color: "#01a4ec"}}/></>}</div></div></th>
        </tr>
        <tbody style={{background: "transparent"}}>
          {this.state.majors.map(major =>
            <Major name={major.name} rank={major.rank} salary={major.salary}
            desc={major.desc} jobs={major.jobs} />
          )}
        </tbody>
      </table>
      </div>
      </div>
    );
}

}

export default List;
