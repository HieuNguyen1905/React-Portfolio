import React,{useState} from 'react';
import './styles.css'

export default function About() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [input, setInput] = useState("")

  const isVaild = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const [vaild,setVaild] = useState(false)
  
  const handleNameChange = (e) =>{
    setName(e.target.value)
  }
  const [touched,setTouched] = useState(false)

  const isName = name !== "";
  const isEmail = email !=="";
  const isInput = input !=="";
  const handleInputChange = (e) =>{
    setInput(e.target.value)
  }
  const handleEmailChange = (e) =>{
    setEmail(e.target.value)
    if(isVaild(e.target.value)){
      setVaild(true)
    }
  }
  const handleSubmit =(e) =>{
    e.preventDefault()
    setEmail("");
    setName("");
    setInput("");
    setTouched(false)
  }
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input required value={name} type="text" placeholder='Name'onChange={handleNameChange} onBlur={()=>setTouched(true)}/>
        {touched? (isName? "✅":"❌ Name is required"):null}
        <input required value={email} type="text" placeholder='example@gmail.com' onChange={handleEmailChange} onBlur={()=>setTouched(true)}/>
        {touched? (isEmail? "":"❌ Email is required"):null}
        {touched? (!vaild? "❌ Email is not vailded":"✅" ):null}
        <h4>Message</h4>
        <textarea required value={input} className='message' onChange={handleInputChange} onBlur={()=>setTouched(true)}></textarea>
        {touched? (isInput? "✅":"❌ Message is required"):null}
        <button>Submit</button>
      </form>
    </div>
  );
}