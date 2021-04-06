import React, {useState} from 'react'
import Lottie from 'react-lottie';
import  animationData from '../../reuse/pinjump.json'

const buttonStyle = {
    display: 'block',
    margin: '10px auto'
};

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

// const catagory = [
//     'home',
//     'about',
//     choose : {
//         [
//             'shoe',
//             'sandal',
//             'chappal',
//             'men' = [
//                 'shirt',
//                 'shoes',
//                 'tes'
//             ]
//         ]
        
//     }
  
// ]

// console.log('catagorycatagorycatagory', catagory)

function PageLocomotiveScroll() {
    const [isStopped , setisStopped] = useState(false)
    const [isPaused , setisPaused] = useState(false)
    return (
        <div className="body-container-wrapper bg-light">
            <Lottie options={defaultOptions}
                height={400}
                width={400}
                isStopped={isStopped}
                isPaused={isPaused} />
            <button style={buttonStyle} onClick={() => setisStopped(true)}>stop</button>
            <button style={buttonStyle} onClick={() => setisStopped(false)}>play</button>
            <button style={buttonStyle} onClick={() => setisPaused(true)}>pause</button>

                
        </div>
    )
}

export default PageLocomotiveScroll
