import React, { useState, useEffect } from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Axios from "axios"
import UpdateDialog from './UpdateDialog'

const Main = () => {

    const [DataToRender, setDataToRender] = useState([])

    const [IsListLoading, setIsListLoading] = useState(true)
    const [IsFormLoading, setIsFormLoading] = useState(false)
    const [ItemToRemoveID, setItemToRemoveID] = useState("")
    const [DialogOpen, setDialogOpen] = useState(false)
    const [DataToUpdate, setDataToUpdate] = useState(null)


    console.log(DataToUpdate,"DataToUpdate")
    useEffect(() => {

        gettingData()

    }, [])

    function openTheDialog(e){
        setDialogOpen(true)
        setDataToUpdate(e)
    }

    async function SaveData(Name, Age) {

        try {
            const body = {
                Name,
                Age,
            };
            setIsFormLoading(true)
            const res = await Axios.post("https://churail-penguin-titli.herokuapp.com/api/students/save", body)
            setIsFormLoading(false)
            setDataToRender([
                ...DataToRender,
                res.data.SavedStudent,
            ])
        } catch (error) {
            setIsFormLoading(false)

            console.log(error)
        }


    }

    async function gettingData() {
        try {
            setIsListLoading(true)

            const res = await Axios.get("https://churail-penguin-titli.herokuapp.com/api/students/getall");

            setIsListLoading(false)

            setDataToRender(res.data.Students)

        } catch (error) {

            console.log(error)

            setIsListLoading(false)
        }

    }


    async function removeData(id) {
        try {

            setItemToRemoveID(id)
            const res = await Axios.delete(`https://churail-penguin-titli.herokuapp.com/api/students/delete?ID=${id}`)
            setItemToRemoveID("")

            setDataToRender(DataToRender.filter(x => x._id !== res.data.DeletedStudent._id))

        } catch (error) {
            setItemToRemoveID("")
            console.log(error)
        }
    }


    async function UpdateData(Name,Age) {
        try {
            const body = {
                Name,
                Age,
                ID:DataToUpdate._id
            }
            const res = await Axios.put(`https://churail-penguin-titli.herokuapp.com/api/students/update`,body)
            // UpdatedStudent
            setDialogOpen(false)

            gettingData()
            // const newData = DataToRender;

            // const index =newData.findIndex(x=>x._id ==  res.data.UpdatedStudent._id)

            // newData[index] = res.data.UpdatedStudent

            // setDataToRender(newData)

        } catch (error) {
            setItemToRemoveID("")
            console.log(error)
            setDialogOpen(false)
        }
    }

    return (
        <div style={{ width: "100%", height: "100vh", display: "flex" }}>
            <LeftSide
                SaveData={SaveData}
                IsFormLoading={IsFormLoading}
            />
            <RightSide
                ItemToRemoveID={ItemToRemoveID}
                Data={DataToRender}
                IsLoading={IsListLoading}
                removeData={removeData}
                openDialog={(e)=>openTheDialog(e)}

            />


            <UpdateDialog
                open={DialogOpen}
                close={()=>setDialogOpen(false)}
                data={DataToUpdate}
                UpdateData={UpdateData}
            />

        </div>
    )
}

export default Main
