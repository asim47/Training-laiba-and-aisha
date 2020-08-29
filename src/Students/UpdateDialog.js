import React, {useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const UpdateDialog = (props) => {

    const [Name, setName] = useState("")
    const [Age, setAge] = useState("")

    useEffect(() => {
        if(props.data){
            setName(props.data.Name)
            setAge(props.data.Age)

        }
    }, [props.data])


    function update(){
        props.UpdateData(Name,Age)
    }

    return (
        <Dialog open={props.open} onClose={() => props.close()} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Student</DialogTitle>
            <DialogContent>
                <DialogContentText style={{ width: "400px" }}>
                    Please enter new data to update!
          </DialogContentText>
                <TextField
                    onChange={({ target }) => setName(target.value)}
                    value={Name}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Enter Name"
                    fullWidth
                />
                <TextField
                    onChange={({ target }) => setAge(target.value)}
                    value={Age}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Enter Age"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.close()} color="primary">
                    Cancel
          </Button>
                <Button onClick={() => update()} color="primary">
                    Update
          </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UpdateDialog
