import React, { useEffect, useState } from 'react'
import axios from "axios"

// State for the data;
// State for a laoding;
// function to get data;
// map the data


const ApiPracticeWithButton = () => {

    const [DataToRender, setDataToRender] = useState([]);
    const [IsLoading, setIsLoading] = useState(false);


    async function GettingData() {
        setDataToRender([])
        setIsLoading(true)
        const res = await axios.get("http://localhost:5000/api/todo/");
        setIsLoading(false)
        setDataToRender(res.data.Data)
    }

    return (


        <div>
            <button
                onClick={() => GettingData()}
                style={{ height: "200px", width: "200px", fontSize: "20px" }}
            >
                {
                    IsLoading ? "Loading..." : "Get the List"
                }
            </button>
            {
                DataToRender.map((value, index) => {
                    return (
                        <h1 key={index}>
                            {value.Title}
                        </h1>
                    )
                })
            }
        </div>
    )
}

export default ApiPracticeWithButton
