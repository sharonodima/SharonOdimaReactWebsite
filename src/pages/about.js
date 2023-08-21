import React from "react";
import styled from "styled-components"

const StyledH3= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
`

const StyledH1 = styled.h1`
    transition: all 1s;
    &:hover {
        transform: scale(1.1);
    }
    font-family: 'Fruktur', cursive;
 	font-size: 3em;
 	border-bottom: 2px solid pink;
 	border-right: 2px solid pink;
 	border-left: 2px solid pink;
 	text-align: center;
 	box-shadow: 4px 4px 5px #888888;
    text-transform: uppercase;
    background-image: linear-gradient(
        -225deg,
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
`

function About() {
  return(
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7"></div>
          <StyledH3 class="col-lg-5">
            <StyledH1 class="font-weight-light">ABOUT</StyledH1>
            <p>
              I was born and raised in Kenya, Africa and I have been in the
              states since January 2010. During this time, I have been a jack of
              all trades, as you can see on my{" "}
              <a href="/src/assets/SharonOdimaResume2023.pdf" download>
                resume
              </a>
              , dabbling in the travel industry as a flight attendant, in
              customer service and in home health care both as a certified nurse
              and a home aide.
            </p>

            <p>
              I attended Durham Technical Community College here in Durham, NC
              where I earned my associates degree in science. My favorite
              classes were anything to do with math or statistics. I also
              attended a rigorous software engineering bootcamp for a whole year
              where I became proficient in Javascript, HTML, CSS and SQL among
              other programming skills. I was able to build several Single page
              applications, work with high level frameworks such as React, Redux
              and Node and even seed a database using knex.
            </p>

            <p>
              I am very excited to be embarking on this rigorous journey to
              become a fully certified software engineer and I cannot wait to
              get into the job industry and actually put my skills to work.
            </p>
            <p>
              Some of the programming languages I am familiar with include but
              are not limited to the following:
            </p>
            <div class="snippet1">
              <ol>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
              </ol>
            </div>
            <p>I work well both as an individual as well as in group settings and I am more than willing to collaborate with other software engineers on any future projects.</p>
            <footer>
              <p>&copy; Sharon Odima</p>
            </footer>
          </StyledH3>
        </div>
      </div>
    </div>
  );
}
<script src="script.js"></script>;
export default About;
