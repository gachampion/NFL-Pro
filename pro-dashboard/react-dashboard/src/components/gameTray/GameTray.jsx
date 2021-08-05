
import React from "react";
import colts_steelers_0 from '../../assets/gameTrayScores/colts_steelers_0.svg';
import colts_steelers_1 from '../../assets/gameTrayScores/colts_steelers_1.svg';
import colts_steelers_2 from '../../assets/gameTrayScores/colts_steelers_2.svg';
import colts_steelers_3 from '../../assets/gameTrayScores/colts_steelers_3.svg';
import falcons_chiefs_0 from '../../assets/gameTrayScores/falcons_chiefs_0.svg';
import ravens_giants_0 from '../../assets/gameTrayScores/ravens_giants_0.svg';
import texans_bengals_0 from '../../assets/gameTrayScores/texans_bengals_0.svg';
import jags_bears_0 from '../../assets/gameTrayScores/jags_bears_0.svg';
import jets_browns_0 from '../../assets/gameTrayScores/jets_browns_0.svg';
import chargers_broncos from '../../assets/gameTrayScores/chargers_broncos.svg';
import washington_panthers from '../../assets/gameTrayScores/washington_panthers.svg';
import cowboys_eagles from '../../assets/gameTrayScores/cowboys_eagles.svg';
import seahawks_rams from '../../assets/gameTrayScores/seahawks_rams.svg';
import packers_titans from '../../assets/gameTrayScores/packers_titans.svg';

import "./GameTray.css";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currGame: colts_steelers_0
    }
  }

  handleSteelerGame = (newGame) =>{
    this.setState({
      currGame: newGame
    })
  }

  componentDidMount() {
    this.timer = setTimeout(
      () => this.handleSteelerGame(colts_steelers_1),
      1000*90 // in milliseconds, 3s for fast show
    )

    this.timer = setTimeout(
      () => this.handleSteelerGame(colts_steelers_2),
      1000*133 // in milliseconds, 3s for fast show
    )

    this.timer = setTimeout(
      () => this.handleSteelerGame(colts_steelers_3),
      1000*140 // in milliseconds, 3s for fast show
    )
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render(){
  return(
<div className="topbar">
      <div className="topbarWrapper">
        <img src={this.state.currGame} className="scoreCard" alt="" />
        <img src={falcons_chiefs_0} className="scoreCard" alt="" />
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