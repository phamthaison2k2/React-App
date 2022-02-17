import { useState, useRef } from 'react'

function Coundown() {
    
    const [countDown, setCountDown] = useState(60)

    let timer = useRef()

    const handleStartCountDown = () => {
        
        timer.current = setInterval(() => {
            setCountDown(prev => (
                prev - 1 === -1 ? alert('Happy New Year') && clearInterval(timer.current) : prev - 1
            ) )

        }, 1000)
    }
    
    const handleStopCountDown = () => {
        clearInterval(timer.current)
    }

    return (
        <>
            <h1>{countDown}</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}
            >
                <button onClick={handleStartCountDown}>Start</button>
                <button onClick={handleStopCountDown}>Stop</button>
            </div>
        </>
    )
}

export default Coundown;