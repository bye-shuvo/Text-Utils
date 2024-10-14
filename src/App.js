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
  const [newStyle , setNewStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    });

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
      document.body.style.backgroundColor = "rgb(41, 45, 62)";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled" , "success");
      document.title = "TextUtils - Dark Mode";
      setTimeout(()=>{
        document.title = "TextUtils - Free Online Text Manipulation Tool | Word Count, Case Conversion, Remove Extra Spaces";
      },2500)
      setNewStyle({
        color: "white",
        backgroundColor: "rgb(41, 45, 62)" 
      })
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled" , "success");
      document.title = "TextUtils - Light Mode";
      setTimeout(()=>{
        document.title = "TextUtils - Free Online Text Manipulation Tool | Word Count, Case Conversion, Remove Extra Spaces";
      },2500)
      setNewStyle({
        color: "black",
        backgroundColor: "white"
      })
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
    <Navbar title="Bye_TextEditor" aboutHome="Home" mode={mode} toggleMode={toggleMode}/><Alert alert = {alert}/><TextInput showAlert={showAlert} header = "Try TextUtils - Text Editor for Word Count, Case Conversion, and Formatting" mode={mode}/>
    <About title="About Us" newStyle={newStyle}/>
        {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
