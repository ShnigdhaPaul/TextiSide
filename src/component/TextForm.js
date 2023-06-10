import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {

  const handleUpCick= () => {
    console.log('UpperCase was clicked');
    let newtxt= text.toUpperCase();
    settext(newtxt)
    if (text.length > 0){
    props.showalert("Uppercased", "Success");
    }
    else{
      props.showalert("Please enter text" , "Failed");
    }
  
}

const handleLoCick= () => {
  console.log('LowerCase was clicked');
  let newtxt= text.toLowerCase();
  settext(newtxt) 
  
  if (text.length > 0){
    
  props.showalert("LowerCased", "Success");

    }
    else{
      props.showalert("Please enter text" , "Failed");
    }

}


const handleClCick= () => {
  console.log('clear was clicked');
  let newtxt= ("");
  settext(newtxt)
  
  if (text.length > 0){
    
  props.showalert("Text Reset", "Success");
  
      }
      else{
        props.showalert("Please enter text" , "Failed");
      }
  

}
const handleVoCick= () => {

  for(count=0;count<=text.length; count++)
{
  if(text.charAt(count).match(/[aeiouAEIOU]/))
  {
    countChar++;
    setCount(countChar)
    

  }
}
  
console.log('Vowel was clicked');

}

const handleOnChage= (event) => {
  console.log('on change')
  settext(event.target.value)
}
const[myStyle , setmyStyle] = useState({
  color: 'black',
  backgroundColor: 'white'
})

const toggleStyle= ()=> {
  if (myStyle.color =='white')
  {
    setmyStyle({
      color: 'black',
      backgroundColor: 'white',
     
      
    })
    setBtnTxt("Enable Dark Mode")
  }
  else{
    setmyStyle({
      color: 'white',
      backgroundColor: 'black',
      border: '3px solid white'
    })
    setBtnTxt("Enable light Mode")
  }
}



const [btnTxt , setBtnTxt]= useState('Enable Dark Mode');
const [text, settext] = useState('');
let [count, setCount] = useState('0');
let countChar=0;




  return (
    <>
   
    <div className='container' style={{backgroundColor:props.mode === 'dark' ? 'light':'dark'}}>
      <div>
      <h1> {props.heading} </h1>
 
  <textarea className="form-control my-2"  value={text} onChange={handleOnChage} le={{backgroundColor:props.mode === 'dark' ? 'grey':'white'}} id="mybox" rows='6'></textarea>
</div>
  
  <button className="btn btn-primary mx-1"  onClick={handleUpCick}>Convert to Upper Case</button>
  <button className="btn btn-primary mx-1" onClick={handleLoCick}>Convert to Lower Case</button>
  <button className="btn btn-primary mx-1" onClick={handleVoCick}>Vowel</button>
  <button className="btn btn-primary mx-1" onClick={handleClCick}>Clear</button>

 
    </div>

    <div className="container" style={{backgroundColor:props.mode === 'dark' ? 'light':'dark'}}>
      <h3> Your Text Summary</h3>
      <p>{text.split(" ").length} words & {text.length} characters</p>
      <p>{count} numbers of vowels</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Please add something to preview"}</p>
    </div>
    </>
  )
}

