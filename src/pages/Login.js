import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import base_url from "../services/Api";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      email: formData.username, // Assuming the 'username' field in the form corresponds to the email
      password: formData.password,
    };

    axios
      .post(`${base_url}/employee/logincheck`, loginData)
      .then((response) => {
        const status = response.data;
        console.log(status);
        if (status === "ADMIN") {
          console.log("Login successful");
          toast.success("Login successful", { position: "bottom-center" });
          // Redirect to the admin page
          window.location.replace("/admin");
        } else if (status === "RECEPTION") {
          console.log("Login successful");
          toast.success("Login successful", { position: "bottom-center" });
          // Redirect to the reception page
          window.location.replace("/reception");
        } else {
          console.log("Invalid credentials");
          toast.error("Invalid credentials", { position: "bottom-center" });
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        toast.error("Something went wrong", { position: "bottom-center" });
      });
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <CardBody>
          <CardTitle className="login-title">Login</CardTitle>
          <CardSubtitle className="login-subtitle">
            Please enter your credentials
          </CardSubtitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                onChange={handleChange}
                value={formData.username}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={formData.password}
              />
            </FormGroup>
            <Button type="submit" color="primary" block>
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Login;
