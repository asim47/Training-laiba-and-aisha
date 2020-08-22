import React, { useState, useEffect } from 'react'

const CssWithReact = () => {


    const [BackgroundColor, setBackgroundColor] = useState("black")

    const [Height, setHeight] = useState("100")
    const [Width, setWidth] = useState("100")
    const [ShowDiv, setShowDiv] = useState(true)

    const [ChangeColor, setChangeColor] = useState("black")



    useEffect(() => {
        console.log("I Ran")
    })


    useEffect(() => {
        console.log("I Ran only once")
    },[])

    useEffect(() => {

        setBackgroundColor(ChangeColor)
        
    },[ChangeColor])



    return (
        <div>
            <div style={{ height: `${Height}px`, width: `${Width}%`, background: BackgroundColor, transition: "1s", display: ShowDiv ? "block" : "none" }}>
            </div>
            <br />

            <input
                value={ChangeColor}
                onChange={({ target }) => setChangeColor(target.value)}
                placeholder="Type a color"

            />

            <br />

            <input
                type="range"
                value={Height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Type a height"
            />
            <br />
            <input
                type="range"
                onChange={(e) => setWidth(e.target.value)}
                value={Width}
                placeholder="Type a weight"
            />
            <br />
            <input
                type="checkbox"
                onChange={() => setShowDiv(!ShowDiv)}
                checked={ShowDiv}

            />

        </div>
    )
}

export default CssWithReact
