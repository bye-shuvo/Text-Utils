import React , { useState } from 'react'

export default function About(props) {
    //useState hook provider always return a array...
    // const [newStyle , setNewStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // });
    
    // const [btnText , setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = ()=>{
    //     if(newStyle.color === "black"){
    //         setNewStyle({
    //             color: "white",
    //             backgroundColor: "rgb(48 60 71)"
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //         else{
    //            setNewStyle({
    //             color: "black",
    //             backgroundColor: "white" 
    //         }
    //     );
    //     setBtnText("Enable Dark Mode");
    //     }
    // }
    
  return (
    <>
    <div className='container my-3'><h1><strong>{props.title}</strong></h1><h5>Welcome to TextUtils, your one-stop solution for all your text processing needs! Our lightweight, fast, and user-friendly web app helps you streamline your text manipulation tasks with ease.</h5></div>
      <div className="accordion container my-3" id="accordionExample">
  <div className="accordion-item" style={props.newStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={props.newStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Key Features:</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={props.newStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Text Transformation:</strong> Convert text to uppercase, lowercase, or capitalize the first letter of every word instantly.<br/>
        <strong>Text Formatting:</strong> Add or remove spaces, line breaks, and tabs to make your content clean and readable.<br/>
        <strong>Word/Character Count:</strong> Get instant insights into word and character counts, including spaces, making it easier for content creation and editing.<br/>
        <strong>Text Reversal:</strong> Reverse your text in just a click.<br/>
        <strong>Text to Speech:</strong> Listen to your content with our text-to-speech feature, making proofing and reading easier.<br/>
        <strong>Find and Replace:</strong> Quickly search and replace words or phrases in your text.<br/>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={props.newStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={props.newStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Why Choose TextUtils?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={props.newStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Free and Easy to Use:</strong> No registration or downloads are required. Access all features directly from your browser. <br />
        <strong>Secure & Privacy First:</strong> We don't store or share your data. Your text is processed entirely in your browser.<br />
        <strong>Real-Time Processing:</strong> See changes in real-time as you use various tools, ensuring fast and efficient text editing.<br />
        <strong>Mobile-Friendly:</strong> Access our app from any device, making it easy to edit text on the go.<br />
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">
    <button className='btn btn-primary' onLoad={toggleColor} onClick={toggleStyle}>{btnText}</button>
</div> */}
    </>
  )
}
