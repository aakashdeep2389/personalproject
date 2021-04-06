import React, { useState } from 'react'

const images = [
    {
        path: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        path: 'https://images.unsplash.com/photo-1613473060226-dd81153a63db?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        path: 'https://images.unsplash.com/photo-1613582808645-e4e5d93f3123?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        path: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        path: 'https://images.unsplash.com/photo-1613473060226-dd81153a63db?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        path: 'https://images.unsplash.com/photo-1613473060226-dd81153a63db?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
]

const Slider = () => {
    const [state, setstate] = useState({
        slide: 1
    })

    const nextSlide = () => {
        if (state.slide == images.length ? setstate({ slide: 1 }) : setstate({ slide: state.slide + 1 }));
    }
    const prevSlide = () => {
        if (state.slide == 1 ? setstate({ slide: images.length }) : setstate({ slide: state.slide - 1 }));
    }

    console.log('kjaskjhadjhdks', state.slide)
    return (
        <div className="body-container-wrapper bg-light">
            asdasdasd { state.slide + ' '}

            <button onClick={nextSlide}> Next</button>

            <div className="custom_slider">
                {images.map((item, index) => {
                    return state.slide == index && <img src={item.path} key={index} className="active" />
                })
                }
            </div>

            <button onClick={prevSlide}>Prev</button>
        </div>
    )
}

export default Slider
