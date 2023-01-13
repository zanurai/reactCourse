import React, { useState } from 'react';



export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("UpperCase Text is click" + text);
        let newText = text.toUpperCase();
        setText(newText);
        //setText("I have clicked on handle Click");
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLowClick = () => {
        console.log("LowerCase Text is click" + text);
        let newText = text.toLowerCase();
        setText(newText);
        //setText("I have clicked on handle Click");
        props.showAlert("Converted to lowercase", "success")
    }
    const handleClick = () => {
        console.log("clear")
        let newText = " ";
        setText(newText);
        props.showAlert("text clear", "success")
    }

    const handleChange = (event) => {
        console.log("on Change");
        setText(event.target.value)
    }

    const handleCopy = () => {
        console.log("i am Copy");
        let Text = document.getElementById("myBox");
        Text.select();

        navigator.clipboard.writeText(Text.value)
        props.showAlert(" copied to clipboard", "success")
    }

    const handleExtraspace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert(" Removespace", "success")
    }

    const [text, setText] = useState(" ");
    //text = "new text"//this is wrong way to change the state
    //setText("new text")//this is correct way to change the state
    let word = 0
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042744' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'dark' ? '#042744' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <br></br>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraspace}>Remove Extra Space</button>



            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042744' }}>
                <h2>My text Summary</h2>
                <p> {text.split(" ").filter(word => word !== '').length}WORDS and{text.split(" ").filter(character => character !== '').length} Characters</p> {/*counting of word and character*/}
                <p>{0.008 * text.split(" ").length}Minutes Read</p> {/*how much time taken to read*/}

                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}