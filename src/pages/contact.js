import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledH1 = styled.h3`
  transition: all 1s;
  &:hover {
    transform: scale(1.1);
  }
  
  font-size: 3em;
  border-bottom: 2px solid pink;
  border-right: 2px solid pink;
  border-left: 2px solid pink;
  text-align: center;
  box-shadow: 4px 4px 5px #888888;
  text-transform: uppercase;
  background-image: linear-gradient(
    -2deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
`;

const Contact = () => {
  return (
    <>
      <StyledDiv>
        <StyledH1>CONTACT ME</StyledH1>
        <p>
          Please take a look at my website and feel free to contact me via email
          at <a href="mailto:odimasharon@gmail.com">odimasharon@gmail.com</a> or
          via telephone at <a href="tel:+19195259135">+1 (919) 525-9135</a>
        </p>
        <StyledH1>Get InTouch on Social Media!</StyledH1>
        <p>
          I'd love to hear from you! Please feel free to contact or follow me:
        </p>
        <ol>
          <li>
            <a href="https://www.linkedin.com/in/sharonodima/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/sharonodima">GitHub</a>
          </li>
          <li>
            <a href="https://www.facebook.com/shapiwiki/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/shapiwiki91/">Instagram</a>
          </li>
        </ol>
      </StyledDiv>
      <footer>
        <p>&copy; Sharon Odima</p>
      </footer>
    </>
  );
};
<script src="script.js"></script>;
export default Contact;
