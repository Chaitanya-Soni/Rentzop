import React,{useState} from "react";
import { Button, Form, Label, Input } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../App.css";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");

  function formData() {
    const form_data = new FormData();
    form_data.append("name", username);
    form_data.append("email", email);
    form_data.append("password", password);
    form_data.append("password2", password2);
    return form_data;
  }

  function handleSave(e) {
    e.preventDefault();

    const LOGIN_URL = "http://localhost:8000/api/accounts/signup";
    
    axios({
      baseURL: LOGIN_URL,
      method: "POST",
      data: formData(),
    })
      .then((res) => {
        if (res.status === 201) {
          toast(`Cadastro realizado com sucesso !`);
        }
        
      })
      .catch((error) => {
        console.log(error);
        let error_msg = "";
        Object.keys(error.response.data).forEach(function (e) {
          error_msg += e + ": " + error.response.data[e][0] + " - ";
        });
        toast(error);
      });
  }

  return (
    <center>
      <div className="boundary">
        <Form className="signinform" onSubmit={handleSave}>
          <h1>Sign Up</h1>
          <div className="">
            <Label for="username" className="abovetheinput">
              UserName
            </Label>
            <Input type="" placeholder="ABC_123" id="username" onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="">
            <Label for="email" className="abovetheinput" >
              Email
            </Label>
            <Input type="" placeholder="email@example.com" id="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="">
            <Label for="password" className="abovetheinput">
              Password
            </Label>
            <Input type="" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="">
            <Label for="password" className="abovetheinput">
              Confirm Password
            </Label>
            <Input type="" placeholder="Confirm Password" id="password2" onChange={(e) => setPassword2(e.target.value)}/>
          </div>
          <br />
          <Button className="submit">Sign Up</Button>
        </Form>
      </div>
    </center>
  );
}

export default SignUp;
