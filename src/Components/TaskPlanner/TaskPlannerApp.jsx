import React, { useState,useEffect } from 'react';
import { Hidden } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { NavBar } from '../Drawer/NavBar';
import { Box } from '../Drawer/Box';
import taskPlannerStyles from './taskPlannerStyles';
import { TaskGrid } from './TaskGrid';
import Fab from '@material-ui/core/Fab';
import {useHistory} from 'react-router-dom';
export const TaskPlannerApp = ({tasks}) => {
    const classes = taskPlannerStyles();
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open);
    }
    const history = useHistory();
    
    return (
        <div className={classes.container}>
            <NavBar handleOpen={handleOpen} />
            <Hidden xsDown>
                <Box
                    variant="permanent"
                    open={true}
                >
                </Box>
            </Hidden>
            <Hidden smUp>
                <Box
                    variant="temporary"
                    open={open}
                    onClose={handleOpen}
                >
                </Box>
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <TaskGrid tasks={tasks} />
                <Fab
                    size="medium"
                    color="primary"
                    aria-label="add"
                    className={classes.button}
                    onClick={() => history.push("/createTask")}
                >
                    <AddIcon />
                </Fab>
            </div>


        </div>

    )
}
