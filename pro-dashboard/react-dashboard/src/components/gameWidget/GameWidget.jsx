import React, {useState} from "react";

import betting_selected from './assets/betting_selected.svg';
import betting_unselected from './assets/betting_unselected.svg';
import fantasy_unselected from './assets/fantasy_unselected.svg';
import fantasy_selected from './assets/fantasy_selected.svg';
import stats_unselected from './assets/stats_unselected.svg';
import stats_selected from './assets/stats_selected.svg';

import bettingPage from './assets/bettingPage.svg';
import fantasyPage from './assets/fantasyPage.svg';
import statsPage from './assets/statsPage.svg';
import playerStatsPage from './assets/playerStatsPage.svg';

import fantasyHighlightFootage from './assets/footage/kelce touchdown.mp4';

import "./GameWidget.css";

export default function GameWidget() {
    var bet_img = betting_selected;
    var fantasy_img = fantasy_unselected;
    var stats_img = stats_unselected;

    const [selection, setSelection] = useState(0);
    const [miniPlayer, miniPlayerSwitch] = useState(false);
    const [playerStat, playerStatSwitch] = useState(false);

    const betClick = () => {
      alert("Hello! I am an alert box!!");
    }

    const fantasyClick = () => {
      alert("Hello! I am an alert box!!");
    }

    const statsClick = () => {
      alert("Hello! I am an alert box!!");
    }

    return (
        <div class="wrapper">
            <div class="taskTabs">
                <div class="tabs">
                    <img src={(selection === 0) ? betting_selected : betting_unselected} onClick={() => setSelection(prevMode => 0)} className="betting" alt="bet" />
                    <img src={(selection === 1) ? fantasy_selected : fantasy_unselected} onClick={() => setSelection(prevMode => 1)} className="fantasy" alt="bet" />
                    <img src={(selection === 2) ? stats_selected : stats_unselected} onClick={() => setSelection(prevMode => 2)} className="stats" alt="bet" />
                </div>
                <img src={(selection === 0) ? bettingPage : '//:0'} className="selectedWindow" alt="" />
                <img src={(selection === 1) ? fantasyPage : '//:0'} onClick={() => miniPlayerSwitch(prevMode => !prevMode)} className="selectedWindow1" alt="" />
                {/* <img src={(selection === 2) ? statsPage : '//:0'} onClick={() => playerStatSwitch(prevMode => !prevMode)} className="selectedWindow2" alt="" /> */}
                <img src={(selection === 2) ? (playerStat ? playerStatsPage: statsPage) : '//:0'} onClick={() => playerStatSwitch(prevMode => !prevMode)} className="selectedWindow2" alt="" />
            </div>
            <div class={miniPlayer ? 'vid' : 'vid hidden'}>
                <button class="close" onClick={() => miniPlayerSwitch(prevMode => !prevMode)}>Hide</button>
                <video
                    id="video"
                    class="video-js"
                    preload="auto"
                    controls
                    muted
                    width="382"
                    height="214"
                    >
                    <source src={fantasyHighlightFootage} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}