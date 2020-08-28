import React, { useEffect, useState } from 'react'
import axios from "axios"
const ApiPractive = () => {


    const [DataToRender, setDataToRender] = useState(null)

    console.log(DataToRender)

    useEffect(() => {
        callAPI()
    }, [])


    async function callAPI() {


        const res = await axios.get("http://localhost:5000/api/todo/");



        setDataToRender(res.data.Data)
    }
    return (
        <div>
            {
              DataToRender?  DataToRender.map((value, index) => {
                    return (
                        <h1 key={index}>
                            {value.Title}
                        </h1>
                    )
                }) : <img  src="https://www.animatedimages.org/data/media/289/animated-turtle-image-0036.gif"/>
            }
        </div>
    )
}

export default ApiPractive
