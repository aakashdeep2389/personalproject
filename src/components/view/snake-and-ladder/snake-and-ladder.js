import { set } from 'lodash'
import React, { useState, useEffect } from 'react'

const SnakeNstare = () => {
    const [state, setstate] = useState({
        count: [],
        diceval: '',
        players: ['player 1', 'player 2 ']
    })

    useEffect((val, index) => {
        // alert('alskdhalsdlak')
        for (let i = 1; i <= 100; i++) {
            setstate(prevState => ({
                count: [...prevState.count, i]
            }))
            // document.getElementById('snakeladder').innerHTML += `<span>${i}</span>`;
        }
    }, [])

    const diceRun = () => {
        let dicerun = Math.floor(Math.random() * 6 + 1);
        // console.log(dicerun, 'dicerun')
        setstate({
            diceval: Math.floor(Math.random() * 6 + 1),
        })
        let playerone = document.querySelector('.player')
        if (playerone.innerHTML = 'player 1') {
            playerone.innerHTML = 'player 2'
        }
        else if (playerone.innerHTML = 'player 2') {
            playerone.innerHTML = 'player 1'
        }
    }

    console.log(state.count, '12121212121')


    return (
        <>
            <div className="body-container-wrapper bg-light">

                <div id="snakeladder">
                    {
                        state.count?.reverse().map((item, i) => {
                            return <span> {item} </span>
                        })
                    }
                </div>
                <div className="dixewrapper">


                    <h1 className="text-center player"> Player 1 </h1>
                    <h1 className="text-center"> {state.diceval} </h1>
                    <button className="btn btn-success btn-block btn-dice" onClick={diceRun}>Roll Dice</button>
                </div>
            </div>


        </>
    )
}



export default SnakeNstare
