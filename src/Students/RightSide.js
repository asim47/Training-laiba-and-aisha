import React from 'react'
import { CircularProgress, List, ListItemSecondaryAction, ListItemText, ListItem, Button, IconButton, Menu, MenuItem } from "@material-ui/core"

import MoreVertIcon from '@material-ui/icons/MoreVert';

const RightSide = (props) => {


    if (props.IsLoading) {
        return (
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>

                <CircularProgress
                    color="primary"
                    size={40}

                />

            </div>
        )
    }

    return (
        <div style={{ flex: 1, overflow: "scroll" }}>
            {
                props.Data?.map((value, index) => {
                    return (
                        <List >

                            <ListItem>

                                <ListItemText
                                    primary={`Name is ${value.Name}`}
                                    secondary={`Age: ${value.Age}`}
                                />
                                <ListItemSecondaryAction>

                                    <Button
                                        onClick={() => props.removeData(value._id)}
                                        style={{ marginRight: "10px" }}
                                        color="primary"
                                        variant="outlined"

                                    >
                                        {
                                            props.ItemToRemoveID == value._id ? <CircularProgress size={20} /> : "Remove"
                                        }
                                    </Button>
                                    <Button
                                        onClick={()=>props.openDialog(value)}
                                        color="primary"
                                        variant="contained"

                                    >
                                        Update

                                    </Button>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </List>
                    )
                })
            }
        </div>
    )
}

export default RightSide
