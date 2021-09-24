import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";

export default function RegisterPage({ setCurrentUser }) {


    function registerUser(event) {
        const { username, password, email } = event.target

        fetch("http://localhost:3030/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
                email: email.value
            }),
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                setCurrentUser(data.id);
            });
    }

    return (
        <main className="main-div">
            <form className="register-form" onSubmit={registerUser} style={{ width: 450 }}>
                <h1> Register</h1>
                <div className="details-div">
                    <TextField
                        name="firstName"
                        variant="outlined"
                        type="text"
                        placeholder="First Name"
                    ></TextField>
                    <TextField
                        name="lastName"
                        variant="outlined"
                        type="text"
                        placeholder="Last Name"
                    ></TextField>
                </div>
                <TextField
                    name="username"
                    fullWidth
                    variant="outlined"
                    type="text"
                    placeholder="Username"
                ></TextField>
                <TextField
                    name="email"
                    fullWidth
                    variant="outlined"
                    type="text"
                    placeholder="Email Address"
                ></TextField>
                <TextField
                    name="password"
                    fullWidth
                    variant="outlined"
                    type="text"
                    placeholder="Password"
                ></TextField>
                <FormControlLabel
                    control={<Checkbox name="Promotions" />}
                    label="I would like to recieve promotions and updates via email"
                />
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <Button color="secondary" variant="contained">
                        {" "}
                        Register
                    </Button>
                </Link>
                <Link className="link"> Already have an account? Sign in here</Link>
            </form>
        </main>
    );
}