import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;

    if (username.length < 3) {
      toast.error("Username must be at least 3 characters", { theme: "dark" });
      return false;
    }

    if (email === "") {
      toast.error("Email is required", { theme: "dark" });
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters", { theme: "dark" });
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", { theme: "dark" });
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleValidation()) {
      console.log(values);

      toast.success("User Registered Successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored"
      });
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          
          <div className="brand">
            <img src={Logo} alt="logo" />
          </div>

          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
          />

          <button type="submit">Create User</button>

          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>

        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}


const FormContainer = styled.div`
  height: 100vh;
  width: 100%;  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131325;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    img {
      height: 10rem;
    }

    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }

  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1.5rem;

    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }

  button {
    background-color: #4e0eff;
    color: white;
    padding: 0.5rem 1.5rem;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    text-transform: uppercase;
    font-size:2rem;

    &:hover {
      background-color: #3726b0;
    }
  }

  span {
    color: white;
    text-transform: uppercase;
    font-size: 1.5rem;
    a {
      color: #4e0eff;
      text-decoration: none;
    

    }
  }
`;