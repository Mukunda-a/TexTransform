import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("UpperCase Was Clicked : "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("CONVERTED TO UPPER CASE","success");
    }

    const handleLoClick = ()=>{
        //console.log("lowerCase Was Clicked : "+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("coverted to lowercase","success");
    }

    const handleCapitilize = ()=>{
        //console.log("lowerCase Was Clicked : "+text);
        let newText = text.toLowerCase();
        setText(newText.charAt(0).toUpperCase() + newText.slice(1));
        props.showAlert("The first Letter was Capitalized","success");
    }

    const handleReverse = ()=>{
        let newText=text.split("").reverse().join("");
        setText(newText);
        props.showAlert("The Text U Entered has been Reversed","success");
    }

    const handleSwap = ()=>{
        let newText=text.split('').map((c,i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');   ;
        setText(newText);
        props.showAlert("The Texts Are Swaped to Altenate case","success");
    }

    const handleExtraSpaces = ()=>{
        //console.log("ExtraSpaces Was Clicked : "+text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Has Been Removed","success");
    }

    const handleCopy = ()=>{
        //console.log("Copy Was Clicked : ");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Has Been Selcted & Copied to clip Board","success");
    }

    const handleDownload = () => {
        props.showAlert("The Text is Downloaded ","success");
    }

    const handleclearClick = ()=>{
        //console.log("Clear Was Clicked : "+text);
        let newText = "";
        setText(newText);
        props.showAlert("Text you written was Cleared","success");
    }

    const handleOnChange = (event)=>{
        //console.log("onChange");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    let date = new Date();
    //text="new Text";//Wrong way to change the state
    //setText("new Text");//Correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode ==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea placeholder= 'Enter your text' className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode ==='light'?'#6e7378':'white',color:props.mode ==='dark'?'black':'white'}} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-outline-secondary btn-info mx-1 my-1" onClick={handleUpClick}>TO UPPER CASE</button>
        <button disabled={text.length===0} className="btn btn-outline-secondary btn-info mx-1 my-1" onClick={handleLoClick}>to lower case</button>
        <button disabled={text.length===0} className="btn btn-outline-secondary btn-info mx-1 my-1" onClick={handleCapitilize}>Capitilize</button>
        <button disabled={text.length===0} className="btn btn-outline-secondary btn-info mx-1 my-1" onClick={handleReverse}>Reverse</button>
        <button disabled={text.length===0} className="btn btn-outline-secondary btn-info mx-1 my-1" onClick={handleSwap}>SwapCase</button>
        <button disabled={text.length===0} className="btn btn-outline-secondary btn-info mx-1 my-1" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
        <button disabled={text.length===0} className="btn btn-outline-secondary btn-info mx-1 my-1" onClick={handleCopy}>Copy</button>
        <a      className={`btn btn-outline-secondary btn-info mx-1 my-1 ${text.length>0?'':'disabled'}`} onClick={handleDownload} href={`data:text/plain;charset=utf-11,${text}`} id="link" download={`${date}.txt`}>Download</a>
        <button disabled={text.length===0} className="btn btn-outline-secondary btn-info mx-1 my-1" onClick={handleclearClick}>Clear</button>
    </div>
    <div className="container my-4" style={{color:props.mode ==='dark'?'white':'black'}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>Atleast {0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Needed to Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"NoThing To PreView"}</p>
    </div>
    </>
  )
}
