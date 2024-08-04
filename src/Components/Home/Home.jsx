import gemini from "../../assets/google-gemini-icon.webp";
import { assets } from '../../assets/assets';
import './Home.css';


const Home = (props) => {
    

      return (
    <>
    <div className="containermain">
        <div className='container'>
        <div className="left">
            <p className='appname'>Gemini</p>
        </div>
        <div className="right">
            <a  href='https://one.google.com/explore-plan/gemini-advanced?utm_source=gemini&utm_medium=web&utm_campaign=sidenav_evo&g1_landing_page=65'>
            <div className="right-text">
             <img className="advance-icon" src={assets.gemini_icon}></img>
               <p className='advancetext'>Try Gemini Advanced</p>
            </div>
            </a>
            <img className="user-icon"src={assets.user_icon}></img>
        </div>
        </div>
        {props.result ? <div className="result">
            <div className="homeicons">
            <img className="user-icon"src={assets.user_icon}></img>
            <p>{props.input}</p>
            </div>
            <br/>
           <div className="response">
           <img className='user-icon' src={gemini}></img>
           {props.result}
           </div>
            </div> :
        <div className="homepage">
        <div className="greet">
            <p><span>Hello, User</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card"  onClick={() => props.setInput("How can I list all processes that have been running longer than an hour in linux?")}>
                <p className='cardtext'>How can I list all processes that have been running longer than an hour in linux?</p>
                <img className="bottomicon" src={assets.code_icon}></img>
            </div>
            <div className="card"  onClick={() => props.setInput("Brainstorm team bonding activities for our work retreat")}>
                <p className='cardtext'>Brainstorm team bonding activities for our work retreat</p>
                <img className="bottomicon" src={assets.message_icon}></img>
            </div>
            <div className="card"  onClick={() => props.setInput("Help me compare these college majors")}>
                <p className='cardtext'>Help me compare these college majors</p>
                <img className="bottomicon" src={assets.bulb_icon}></img>
            </div>
            <div className="card"  onClick={() => props.setInput("Give me tips to help care for a tricky plant")}>
                <p className='cardtext' >Give me tips to help care for a tricky plant</p>
                <img className="bottomicon" src={assets.compass_icon} ></img>
            </div>
        </div>
        </div>}
        <div className="inputbar">
            <input value={props.input} onChange={(e) => props.setInput(e.target.value)} placeholder='Enter a prompt here'></input>
            <button onClick={props.handleClick}><img className="sendicon" src={assets.send_icon}  ></img></button>
        </div>
        <div className='bottomtext'>
        <p className='terms'>Gemini may display inaccurate info, including about people, so double-check its responses. <a href='https://support.google.com/gemini/answer/13594961?visit_id=638554559762309278-4104322566&p=privacy_notice&rd=1#privacy_notice' target='blank'>Your privacy and Gemini Apps</a></p>
        </div>
    </div>

    </>
    
  )
}

export default Home
