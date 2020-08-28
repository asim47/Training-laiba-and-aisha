import React, { useEffect, useState } from 'react'
import axios from "axios"
const ApiPracticeWithAllApis = () => {


    const [DataList, setDataList] = useState(null)
    const [TitleName, setTitleName] = useState()
    const [ErrorMsg, setErrorMsg] = useState("")
    const [IsLoading, setIsLoading] = useState(false)

    useEffect(() => {
        gettingData()
    }, [])

    async function gettingData(e) {
        const res = await axios.get("http://localhost:5000/api/todo/ ");


        if (res.data.Data.length == 0) return
        setDataList(res.data.Data)
    }

    async function SaveData() {
        try {
            setErrorMsg("")
            const body = {
                Title: TitleName
            }
            setIsLoading(true)

            const res = await axios.post("http://localhost:5000/api/todo/", body)

            setIsLoading(false)

            if(!DataList){
                return setDataList([res.data.Data])
            }
            setDataList([
                ...DataList,
                res.data.Data
            ])
        } catch (error) {
            setErrorMsg(error.response.data.Msg)
        }
    }




    async function DeleteItem(id) {
        console.log(id)

        try {

            const body = {
                "TodosToDelete": [
                    id
                ]
            }
            setIsLoading(true)
            const res = await axios.post("http://localhost:5000/api/todo/delete", body);

            setIsLoading(false)

            const RemaingItems = DataList.filter(x => x._id !== id)

            if(RemaingItems.length === 0){

                return setDataList(null)
            }
            
            setDataList(RemaingItems)

        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }


    return (
        <div>
            <div style={{ display: "flex" }}>
                <input
                    onChange={({ target }) => setTitleName(target.value)}
                    value={TitleName}
                    placeholder="Enter Title Name"
                />
                <button onClick={() => SaveData()}>
                    Save Title
                </button>
            </div>
            <h2 style={{ color: "red" }}>
                {ErrorMsg}
            </h2>
            {
                IsLoading && (
                    <h2>
                        PLease wait updating in DB
                    </h2>
                )
            }
            <br />
            <br />
            <br />
            <br />
            <br />

            {
                DataList && DataList?.length === 0 ? <h1>Loading...</h1> : DataList?.map((value, index) => {
                    return (
                        <div style={{ display: "flex" }}>
                            <h1 key={value._id} >
                                {
                                    value.Title
                                }
                            </h1>
                            <button
                                onClick={() => DeleteItem(value._id)}
                            >
                                Remove
                            </button>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ApiPracticeWithAllApis
