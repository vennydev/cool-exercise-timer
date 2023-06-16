import styled from "styled-components"

export default function ProgressBar( { timerObj }) {
  const time = timerObj[timerObj.mode];
  const highlightWidth = 100 - Math.floor((timerObj.remainingTime.total / (time * 60))*100);
  
  return (
    <ProgressBarContainer>
      <HightLight width={highlightWidth}/>
    </ProgressBarContainer>
  )
};

const Bar = styled.div`
  max-width: 983px;
  height:10px;
  border-radius: 5px;
`;

const ProgressBarContainer = styled(Bar)`
  width: 80%;
  background-color: var(--light-green);
`;

const HightLight = styled(Bar)`
  width: ${props => `${props.width}%`};
  background-color: var(--dim-green);
  transition: all 0.3s ease-in-out;
`;