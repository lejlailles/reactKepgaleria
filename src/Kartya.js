import React from "react";
import "./index.css";



class Kep extends React.Component {
  kattintaskezelo=(id)=>{
    console.log(id);
    this.props.aktualisKep(id);
  };
  render() {
    return (
      <div className="kep" onClick={()=>this.kattintaskezelo(this.props.id)}>
        <h1>{this.props.cim}</h1>
        <img src={this.props.kep} alt={this.props.cim} />
        <p>{this.props.leiras}</p>
        
      </div>
    );
  }
}

export default Kep;
