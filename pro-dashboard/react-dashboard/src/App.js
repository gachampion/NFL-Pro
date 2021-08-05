import React from 'react';
import logo from './assets/pro_logo.svg';
import GameTray from './components/gameTray/GameTray';
import VideoStream from './components/videoStream/VideoStream';
import Queue from './components/queue/Queue';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="taskBar">
                    <a id="h">Home</a>
                    <a id="mp">My Profile</a>
                    <a id="eq">Edit Queue</a>
                    <a id="ca">Connected Accounts</a>
                    <a id="nflcom">NFL.com</a>
                </div>
            </div>
            <GameTray />
            <VideoStream />
            <Queue />
        </div>
    );
}

export default App;
