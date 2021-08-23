import { useEffect, useState } from "react";

import Kanye from './assets/kanye.jpg'
 
import api from './services/api'

import Musicas from './kanye.json'

import "./styles/main.css"

function App() {

  const [kanyeButton, setKanyeButton] = useState(true)
  const [kanye, setKanye] = useState("");
  const [music, setMusic] = useState("")
  const handleKanye = () => setKanyeButton(!kanyeButton)
  
  function newMusic(){
    const randomMusicIndex = Math.floor(Math.random() * Musicas.length);
    const musica = Musicas[randomMusicIndex];

    setMusic(musica)
  }

  console.log(music)

  const Use = kanyeButton === false

  useEffect(()=> 
  {api.get("").then(response => {
    setKanye(response.data)

  })
},[Use])
   
  return (
    <>
     <div className="App" >
       
       <header>
       <h1>Kanye West</h1>
       <p>Aperte no botão e veja frases icônicas do Ye</p>
       </header> 

     <div>
      <img src={Kanye} alt="" />
     </div>
      
     <div className="quote margin">
       {kanyeButton ? <p>{kanye.quote}</p> :<p>{kanye.quote}</p>}
       <p className="kanye"> Kanye West</p>
     </div>
     <div className="quote">
        <p> <a href={`https://www.youtube.com/results?search_query=Kanye+West+${music.music}`} target="_blank" rel="noopener noreferrer">{music.music}</a></p> 
     </div>

      <button onClick={handleKanye}>Fale comigo Kanye</button>
  
      <button onClick={newMusic}>Peça uma musica para Kanye</button>
      
      <footer> <a href="https://alessandrordgs.vercel.app">Feito por Alessandro ❤</a></footer>

     </ div>
       

 
    </>
  );
}



export default App;

