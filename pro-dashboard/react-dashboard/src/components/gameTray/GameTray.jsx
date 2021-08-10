
import React from "react";
import colts_steelers_0 from '../../assets/gameTrayScores/colts_steelers_0.svg';
import colts_steelers_1 from '../../assets/gameTrayScores/colts_steelers_1.svg';
import colts_steelers_2 from '../../assets/gameTrayScores/colts_steelers_2.svg';
import colts_steelers_3 from '../../assets/gameTrayScores/colts_steelers_3.svg';
import falcons_chiefs_0 from '../../assets/gameTrayScores/falcons_chiefs_0.svg';
import falcons_chiefs_1 from '../../assets/gameTrayScores/falcons_chiefs_1.svg';
import falcons_chiefs_2 from '../../assets/gameTrayScores/falcons_chiefs_2.svg';
import falcons_chiefs_3 from '../../assets/gameTrayScores/falcons_chiefs_3.svg';
import ravens_giants_0 from '../../assets/gameTrayScores/ravens_giants_0.svg';
import texans_bengals_0 from '../../assets/gameTrayScores/texans_bengals_0.svg';
import jags_bears_0 from '../../assets/gameTrayScores/jags_bears_0.svg';
import jets_browns_0 from '../../assets/gameTrayScores/jets_browns_0.svg';
import chargers_broncos from '../../assets/gameTrayScores/chargers_broncos.svg';
import washington_panthers from '../../assets/gameTrayScores/washington_panthers.svg';
import cowboys_eagles from '../../assets/gameTrayScores/cowboys_eagles.svg';
import seahawks_rams from '../../assets/gameTrayScores/seahawks_rams.svg';
import packers_titans from '../../assets/gameTrayScores/packers_titans.svg';

import theFreshFade from "./theFreshFade.svg"

import "./GameTray.css";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      coltsGame: colts_steelers_0,
      cheifsGame: falcons_chiefs_0
    }
  }

  handleColtsGame = (newGame) =>{
    this.setState({
      coltsGame: newGame
    })
  }

  handleChiefsGame = (newGame) =>{
    this.setState({
      cheifsGame: newGame
    })
  }

  componentDidMount() {
    this.timer = setTimeout(
      () => this.handleColtsGame(colts_steelers_1),
      1000*90 // in milliseconds, 3s for fast show
    )

    this.timer = setTimeout(
      () => this.handleColtsGame(colts_steelers_2),
      1000*133 // in milliseconds, 3s for fast show
    )

    this.timer = setTimeout(
      () => this.handleColtsGame(colts_steelers_3),
      1000*140 // in milliseconds, 3s for fast show
    )

    this.timer = setTimeout(
      ()=> this.handleChiefsGame(falcons_chiefs_1),
      1000*141
    )

    this.timer = setTimeout(
      ()=> this.handleChiefsGame(falcons_chiefs_2),
      1000*330
    )

    this.timer = setTimeout(
      ()=> this.handleChiefsGame(falcons_chiefs_3),
      1000*371
    )

  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render(){
  return(
<div className="topbar">
      <img src={theFreshFade} className="freshFade" alt="" />
      <div className="topbarWrapper">
        <img src={this.state.coltsGame} className="scoreCard" alt="" />
        <img src={this.state.cheifsGame} className="scoreCard" alt="" />
        <img src={ravens_giants_0} className="scoreCard" alt="" />
        <img src={texans_bengals_0} className="scoreCard" alt="" />
        <img src={jags_bears_0} className="scoreCard" alt="" />
        <img src={jets_browns_0} className="scoreCard" alt="" />
        <img src={chargers_broncos} className="scoreCard" alt="" />
        <img src={washington_panthers} className="scoreCard" alt="" />
        <img src={cowboys_eagles} className="scoreCard" alt="" />
        <img src={seahawks_rams} className="scoreCard" alt="" />
        <img src={packers_titans} className="scoreCard" alt="" />
      </div>
    </div>
  );
}
}


export default App