import { atom } from "recoil"

const initialValue = [
  { time: 15 },
  { shortBreak: 5 },
  { longBreak: 5 }, 
];

const timerConfigName = atom({
  key: 'timerConfigName',
  default: initialValue,
});

export { timerConfigName }