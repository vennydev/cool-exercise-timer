import styled from "styled-components";
import { Navigation } from "../components";
import { useRecoilState } from "recoil";
import { timerConfigName } from "../recoil/atom";
import { useState, useEffect } from "react";
import ProgressBar from "../components/ProgressBar";

let intervalID;

export default function Home() {
  const [ timer, setTimer ] = useRecoilState(timerConfigName);
  const [ timerObj, setTimerObj ] = useState();
  const [ onStart, setOnStart ] = useState(false);

  const minute = timerObj && timerObj.remainingTime.minute;
  const seconds = timerObj && timerObj.remainingTime.seconds; 

  function setMode(mode){
    const timerObject = {};
    timer.map(el => {
      const key = Object.keys(el)[0];
      const value = Object.values(el)[0];
      timerObject[key] = value;
    }); 
    timerObject.mode = mode;
    timerObject.interval = 4;
    timerObject.remainingTime = {
      total : timerObject[mode] * 60,
      minute : timerObject[mode],
      seconds: 0,
    }

    setTimerObj(timerObject);
    };
    
    function stopTimer(){
      setOnStart(false)
      clearInterval(intervalID);
    }
    function startTimer(){
      const { total } = timerObj.remainingTime;
      const endTime = Date.parse(new Date()) + (total * 1000);

      setOnStart(true);

      intervalID = setInterval(function() {
        setTimerObj({...timerObj, remainingTime : getRemainingTime(endTime)});
        const { total } = getRemainingTime(endTime);
        if(total <= 0) {
          clearInterval(intervalID);
          switch(timerObj.mode) {
            case 'time' : 
              setMode('shortBreak');
              startTimer();
            break;
            default:
              setMode('time');
          }
        }
      }, 1000);
    };

    function getRemainingTime(endTime) {
      const currentTime = Date.parse(new Date());
      const diff = endTime - currentTime;
      
      const total = diff / 1000;
      const minute = Math.floor(total / 60); 
      const seconds = total % 60; 

      return {
        total,
        minute,
        seconds,
      }
    };
    useEffect(() => {
      setMode('time');
    }, []);
  return(
    <MainContainer>
      <div style={{ flexShrink: 0}}>
        <Navigation/>
      </div>
      <Main>
          { timerObj ? (
            <>
              <ProgressBar timerObj={timerObj}/>
              <Timer>
                <Time>{minute < 10 ? `0${minute}` : minute}</Time>
                  <Colon>:</Colon>
                <Time>{seconds < 10 ? `0${seconds}` : seconds}</Time>
              </Timer>
            </>
          ) : null }
        <StartButton onClick={onStart ? stopTimer : startTimer} className={onStart ? "stop" : "start"}>
          {onStart ? "Stop" : "Start"}
        </StartButton>
      </Main>
    </MainContainer>
  )
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Timer = styled.div`
  display: flex;
  align-items: center;
`

const Time = styled.span`
  letter-spacing: 4px;
    font-size: clamp(3rem, 35vw, 25rem);
`

const Colon = styled.span`
  font-size: 100px;
  margin: 0px 25px;
`

const StartButton = styled.button`
  all: unset;
  border: 1px solid var(--white);
  width: 120px;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    background-color: white;
    color:var(--main-grey);
  }
`
