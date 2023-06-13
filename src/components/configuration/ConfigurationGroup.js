import ConfigColumn from "./ConfigColumn";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { timerConfigName }  from "../../recoil/atom";
import styled from "styled-components"

export default function ConfigurationGroup({ title }) {
  const configValue = useRecoilValue(timerConfigName);
  const [ view, setView ] = useState([]);

  function showDropDown(index) {
    let newView = view.map((boolean, i) => {
      if(index === i) return !boolean
      return false
    }); 
    setView(newView)
  };

  useEffect(() => {
    function countDropDown() {
      const falseArr = [];
      for(let i in configValue){
        falseArr.push(false);
      }
      return setView(falseArr) 
    };
    countDropDown();
  }, []);
  return (
    <div>
      <Title>{title}</Title>

      {configValue.map((item, index) => {
        const title = Object.keys(item)[0];
        const time = Object.values(item)[0];
        return (
          <ConfigColumn 
            key={index}
            configName={title}
            time={time}
            showDropDown={showDropDown} 
            visible={view}
            index={index}/>
        )
      })}
    </div>
  )
}

const Title = styled.span`
  color: var(--grey);
  font-size: var(--font-sm);
   margin:10px;
`