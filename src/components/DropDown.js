import styled from "styled-components";
import { useRecoilState } from "recoil";
import { timerConfigName } from "../recoil/atom";

const minutes = [3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

export default function DropDown({ configName }) {
  const [ config, setConfig ] = useRecoilState(timerConfigName);

  function getTime(min) {
    const newArr = config.map(el => {
      return el[configName] ? { [configName] : min} : el 
    })
    setConfig(newArr);
  };

  return (
    <>
      <DropDownContainer>
          <DropDownNav>
            {configName}
          </DropDownNav>
          <DropDownMinutesWrapper>
            <DropDownUl>
              {minutes.map((minutesNumber, i) => {
                return (
                  <DropDownList onClick={() => getTime(minutesNumber)} key={i}>
                    <div>{minutesNumber}</div>
                  </DropDownList>)
              })}
            </DropDownUl>
          </DropDownMinutesWrapper>
        </DropDownContainer>
    </>
  )
}

const DropDownContainer = styled.article`
  background-color: #212121;
  transform: translateX(-50%);
  position: absolute;
  top:10px;
  left: 50%;
  height: 150px;
  width: 250px;
  z-index: 100;
`
const DropDownNav = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: var(--main-black);
  height: 25%;
`

const DropDownMinutesWrapper = styled.div`
  height: 75%;
  overflow: scroll;
`

const DropDownUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style:none;
  scroll-snap-type: x mandatory;
`

const DropDownList = styled.li`
text-align: center;

  &:hover {
    background-color: var(--dimgrey);
}
`