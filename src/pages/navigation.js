import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

const StyledNav = styled.div`
  display: flex;
  background: black;
  padding: 5px 0 5px 5px;
  fontSize: 20px;
  @media (max-width: 768px) {
    display: ${p => p.override?"flex":"none"};
  }
`

function Navigation() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  return (
    <div>
    <button onClick = {() =>{setHamburgerOpen(!hamburgerOpen)}}>+</button>
    <StyledNav override = {hamburgerOpen}>
      <div style={{ margin: '10px' }}>
          <NavLink to="/" style={({ isActive }) => ({ 
              color: isActive ? 'greenyellow' : 'white' })}>
              Home
          </NavLink>
      </div>
      <div style={{ margin: '10px' }}>
          <NavLink to="/about" style={({ isActive }) => ({ 
              color: isActive ? 'greenyellow' : 'white' })}>
              About
          </NavLink>
      </div>
      <div style={{ margin: '10px' }}>
          <NavLink to="/contact" style={({ isActive }) => ({ 
              color: isActive ? 'greenyellow' : 'white' })}>
              Contact
          </NavLink>
      </div>
  </StyledNav>
  </div>
  );
}

export default Navigation;
