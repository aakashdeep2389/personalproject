import React from 'react'



const ScrollF = () => {

    // window.addEventListener("scroll", function (event) {
    //     let slide = document.getElementsByClassName('slide')
    //     for(let i = 0; i < slide.length; i++){
    //         console.log('9978787878787',  slide[i] , i+1  )
    //     }
    //     let top = this.scrollY

    //     console.log('object', top, slide)

    // }, false);


    return (
        <div class="body-container">
            <div className="scroll_slider">
                <div className="item1 slide"></div>
                <div className="item2 slide"></div>
                <div className="item3 slide"></div>
            </div>
        </div>
    )
}

export default ScrollF
