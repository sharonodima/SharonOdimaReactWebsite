import React, {useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"

const StyledNasaPhoto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`

const StyledImg = styled.img`
    max-width: 30%;
    object-fit: cover;
    transition: all 1s;
    &:hover {
        transform: scale(1.1);
    }
`

const StyledP = styled.p`
    width: 50%;
    transition: all 1s;
    &:hover {
        transform: scale(1.1);
    }
    `
const StyledH3 = styled.h3`
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
`



const NasaPhoto = (props) => {
    const [photo, setPhoto] = useState(null)
    useEffect (() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=q38xH01AefB5EUaEqt8hXQwGJLRGhTFa3M4PvaKF")
        .then(res => {
          console.log(res);
          setPhoto(res.data);
        })
        .catch(err => console.error(err))
      }, [])
    
    if (!photo) {
        return null
    }
    return (
        <StyledNasaPhoto className = "nasa-photo-wrapper">
            <StyledH3>{photo.title}</StyledH3>
            <StyledP>{photo.date}</StyledP>
            <StyledImg src = {photo.hdurl}></StyledImg>
            <StyledP>{photo.explanation}</StyledP>
        </StyledNasaPhoto>
    )
    }
export default NasaPhoto;