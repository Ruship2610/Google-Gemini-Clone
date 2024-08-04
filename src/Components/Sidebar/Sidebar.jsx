import React, { useRef, useState } from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'

const Sidebar = (props) => {
    const [active,setActive] = useState(false);
    

    const handleToggle = () => {
        setActive(current => !current);
    }


  return (
    <div className='sidebar'>
        <div className='top'>
            <img className='menu' onClick={handleToggle} src={assets.menu_icon} ></img>
            <div className="new-chat"  onClick={props.handlePluse}>
                <img src={assets.plus_icon} ></img>
               {active ?  <p>New Chat</p> : null }
            </div>
        {/* <div className="recent">
            {active ?  <p className='recent-title' >Recent</p> : null }
            <div className="recent-entry">
            {active ? <i className="fa-regular fa-message"></i> : null }
                {active ?  <p>{props.response}</p>: null }
            </div>
        </div> */}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
            <i id="fontasm" className="fa-regular fa-circle-question"></i>
                {active ? <p>Help</p> : null }
            </div>
            <div className="bottom-item recent-entry">
            <i id="fontasm" className="fa-solid fa-clock-rotate-left"></i>
                {active ? <p>Activity</p> : null }
            </div>
            <div className="bottom-item recent-entry">
            <i  id="fontasm" className="fa-solid fa-gear"></i>
                {active ? <p>Settings</p> : null }

            </div>

        </div>

    </div>
  )
}

export default Sidebar
