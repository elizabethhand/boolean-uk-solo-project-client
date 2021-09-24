import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";

export default function LoginPage({ setCurrentUser, users }) {
    return (
        <main className="main-div">
            <div className="login-container">
                <h1> Login</h1>
                <form className="register-form" style={{ width: 450 }}>
                    <TextField
                        variant="outlined"
                        type="text"
                        placeholder="Username"
                    ></TextField>
                    <TextField
                        variant="outlined"
                        type="text"
                        placeholder="Password"
                    ></TextField>
                    <Link to="/home" style={{ textDecoration: "none" }}>
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                        >
                            {" "}
                            Login
                        </Button>
                    </Link>
                </form>
            </div>
        </main>
    );
}