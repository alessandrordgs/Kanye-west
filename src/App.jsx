import { useEffect, useState } from "react";

import Kanye from './assets/kanye.jpg'
 
import api from './services/api'

import "./styles/main.css"

function App() {

  const [kanyeButton, setKanyeButton] = useState(true)
  const handleKanye = () => setKanyeButton(!kanyeButton)

  const [kanye, setKanye] = useState("");

  const Use = kanyeButton === false

  useEffect(()=> 
  {api.get("").then(response => {
    setKanye(response.data)
    console.log(response.data)
  })
},[Use])
   
  return (
    <>
     <div className="App">
       
       <header>
       <h1>Kanye West</h1>
       <p>Aperte no botão e veja frases icônicas do Ye</p>
       </header> 

     <div>
      <img src={Kanye} alt="" />
     </div>
      
     <div className="quote">
       {kanyeButton ? <p>{kanye.quote}</p> :<p>{kanye.quote}</p>}
       <p className="kanye"> Kanye West</p>
     </div>

      <button onClick={handleKanye}>Fale Kanye</button>
      
      <footer> <a href="https://alessandrordgs.vercel.app">Feito por Alessandro ❤</a></footer>

     </ div>
      

    </>
  );
}



export default App;

