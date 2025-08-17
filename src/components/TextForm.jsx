import React,{use, useState} from 'react'

const TextForm=(props)=>{
    const[text,setText]=useState('' );
    const[lower,setLower]=useState('');
    const[upper,setUpper]=useState('');
    const[word,setWord]=useState(0);
    const[character,setCharacter]=useState(0);
 

    const handleToUppercase=()=>{
        console.log('uppercase was clicked');
        let newText=text.toUpperCase();
        setUpper(newText); 
    }

    const handleToLowercase=()=>{
        let newText=text.toLowerCase();
        setLower(newText);
    }
    
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleToCountWordText=()=>{
        let newText=text.split(" ").length;
        setWord(newText);
        let newTemp=0;
        for(let i=0;i<text.length;i++){
             if(text[i]!=' '){
                newTemp++;
             }
        }
        setCharacter(newTemp);
    }


    return(
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"   value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleToUppercase}>Convert to Uppercase</button>
            
            <button className="btn btn-primary mx-2" onClick={handleToLowercase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleToCountWordText}>Count words & characters</button>
        </div>
         <div className="container">
            <h1>Your text summary</h1>
           <p>LowerCase : {lower}</p>
           <p>UpperCase : {upper}</p>
           <p>Total Number Of Words : {word} And Total Number of Characters : {character}</p>
           <p>Total Time to Read : {word*0.008} Minutes </p>
           <h2>Preview</h2>
           <p>{text}</p>
         </div>
        </>
    )
}

export default TextForm;