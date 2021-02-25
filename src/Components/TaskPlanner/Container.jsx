import React, {useState} from 'react';
import { Hidden } from '@material-ui/core';
import { NavBar } from '../Drawer/NavBar';
import {Box} from '../Drawer/Box';
import tasks from './data/tasks'
import taskPlannerStyles from './taskPlannerStyles';
import {TaskGrid} from './TaskGrid';

export const Container = () => {
    const classes = taskPlannerStyles();
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <div className={classes.container}>
            <NavBar handleOpen={handleOpen}/>
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
                    <TaskGrid tasks={tasks}/>
            </div>
        </div>
    )
}
