import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home'
import {useState} from "react";
import axios from "axios";
import "./App.css";

function App() {


  const[input,setInput] = useState("");
   
    const[response,setResponse] = useState([]);
    

    const[result,setResult] = useState();

    const handleClick = async () => {
        try {
          setResult(<><div className='loader'><hr/><hr/><hr/></div></>);
            const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD89visoGhmeyI-Skb9uyowJOw5rG43RUI",
                method: "post",
                data: {
                  contents: [{ parts: [{ text: input }] }],
                },
              });

              setResult(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);

              let responseArray = result.split("**");

            

        } catch (error) {
            console.log(error);
        }

    };

    const handlePluse = () => {
      setResult("");
    }

  

  return (
    <>
     <Sidebar response={response} handlePluse={handlePluse}></Sidebar>
     <Home  input={input} setInput={setInput} result={result} handleClick={handleClick} ></Home>
    </>
  )
}


export default App
