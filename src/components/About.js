import React , { useState } from 'react'

export default function About(props) {
    //useState hook provider always return a array of objects...
    const [newStyle , setNewStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    });
    
    const [btnText , setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = ()=>{
        if(newStyle.color === "black"){
            setNewStyle({
                color: "white",
                backgroundColor: "rgb(48 60 71)"
            })
            setBtnText("Enable Light Mode");
        }
            else{
               setNewStyle({
                color: "black",
                backgroundColor: "white" 
            }
        );
        setBtnText("Enable Dark Mode");
        }
    }
  return (
    <>
    <h1 className='container my-3'>{props.title}</h1>
      <div className="accordion container my-3" id="accordionExample">
  <div className="accordion-item" style={newStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={newStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={newStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={newStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={newStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={newStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={newStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={newStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={newStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
    <button className='btn btn-primary' onClick={toggleStyle}>{btnText}</button>
</div>
    </>
  )
}
