import { useEffect, useState } from "react";

import Kanye from './assets/kanye.jpg'
 
import api from './services/api'

import Musicas from './kanye.json'

import "./styles/main.css"

function App() {

  const [kanyeButton, setKanyeButton] = useState(true)
  const [kanyeQuote, setKanyeQuote] = useState("");
  const [musica, setMusica] = useState("")
  const handleKanye = () => setKanyeButton(!kanyeButton)
  
  function newMusic(){
    const randomMusicaIndex = Math.floor(Math.random() * Musicas.length);
    const musica = Musicas[randomMusicaIndex];

    setMusica(musica)
  }

  useEffect(()=> 
  {api.get("").then(response => {
    const {quote} = response.data
    setKanyeQuote(quote) 
  })
},[kanyeButton])
   
  return (
 
     <div className="App" >
        
      <header>
        <h1>Kanye West</h1>
        <p>Aperte no botão e veja frases icônicas do Ye</p>
      </header> 

      <div>
        <img src={Kanye} alt="Kanye West" />
      </div>
        
      <div className="quote margin">
        {kanyeButton ?
        <p>{kanyeQuote}</p> : 
        <p>{kanyeQuote}</p>}
        <p className="kanye"> Kanye West</p>
      </div>
      
      <div className="quote">
        <p> 
          <a href={`https://www.youtube.com/results?search_query=Kanye+West+${musica.music}`} target="_blank" rel="noopener noreferrer">
            {musica.music}
          </a>
        </p> 
      </div>

        <button onClick={handleKanye}>Fale comigo Kanye</button>
    
        <button onClick={newMusic}>Peça uma musica para Kanye</button>
        
        <footer> 
          <a target="_blank" rel="noopener noreferrer" href="https://alessandrordgs.vercel.app">Feito por Alessandro ❤</a>
        </footer>

     </ div>
       
  );
}



export default App;

