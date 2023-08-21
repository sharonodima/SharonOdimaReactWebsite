import NasaPhoto from "./NasaPhoto";
import passport from "../assets/passport.JPG";
import styled from "styled-components";

const StyledNasaPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledP = styled.p`
  width: 50%;
  transition: all 1s;
  &:hover {
    transform: scale(1.1);
  }
`;
const StyledH1 = styled.h1`
  transition: all 1s;
  &:hover {
    transform: scale(1.1);
  }
  font-family: "Fruktur", cursive;
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
`;

const Home = () => {
  return (
    <>
      <StyledNasaPhoto>
        <StyledH1>Hi! I'm Sharon Odima</StyledH1>
        <StyledP>I am a software developer living in Raleigh, NC.</StyledP>
        <img src={passport} alt="Sharon Odima - Profile" class="center" />
        <StyledP>
          Please enjoy todays Nasa Photo of the day before exploring the rest of
          my website!
        </StyledP>
        <NasaPhoto />
      </StyledNasaPhoto>
      <footer>
        <p>&copy; Sharon Odima</p>
      </footer>
    </>
  );
};

export default Home;
