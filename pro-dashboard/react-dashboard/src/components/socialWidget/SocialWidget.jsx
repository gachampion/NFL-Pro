import React, {useState} from "react";
import chat_selected from "./assets/chat_selected.svg";
import chat_unselected from "./assets/chat_unselected.svg";
import tweets_selected from "./assets/tweets_selected.svg";
import tweets_unselected from "./assets/tweets_unselected.svg";

import chatPage from "./assets/chatPage.svg";
import chatPage2 from "./assets/chatPage_2.svg";
import chatPage3 from "./assets/chatPage_3.svg";
import tweetsPage from "./assets/tweetsPage.svg";
import p2pBetPanel from "./assets/p2pBetPanel.svg";

import "./SocialWidget.css";

export default function SocialWidget() {

    const [selection, setSelection] = useState(0);

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // alert('do validate');
            setSelection(prevMode => 2)

        }
    }

    return (
        <div class="wrapperRight">
            <div class="socialTabs">
                <div class="sTabs">
                    <img src={((selection === 0) || (selection === 2) || (selection === 3) || (selection === 4)) ? chat_selected : chat_unselected} onClick={() => setSelection(prevMode => 0)} className="chat" alt="chat" />
                    <img src={(selection === 1) ? tweets_selected : tweets_unselected} onClick={() => setSelection(prevMode => 1)} className="tweets" alt="tweet" />
                </div>
                <img src={(selection === 0) ? chatPage : '//:0'} className={(selection === 0) ? "selectedWindowRight_0" : "hidden"} alt="" />
                <img src={((selection === 2) || (selection === 3)) ? chatPage2 : '//:0'} className={((selection === 2) || (selection === 3)) ? "selectedWindowRight_0" : "hidden"} alt="" onClick={() => setSelection(prevMode => 3)} />
                <img src={(selection === 4) ? chatPage3 : '//:0'} className={(selection === 4) ? "selectedWindowRight_0" : "hidden"} alt="" />
                <img src={(selection === 1) ? tweetsPage : '//:0'} className="selectedWindowRight_1" alt="" />
            </div>
            <input className={((selection === 0) || (selection === 2) || (selection === 3) || (selection === 4)) ? "chatInput" : "hidden"} type="text" placeholder="Send a Message" onKeyDown={_handleKeyDown}/>
            <div className="p2pBettingPanel">
                <img src={(selection === 3) ? p2pBetPanel : '//:0'} className="p2pBettingBackdrop" alt="" onClick={() => setSelection(prevMode => 4)}/>
            </div>
        </div>
    );
}