import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import "../App.css";
function SignIn() {
  return (
    <center>
      <div className="boundary">
        <Form className="signinform">
          <h1>Sign In</h1>
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
          <a href="#" className="newaroundhere">
            New around here? Sign Up
          </a>
          <br />
          <Input type="checkbox" />
          Remember Me
          <br />
          <Button className="submit">Submit</Button>
        </Form>
      </div>
    </center>
  );
}

export default SignIn;
