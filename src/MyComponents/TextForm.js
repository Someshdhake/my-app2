import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        // console.log("Uppercase was Clicked " + text);
        setText(newText);
        props.showAlert("Converted to uppercase!","success")
    }
    
    const handlelowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success")
    }
    
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!","success")
    }
    
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success")
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!","success")
    }
    
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text";  // wronge way to change the state
    // setText = ("new text");  // correct way to change the state
    return (
        <>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-2">
                <textarea value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-sm btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-sm btn-primary mx-1 my-1" onClick={handlelowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-sm btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-sm btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-sm btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>

        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            {/* <p><b>{text.split(" ").length-1} words and {text.length} characters</b></p> */}
            {/* <p><b>{" "}{text===""?"0": text.split(" ").length} words and {text.length-text.split(" ").length+1} characters</b></p> */}
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</b></p>
            <p><b>{0.08 * text.split("").length} Minutes to read</b></p>
            {/* <p><b>{0.08 * text.split("").filter((element)=>{return element.length!==0}).length} Minutes to read</b></p> */}
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
