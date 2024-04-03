import * as React from "react";

//import './App.css'

const LoginForm = () => {

    const Header = (props) =>(
          <h2>{props.title}</h2>
    );

    const HeaderMessage = (props) =>(
      <span class="message">{props.message}</span>
    )
 
    const Form = (props) =>(
         <form>
        
        <FormInput description="Username" id="userName" placeholder="Enter business Email ID" type="text" />
        
        <FormInput description="Password" id="password" placeholder="Enter your password" type="password" />
        <ForgetButton name='Forget password?' />
        <LoginButton title="Log in" />
         </form>
    )

    const FormInput = props => (
      <div className="logincontainer">
        <label >{props.description}</label>
        <input type={props.type} id={props.id} placeholder={props.placeholder} />
      </div>
    );

     const ForgetButton = props => (
      <div id="button" className="forgotButton">
        <button>{props.name}</button>
      </div>
    );

    const LoginButton = props => (
      <div id="button" className="loginbutton">
        <button>{props.title}</button>
      </div>
    );

    const SignupMessage = (props) =>(
      <span class="message2">{props.message}
      <button id="signUplink"> &nbsp;Sign Up</button></span>
      
    );

    const ButtonPrivacy = (props)=>(
      <button className="ButtonPrivacy">{props.name}</button>
    );
    
    const ButtonCookie = (props)=>(
      <button className="ButtonCookie">{props.name}</button>
    );

    const AllLinks = (props)=>(
      <a id="link" href="">{props.name}</a>
    );
    
    const Icons = (props)=>(
      <img className="IconContainer"src={props.name}></img>
    );

    const Image = (props)=>(
      <img className="Imagecontainer"src={props.name}></img>
    )


    return(
          <div className="Container">

               <div className="left-container">
                  <div class="logo1">  
                  <img src="grass.svg" alt="logo" class="logo" height="42"></img>
                  </div> 
          
           <Header title="Log in"/>

           <HeaderMessage message="Welcome back! Enter your credentials to access your account."/>

           <Form/>
           
           <SignupMessage message="Don't have an account?"/>

           <ButtonPrivacy name="Privacy Policy"/>
              <span class="sim">|</span>
           <ButtonCookie name="Cookie Policy"/>
           <p></p>

           
           <div className="iconsAll">
            <AllLinks name="safe and secure"/>
              <Icons name="p1.png"/>
              <Icons name="p2.png"/>
              <Icons name="GDPR-Logo.54d8d55d.svg"/>
            </div>
           
          </div>

          <div className="right-container">

            <div class="infoslider">

            <div class="slides">
                  <Image name="ads-data-slide.e67518a9.png"/>
                  <Image name="analyze-metrics-slide.0f61d9c4.png"/>
                  <Image name="build-charts-slide.9277f798.png"/>
                  <Image name="connect-slide.a94cf7a9.png"/>
            </div>
            </div>
            </div>
        </div>

    );
}

export default LoginForm;