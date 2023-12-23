import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

const StyledNav = styled.div`
  display: flex;
  background: black;
  padding: 5px 0 5px 5px;
  fontSize: 20px;
  @media (max-width: 500px) {
    display: flex;
  }
`


function Navigation() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  return (
    <div>
    
    <StyledNav override = {hamburgerOpen}>
      <div style={{ margin: '10px', paddingLeft: '100px', backgroundImage: 'linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          <NavLink to="/" style={({ isActive }) => ({ 
              color: isActive ? 'red' : 'white' })}>
              Home
          </NavLink>
      </div>
      <div style={{ margin: '10px', paddingLeft: '500px', backgroundImage: 'linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          <NavLink to="/about" style={({ isActive }) => ({ 
              color: isActive ? 'red' : 'white' })}>
              About
          </NavLink>
      </div>
      <div style={{ margin: '10px', paddingLeft: '500px', backgroundImage: 'linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          <NavLink to="/contact" style={({ isActive }) => ({ 
              color: isActive ? 'red' : 'white' })}>
              Contact
          </NavLink>
      </div>
  </StyledNav>
  </div>
  );
}

export default Navigation;
