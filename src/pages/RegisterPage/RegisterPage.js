import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import clayful from "clayful/client-js";



function RegisterPage() {
  const navigate = useNavigate();
  const [email,setEmail] = useState(""); //이메일 state hooks
  const [password, setPassword] = useState("");//패스워드 state hooks
  // const [submit, setSubmit] = useState();
  
  const handleEmailChange = (event)=>{
    // console.log('event.target.value', event.target.value);
    setEmail(event.target.value);
  };
  const handlePasswordChange=(event)=>{
    // console.log('event.target.value', event.target.value);
    setPassword(event.target.value);
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    const Customer = clayful.Customer;
    let payload = {
      email,
      password,
    };
    console.log('payload -> ', payload);
    
    
    Customer.createMe(payload, function (err,result) {
    
      
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }
      navigate("/login");
      
      
    });
    
  }
  
  return <div className="auth-wrapper">
    <h1>멋쟁이 마켓</h1>
    
    <form onSubmit={handleSubmit} >
      <input onChange={handleEmailChange} type="email" placeholder="멋사 ID" name={"email"} value={email} />
      <input onChange={handlePasswordChange} type="password" placeholder="패스워드" name={"password"} value={password} />
      
      <button type="submit">회원 가입</button>
      
      <Link to={"/login"} style={{color:'gray',textDecoration : "none"}}>이미 멋사 ID가 있다면? 지금 로그인</Link>
    </form>
  </div>;
}

export default RegisterPage;
