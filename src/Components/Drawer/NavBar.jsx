import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, IconButton, Toolbar, Typography,Button } from '@material-ui/core';
import drawerStyles from './drawerStyles';


export const NavBar = ({handleOpen}) => {
    const classes = drawerStyles()
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                    onClick={() => handleOpen()}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    TaskPlanner
                </Typography>
                <Button variant="text" color="inherit">
                    LogOut
                </Button>
            </Toolbar>
        </AppBar>
    )
}
