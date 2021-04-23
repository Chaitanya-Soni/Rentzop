import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import { Switch, Route, Redirect, NavLink, Link } from "react-router-dom";
import "../App.css";
function SignUp() {
  return (
    <center>
      <div className="boundary">
        <Form className="signinform">
          <h1>Sign Up</h1>
          <div className="">
            <Label for="username" className="abovetheinput">
              UserName
            </Label>
            <Input type="" placeholder="ABC_123" id="username" />
          </div>
          <div className="">
            <Label for="email" className="abovetheinput">
              Email
            </Label>
            <Input type="" placeholder="email@example.com" id="email" />
          </div>
          <div className="">
            <Label for="password" className="abovetheinput">
              Password
            </Label>
            <Input type="" placeholder="Password" id="password" />
          </div>
          <br />
          <Button className="submit">Sign Up</Button>
        </Form>
      </div>
    </center>
  );
}

export default SignUp;
