import React,{useState} from 'react'; 
function TextConvertor(){ 
    const [text,setText]=useState(""); 
    const handleUppercase = () =>{setText(text.toUpperCase());} 
    const handleLowercase = () =>{setText(text.toLowerCase());} 
return( 
    <div> 
        <center> 
 <textarea value = {text} onChange={(e)=>setText(e.target.value)}/><br/><br/> 
 <button onClick = {handleUppercase}>Convert to Uppercase</button>&nbsp;&nbsp; 
 <button onClick = {handleLowercase}>Convert to Lowercase</button> 
        </center> 
    </div> 
    ); 
} 
export default TextConvertor;