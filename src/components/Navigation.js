import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRightIcon, ChevronLeftIcon, SettingsIcon } from '../assets/icon/index.js';

export default function Navigation({ title }) {
  return(
    <Nav>
      {title 
        ? (
          <>
            <h4 className="title">{title}</h4>
            <Link to="/home"  className='chevron chevron-left'>
              <ChevronLeftIcon />
            </Link>
          </>
        ) 
        : (
          <>
          <Link to="/setting"  className='chevron chevron-right'>
              <SettingsIcon />
            </Link>
          </>
        )
        }
      
    </Nav>
  )
}

const Nav = styled.nav`
  background-color: var(--main-black);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  .chevron {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    text-decoration: none;
    color:var(--white)
  }

  .chevron-left {
    left: 0;
  }

  .chevron-right {
    right: 0;
  }

  .title {
    margin: 0 auto;
  }
`