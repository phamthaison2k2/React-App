import { useState, useRef } from 'react';



function Todo() {

    const ref = useRef()


    const [values, setValues] = useState([])

    const [text, setText] = useState('')

    const handleClick = () => {
        setValues(prev => (
          [...prev, text]
        ))
        setText('')
        ref.current.focus()
    }

    const handleDelete = () => {
        
    }

    return (
        <>
            <input 
                ref={ref}
                type="text"
                value={text} 
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />

            <br/>
            
            <button onClick={handleClick}>ADD</button>
            
            <ul>
                {values.map((value, index) => (
                    <div
                        key={index} 
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <li>{value}</li>
                        <span
                            onClick={handleDelete}
                            style={{
                                marginLeft: '15px',
                                cursor: 'pointer'
                            }}
                        >
                            Xóa
                        </span>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default Todo;