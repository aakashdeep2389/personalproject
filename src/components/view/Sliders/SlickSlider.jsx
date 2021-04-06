// import React from 'react'
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// class SlickSlider extends React.Component {

//     render() {
//         var settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             arrows: true,
//             slidesToShow: 1,
//             useTransform: false,
//             useCSS : true,
//             vertical: true,
//             verticalSwiping: true,
//             waitForAnimate:false,
//             slidesToScroll: 1
//         };
//         return (
//             <div className="body-container-wrapper bg-dark">
//                 <Slider {...settings} className="slider360" >
//                     <div>
//                         <img src={require('../../assets/Img/1.jpg')} />
//                     </div>
//                     <div>
//                         <img src={require('../../assets/Img/2.jpg')} />
//                     </div>
//                     <div>
//                         <img src={require('../../assets/Img/3.jpg')} />
//                     </div>
//                     <div>
//                         <img src={require('../../assets/Img/4.jpg')} />
//                     </div>
//                     <div>
//                         <img src={require('../../assets/Img/5.jpg')} />
//                     </div>
//                     <div>
//                         <img src={require('../../assets/Img/1.jpg')} />
//                     </div>
//                 </Slider>
//             </div>
//         );
//     }
// }

// export default SlickSlider


import React, { Component } from "react";
import Slider from "react-slick";

export default class SlickSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <h3>kjefjef</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>kjefjef</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}