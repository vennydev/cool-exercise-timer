import DropDown from "../DropDown";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from "styled-components"

export default function ConfigColumn({ configName, time, showDropDown, visible, index }) {
  return (
    <ConfigColumnWrapper onClick={() => showDropDown(index)}>
        <span>{configName}</span>
        <ConfigurationItemInfo>
          {time} min
          <ChevronRightIcon/>
        </ConfigurationItemInfo>
        { visible[index] ? <DropDown configName={configName}/> : null}
    </ConfigColumnWrapper>
  )
}

const ConfigColumnWrapper = styled.div`
position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  border-bottom: 1px solid var(--dimgrey);
  line-height: 40px;
  cursor: pointer;
`

const ConfigurationItemInfo = styled.div`
  display: flex;
  align-items: center;
`