import React, { useState } from "react";



export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperCase text in click" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("upperCase is enabled", "success")

    }

    const handlelowClick = () => {
        console.log("LowCase text in Click" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCase is enabled", "success")
    }
    const handleClearClick = () => {
        console.log("Clear text")
        let newText = " ";
        setText(newText);
        props.showAlert("cleared", "success")
    }

    const handleCopy = () => {
        console.log("i am clear");
        let Text = document.getElementById("myBox")
        Text.select();
        navigator.clipboard.writeText(Text.value);
        props.showAlert("Copied to Clipboard", "success")

    }
    const handChange = (event) => {
        console.log("onChange")
        setText(event.target.value);
    }


    const [text, setText] = useState(" ");
    return (
        <>
            <div className="container " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary mx-2">Convert to UpperCase</button>
                <button onClick={handlelowClick} className="btn btn-primary mx-2">Convert to LowerCase</button>
                <button onClick={handleClearClick} className="btn btn-primary mx-2">Clear</button>
                <button onClick={handleCopy} className="btn btn-primary mx-2">Copy</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>My Text Summary</h3>
                <p>{text.split(" ").filter(word => word !== '').length} WORD AND {text.length} CHARACTER</p>
                <p> {0.008 * text.split(" ").length}Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : " Enter the something"}</p>
            </div>
        </>
    )
}