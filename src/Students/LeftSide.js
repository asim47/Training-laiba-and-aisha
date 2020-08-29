import React, { useState } from 'react'
import { TextField, Button, CircularProgress } from "@material-ui/core"

const LeftSide = (props) => {

    const [Name, setName] = useState("")
    const [Age, setAge] = useState("")
    const [ErrorMsg, setErrorMsg] = useState("")


    function SubmitForm() {
        if (!Name) return setErrorMsg("Please enter a Name");
        if (!Age) return setErrorMsg("Please enter an Age")
        setErrorMsg("")

        props.SaveData(Name, Age)
        setName("")
        setAge("")


    }

    return (
        <div style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", display: "flex" }}>


            <TextField
                onChange={({ target }) => setName(target.value)}
                value={Name}
                style={{ width: "80%", marginBottom: "20px" }}
                label="Enter Name"
                variant="outlined"
                color="primary"
            />
            <TextField
                onChange={({ target }) => setAge(target.value)}
                value={Age}
                style={{ width: "80%", marginBottom: "20px" }}
                label="Enter Age"
                variant="outlined"
                color="primary"
            />
            <p style={{ color: "red" }}>{ErrorMsg}</p>
            {
                props.IsFormLoading ? (
                    <CircularProgress color="primary" />
                ) : (
                        <Button
                            onClick={() => SubmitForm()}
                            variant="contained"
                            color="primary"
                        >
                            Save Student
                        </Button>
                    )
            }
        </div>
    )
}

export default LeftSide
