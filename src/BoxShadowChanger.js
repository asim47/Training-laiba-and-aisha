import React, { useState } from 'react'

const BoxShadowChanger = () => {


    const [FirstValue, setFirstValue] = useState("10")
    const [SecondValue, setSecondValue] = useState("8")
    const [ThirdValue, setThirdValue] = useState("9")
    const [ForthValue, setForthValue] = useState("33")
    const [Color, setColor] = useState("black")
    return (
        <div>
            <div style={{ height: "50%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div
                    style={{
                        height: "100px",
                        width: "100px",
                        background: "gold",
                        boxShadow: `${FirstValue}px ${SecondValue}px ${ThirdValue}px ${ForthValue}px ${Color}`
                    }}
                >
                    {`${FirstValue}px ${SecondValue}px ${ThirdValue}px ${ForthValue}px ${Color}`}
                </div>
            </div>

            <input
                value={FirstValue}
                onChange={(e) => setFirstValue(e.target.value)}
                type="range"
            />
            <br />
            <input
                value={SecondValue}
                onChange={(e) => setSecondValue(e.target.value)}
                type="range"
            />
            <br />
            <input
                value={ThirdValue}
                onChange={(e) => setThirdValue(e.target.value)}
                type="range"
            />
            <br />
            <input
                value={ForthValue}
                onChange={(e) => setForthValue(e.target.value)}
                type="range"
            />
            <br />
            <input
                value={Color}
                onChange={(e) => setColor(e.target.value)}
                type="color"
            />
            <br />
        </div>
    )
}

export default BoxShadowChanger
