import React, { Component } from 'react';
import blankstart from "../../images/banner-blankstart.jpg"
import diy from "../../images/banner-diy.jpg"
import electric from "../../images/banner-electric.jpg"
import festive from "../../images/banner-festive.jpg"
import flower from "../../images/banner-flower.jpg"
import knitting from "../../images/banner-knitting.jpg"
import aviary from "../../images/banner-aviary.jpg"
import tools from "../../images/banner-tools.webp"
import saw from "../../images/banner-saw.jpg"
import sewing from "../../images/banner-sewing.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5000,
      centerPadding: "6px",
      pauseOnHover: true,
      swipeToSlide: true,
      
    };

    const photos = [
      {
        name: diy,
        alt: "diy sign"
      },
      {
        name: blankstart,
        alt: "blank notepad",
      },
      {
        name: electric,
        alt: "arduinos"
      },
      {
        name: festive,
        alt: "holiday project"
      },
      {
        name: flower,
        alt: "colorful flowers"
      },
      {
        name: knitting,
        alt: "knitting"
      },
      {
        name: aviary,
        alt: "aviary"
      },
      {
        name: tools,
        alt: "tools for drawing"
      },
      {
        name: saw,
        alt: "Sawing"
      },
      {
        name: sewing,
        alt: "Sewing"
      }
    ]

    return (
      <Slider {...settings}>
        {photos.map(photo => {
          return (
            <div key={photo.alt}>
              <img 
                style={
                  { 
                    width: "80vw", 
                    height: "505px", 
                    marginLeft: "auto", 
                    marginRight: "auto", 
                    objectFit: "cover", 
                    objectPosition: "center center" 
                  }
                } 
                src={photo.name} alt={photo.alt}
              />
            </div>
          )
        })}
      </Slider>
    );
  }
}

