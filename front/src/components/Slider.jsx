import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "./Slider.css";
import styled from "styled-components";
import { sliderItems } from "../data";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0);

  useEffect(() => {
    const sliderLoop = setTimeout(() => {
      setslideIndex(() => {
        if (slideIndex < sliderItems.length - 1) {
          setslideIndex(slideIndex + 1);
        } else setslideIndex(0);
      });
    }, 3000);

    return () => clearTimeout(sliderLoop);
  }, [slideIndex]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className="slider">
      <div className="slider-left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <div className="imgContainer">
              <img src={item.img} alt="" />
            </div>
            <div className="infoContainer">
              <h1 className="title">{item.title}</h1>
              <p className="desc">{item.desc}</p>
              {/* <button className="btn">More</button> */}
            </div>
          </Slide>
        ))}
      </Wrapper>
      <div className="slideNum">
        <span>{parseInt(slideIndex) + 1 + "/" + sliderItems.length}</span>
      </div>
      <div className="slider-right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
