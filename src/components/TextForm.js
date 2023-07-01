import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleClear = ()=>{
        setText("")
        props.showAlert("Text Removed!", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const[text, setText] = useState("");
    return(
        <>
            <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} mins required to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </>
    )
}
