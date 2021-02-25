import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import {Avatar,Typography,TextField, Button} from '@material-ui/core'
import loggingStyles from './loggingStyles';
import exampleUsers from './exampleUsers';
import 'fontsource-roboto';

export const Login = () => {
    const classes = loggingStyles();
    const [userName, setUserName] = useState("");
    const [password,setPassword] = useState("");
    const login = () => {
        const userFound = exampleUsers.find((user) => userName === user.userName && password === user.password);
        if (userFound){
            localStorage.setItem("user",JSON.stringify(
                {loggingStatus:"loggedIn",username:userName,password}
            ))
            window.location.href= "/taskPlanner"
        }
        else{
            alert("Incorrect logging check your credentials")
        }
    }
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={7}>
                <Grid container direction="column" justify="center" alignItems="center" className={classes.container}>
                    <Typography variant="h4" color="primary" className={classes.header}>
                            Task planner
                    </Typography>
                    <Avatar alt="Example" 
                            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" 
                            className={classes.large} />
                                       
                    <Grid item xs={5} className={classes.form}>
                        <form>
                            <TextField
                                className={classes.textField}
                                label="Username"
                                color="primary"
                                name="userName"
                                value={userName}
                                variant="outlined"
                                onChange = {({target}) => setUserName(target.value)}
                            />
                            <TextField
                                className={classes.textField}
                                label="Password"
                                type="password"
                                color="primary"
                                name="password"
                                value={password}
                                variant="outlined"
                                onChange = {({target}) => setPassword(target.value)}
                            />
                            <Button
                                fulldWidth
                                variant="contained"
                                color="primary"
                                className={classes.btn}
                                onClick={login}
                            >
                                Login
                            </Button>
                            <Typography variant="body1" color="primary" align="center" className={classes.text}>
                                Create Account
                            </Typography>
                        </form>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    )
}