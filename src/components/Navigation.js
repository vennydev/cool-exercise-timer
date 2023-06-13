import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';
import styled from "styled-components";

export default function Navigation({title}) {
  return(
    <Nav>
      <h4 className="title">{title ? title : "타이틀없음"}</h4>
      <Link to="/home"  className='chevron-left'>
        <ChevronLeftIcon />
      </Link>
    </Nav>
  )
}

const Nav = styled.nav`
  background-color: var(--main-black);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;

  .chevron-left {
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    text-decoration: none;
    color:var(--white)
  }

  .title {
    margin: 0 auto;
  }
`