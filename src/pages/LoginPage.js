import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";

export default function LoginPage({ setCurrentUser }) {
    const [users, setUsers] = useState()

    fetch('http://localhost:3030/users')
        .then(response => response.json())
        .then(data => setUsers(data));

    function logIn(event) {
        event.preventDefault()
        const { username, password } = event.target
        console.log(username)
        console.log(password)

        const matchingUser = users && users.users.find(
            (user) =>
                user.username === username.value &&
                user.password === password.value
        );
        if (matchingUser) {
            //   setCurrentUser(matchingUser);
            console.log("Logged in")
        } else {
            event.preventDefault();
            console.log("Username or password incorrect");
        }
    }

    return (
        <main className="main-div">
            <div className="login-container">
                <h1> Login</h1>
                <form className="register-form" onSubmit={logIn} style={{ width: 450 }}>
                    <TextField
                        name="username"
                        variant="outlined"
                        type="text"
                        placeholder="Username"
                    ></TextField>
                    <TextField
                        name="password"
                        variant="outlined"
                        type="text"
                        placeholder="Password"
                    ></TextField>
                    {/* <Link to="/home" style={{ textDecoration: "none" }}> */}
                    <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                    >
                        {" "}
                        Login
                    </Button>
                    {/* </Link> */}
                </form>
            </div>
        </main>
    );
}