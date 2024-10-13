import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import {
//   createBrowserRouter,
//   RouterProvider
// } from "react-router-dom";

function App() {
  const [mode , setMode] = useState("light");
  const [alert , setAlert] = useState(null);

  const showAlert = (massage , type)=>{
    setAlert({
      massage : massage ,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },2000);
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "rgb(48 60 71)";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled" , "success");
      document.title = "TextUtils - Dark Mode";
      setTimeout(()=>{
        document.title = "TextUtils - Home";
      },2500)
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled" , "success");
      document.title = "TextUtils - Light Mode";
      setTimeout(()=>{
        document.title = "TextUtils - Home";
      },2500)
    }
  }

  // const router = createBrowserRouter([
  //   {
  //     path : "/",
  //     element :<><Navbar title="Bye_TextEditor" aboutHome="Home" mode={mode} toggleMode={toggleMode}/><Alert alert = {alert}/><TextInput showAlert={showAlert} header = "Enter Text To Convert To Uppercase" mode={mode}/></>
  //   },
  //   {
  //     path : "/home",
  //     element :<><Navbar title="Bye_TextEditor" aboutHome="Home" mode={mode} toggleMode={toggleMode}/><Alert alert = {alert}/><TextInput showAlert={showAlert} header = "Enter Text To Convert To Uppercase" mode={mode}/></>
  //   },
  //   {
  //     path : "/about",
  //     element : <><Navbar title="Bye_TextEditor" aboutHome="Home" mode={mode} toggleMode={toggleMode}/><Alert alert = {alert} /><About title="About Us"/></>
  //   }
  // ])

  return (
    <>
    <><Navbar title="Bye_TextEditor" aboutHome="Home" mode={mode} toggleMode={toggleMode}/><Alert alert = {alert}/><TextInput showAlert={showAlert} header = "Enter Text To Convert To Uppercase" mode={mode}/></>
        {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
