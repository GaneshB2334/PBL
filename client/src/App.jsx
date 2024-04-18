import React, { useState, useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import cross from "/cross.svg";
import "./App.css"
import {
  Container,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";
import DogImg from "/Dog.jpg"
import Dog2 from "/Dog2.jpeg"

export default function App() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true);
  const [errorPassword, setErrorPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [Name, setName] = useState('')
  const [registersuccess, setRegistersuccess] = useState(false)
  const Alrt = useRef(null)
  const navigate = useNavigate()

  const [message, setMessage] = useState({ login: '', register: 'Registered Successfully' })


  const handleRegister = async (event) => {
    setRegistersuccess(true)
    event.preventDefault();
    let data = { email: email, name: Name, password: password }
    let response = await axios.post('http://localhost:3000/register', data)
    if (response.status == 201) {
      console.log("success")
      setRegistersuccess(true)
      setTimeout(() => {
        setIsLogin(true)
      }, 2500);
    }
    else if (response.data==='AlreadyPresent') {
      setMessage({register:`User already exists!`})
      setRegistersuccess(true)
    }
    else {
      console.log(response.data)
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    let data = { email: email, password: password };
    let response = await axios.post('http://localhost:3000/login', data)
    try {
      if (response.data.message === "Success") {
        setMessage({ login: `Welcome ${response.data.name}` })
        setTimeout(() => {
          navigate('/home')
        }, 2500);
        setRegistersuccess(true)
      }
      else if (response.data.message === "Incorrect password") {
        setMessage({ login: `${response.data.message}` })
        setRegistersuccess(true)
      }
      else if (response.data.message === "Invalid ID") {
        setMessage({ login: `${response.data.message}` })
        setRegistersuccess(true)
      }
    } catch (error) {
      console.error(error)
    }
  }



  useEffect(() => {
    if (confirmPassword !== password) {
      setErrorPassword(true)
    } else if (confirmPassword === password) {
      setErrorPassword(false)
    } else if (password == '' && confirmPassword == '') {
      setErrorPassword(false)
    }
  }, [confirmPassword])


  useEffect(() => {
    if (password == '' && confirmPassword == '') {
      setErrorPassword(false)
    }
  }, [password])



  useEffect(() => {
    let ele = Alrt.current;
    if (ele && registersuccess) {
      ele.style.top = "-200px";
      ele.style.transition = "all 0.5s ease-out";
      setTimeout(() => {
        ele.style.top = "0"
        ele.style.backgroundColor = "rgba(86,123,204,0.9)"
      }, 100);
      setTimeout(() => {
        ele.style.top = "-200px";
      }, 3000);
      setTimeout(() => {
        setRegistersuccess(false)
      }, 5000);
    }
  }, [registersuccess])



  return (<>
    <h1 className="relative z-10 font-extrabold text-[30px] w-full text-center pt-4">Dog's Companion</h1>
    <img className="absolute w-[100vw] top-0 left-0 z-0 opacity-100 object-cover" src="https://wallpaperaccess.com/full/769133.jpg" alt="" />


    <div className="flex justify-center">
      {registersuccess && <div ref={Alrt} className="absolute top-[-200px] z-20 w-[300px] h-[200px] bg-[rgb(86,123,204)] bg-opacity-0 rounded-xl font-bold text-center text-[20px] py-[70px] ">
        {isLogin ? message.login : message.register}
        <img className="absolute top-3 right-3 cursor-pointer" onClick={() => { setRegistersuccess(false) }} src={cross} alt="" />
      </div>}
    </div>


    {isLogin ?
      <Container className="relative shadow-2xl rounded-xl z-10 bg-white bg-opacity-70 font-semibold text-black" component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            value={email}
            onChange={(e) => { setEmail(e.currentTarget.value) }}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            value={password}
            onChange={(e) => { setPassword(e.currentTarget.value) }}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <div className="">
            <Grid container>
              <Grid item xs>
                <div className="text-blue-600 underline cursor-not-allowed" variant="body2">
                  Forgot password?
                </div>
              </Grid>
              <Grid item>
                <div className="text-blue-600 underline cursor-pointer" variant="body2" onClick={() => { setIsLogin(false) }} >
                  {"Don't have an account? Sign Up"}
                </div>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
    </Container>

      :

      <Container className="relative shadow-2xl rounded-xl z-10 bg-white bg-opacity-70 font-semibold text-black" component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              value={Name}
              onChange={(e) => { setName(e.currentTarget.value) }}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              value={email}
              onChange={(e) => { setEmail(e.currentTarget.value) }}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={password}
              onChange={(e) => { setPassword(e.currentTarget.value) }}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => { setconfirmPassword(e.currentTarget.value) }}
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
            />
            {errorPassword && <Typography color="error" variant="caption">
              Passwords do not match! Please enter correct password
            </Typography>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <div className="">
              <Grid container>
                <Grid item xs>
                  <div className="text-blue-600 underline cursor-not-allowed" variant="body2">
                    Forgot password?
                  </div>
                </Grid>
                <Grid item>
                  <div className="text-blue-600 underline cursor-pointer" variant="body2" onClick={() => { setIsLogin(true) }} >
                    {"Already have an account? Sign In"}
                  </div>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Box>
      </Container>}
  </>
  );
}