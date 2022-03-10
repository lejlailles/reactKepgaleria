import React from "react";
import "./index.css";
import Kep from "./Kartya";

const kepeim = [
  {
    id:1,
    kep: "kepek/kep1.jpg",
    cim: "Havas csúcsok",
    leiras: "Havas csúcsok",
  },
  {
    id:2,
    kep: "kepek/kep2.jpg",
    cim: "Havas csúcsok 2",
    leiras: "Havas csúcsok 2",
  },
  {
    id:3,
    kep: "kepek/kep3.jpg",
    cim: "Havas csúcsok 3",
    leiras: "Havas csúcsok 3",
  },
];

class Galeria extends React.Component {
  constructor(){
    super();
    this.state={
      kep: {
        id:1,
        kep: "kepek/kep1.jpg",
        cim: "Havas csúcsok",
        leiras: "Havas csúcsok",
      }
    }
  }

  aktualisKep=(id)=>{
    console.log("galériában: "+ id);
    this.setState({
     kep:kepeim[id],
    })

   
  };

  balra=()=>{
    let leptet=this.state.kep-1;
    if(leptet<0){
      leptet=kepeim.length;
    }

    this.setState({
      kep:leptet
    })

 }

 jobbra=()=>{
  let leptet=this.state.kep-1;
  if(leptet<kepeim.length){
    leptet=0;
  }

  this.setState({
    kep:leptet
  })
   
 }
  render() {
    return (
      <React.Fragment>
      <div className="nagyKep">
      <div className="bal">
      <button onClick={this.balra}>Balra</button></div>
      
      <div className="nagy">
      
      <h1>{this.state.kep.cim}</h1>
        <img src={this.state.kep.kep} alt={this.state.kep.cim} />
        <p>{this.state.kep.leiras}</p>
        </div>
        <div className="jobb">
        <button onClick={this.jobbra} >Jobbra</button>
        </div>
        
      </div>
      <div className="galeria">
        {kepeim.map((elem, index) => {
          elem.id=index;
          return (
           
            <Kep
              key={elem.id}
              id={elem.id}
              aktualisKep={this.aktualisKep}
              cim={elem.cim}
              kep={elem.kep}
              leiras={elem.leiras}
            ></Kep>
          );
         
        })}
        </div>
      </React.Fragment>
    );
  }
}

export default Galeria;
