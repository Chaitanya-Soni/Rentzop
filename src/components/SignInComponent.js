import React, {useState} from "react";
import axios from "axios";
import { Button, Form, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function formData() {
    const form_data = new FormData();

    form_data.append("email", email);
    form_data.append("password", password);
    return form_data;
  }

  function handleSave(e) {
    e.preventDefault();

    const LOGIN_URL = "http://localhost:8000/api/token/";

    axios({
      baseURL: LOGIN_URL,
      method: "POST",
      data: formData(),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          localStorage.setItem("user-token", res.data.access_token);
          toast("Login realizado com sucesso.");
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
        toast("Email ou senha inválidos.");
      });
  }

  return (
    <center>
      <div className="boundary">
        <Form className="signinform" onSubmit={handleSave}>
          <h1>Sign In</h1>
          <div>
            <Label for="username" className="abovetheinput">
              UserName
            </Label>
            <Input type="username" value={email} placeholder="ABC_123" id="username" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <Label for="password" className="abovetheinput" >
              Password
            </Label>
            <Input type="password" value={password} placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Link href="#" className="newaroundhere" to="/signup">
            New around here? Sign Up
          </Link>
          <br />
          <Input type="checkbox" />
          Remember Me
          <br />
          <Button className="submit">Sign In</Button>
        </Form>
      </div>
    </center>
  );
}

export default SignIn;