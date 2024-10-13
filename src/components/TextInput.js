import React from "react";
import { useState } from "react";

function TextInput(props) {

  const [text, setText] = useState("");
  const TextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  const TextToUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted To UpperCase!" , "success");
  };

  const TextToLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted To LowerCase!" , "success");
  };
  
  const TextToCapitalizedCase = () => {
    const newText = text.split(" ").map((Word)=>{
      return Word.charAt(0).toUpperCase() + Word.slice(1);
    })
    setText(newText.join(" "));
    props.showAlert("Converted To CapitalizedCase!" , "success");
  };

  const ClearText = () => {
    setText("");
    props.showAlert("Text cleared!" , "success");
  };

  const CopyText = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!" , "success");
  }

  const RemoveExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed!" , "success");
  }


  return (
    <>
      <div className="mb-3 container">
        <h1>{props.header}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Enter your text here"
          value={text}
          onChange={TextChange}
          style={{backgroundColor : props.mode === "light" ? "white" : "rgb(48 60 71)" , color : props.mode === "light" ? "black" : "white"}}
        ></textarea>
         <button className="btn btn-primary my-3 mx-2" onClick={TextToUpperCase}>Convert to UpperCase</button>
         <button className="btn btn-primary my-3 mx-2" onClick={TextToLowerCase}>Convert to lowerCase</button>
         <button className="btn btn-primary my-3 mx-2" onClick={TextToCapitalizedCase}>Convert to CapitalizedCase</button>
         <button className="btn btn-primary my-3 mx-2" onClick={ClearText}>Clear Text</button>
         <button className="btn btn-primary my-3 mx-2" onClick={CopyText}>Copy Text</button>
         <button className="btn btn-primary my-3 mx-2" onClick={RemoveExtraSpace}>Remove Extra Space</button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.trim().split(' ') == "" ? 0 : text.trim().split(' ').length} Word , {text.trim().length} Letters , {text.length} Characters , {text.toLowerCase().match(/[aeiou]/g) == null ? 0 : text.toLowerCase().match(/[aeiou]/g).length} vowels , {text.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/g) == null ? 0 : text.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/g).length} consonants</p>
        <p>{0.008 * (text.trim().split(' ') == "" ? 0 : text.trim().split(' ').length)} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text === "" ? "Nothing to Preview" : text}</p>
      </div>
    </>
  );
}

export default TextInput;
