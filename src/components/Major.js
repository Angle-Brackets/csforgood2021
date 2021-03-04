import React from "react";
import { Component } from "react";

export default class Major extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      rank: this.props.rank,
      salary: this.props.salary,
      desc: this.props.desc,
      jobs: this.props.jobs,
      show: false,
    }

    this.expand = this.expand.bind(this);
  }


  componentDidUpdate(previousProps) {
    if (this.props !== previousProps) {
      this.setState({
        name: this.props.name,
        rank: this.props.rank,
        salary: this.props.salary,
        desc: this.props.desc,
        jobs: this.props.jobs,
      })
    }
  }


  expand() {
    if(this.state.show) {
      this.setState({show: false})
    } else {
      this.setState({show: true})
    }
    console.log(this.state.show)
  }


  render(){

    return(
      <>
          <tr className="entry" onClick={() => this.expand()} style={{display: `${this.state.show ? ("none") : ("revert")}`}}>
           <td> </td>
           <td style={{color:"#3db6ff", paddingTop:"0.5%", paddingBottom:"0.5%", fontSize: "0.7em", fontWeight: "bold"}}>{this.state.name.toUpperCase()}</td>
           <td>{this.state.rank}</td>
           <td>${this.state.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          </tr>
          <tr id="info" className="entryInfo" style={{display: `${this.state.show ? ("table-row") : ("none")}`}} onClick={() => this.expand()}>
            <td style={{ background: "#6565650a"}}></td>
            <td colSpan="3" style={{paddingTop:"0.5%", paddingBottom:"0.5%", background: "#6565650a"}}>
              <div style={{color: "#3db6ff", fontWeight:"bold", fontSize:"0.7em"}}>{this.state.name.toUpperCase()}</div>
              <div style={{fontSize:"0.9em"}}>{this.state.desc}</div>
              <div style={{display: "flex", alignItems: "center", fontWeight:"bold", fontSize:"2vh", color: "#f845a7", whiteSpace: "pre"}}>
              <span style={{color: "black", fontSize:"1.5vh"}}>JOBS   </span>
              {this.state.jobs.map((job, i) =>
                <>{job}{(i < this.state.jobs.length - 1) ? <>, </> : <></>}</>
              )}
              </div>
              <div style={{display: "flex", alignItems: "center", fontWeight:"bold", fontSize:"2vh", color: "#f845a7", whiteSpace: "pre"}}>
                <span style={{color: "black", fontSize:"1.5vh"}}>RANK   </span> {this.state.rank}
              </div>
              <div style={{display: "flex", alignItems: "center", fontWeight:"bold", fontSize:"2vh", color: "#f845a7", whiteSpace: "pre"}}>
                <span style={{color: "black", fontSize:"1.5vh"}}>ESTIMATED INCOME   </span> ${this.state.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
              </td>
          </tr>
      </>
    );
}

}
