import React from 'react'
export default function Joker({setup , punchline}){
    return(
        
        <div className='joker'>
            <h1> Jokes Here: 👇</h1>
          
               <h2> <span className='joker-text'>Setup:</span> {setup} 🤔</h2>
             <i> <span className='joker-mini-text'>Puchline: </span>{punchline} 😂 </i>
             <hr></hr>
          
          
        </div>
        
    )
}

