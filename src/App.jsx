import { useState, useEffect } from "react";

const GENSHIN = 'https://api.genshin.dev'

export function App(){
   const [tipos,setTipos] = useState([])

   fetch(GENSHIN)
      .then((response) => response.json())
      .then((tipos)=>console.log(tipos));

   return(
      <main>
         <h1>Genshin Impact</h1>
      </main>
   )
}