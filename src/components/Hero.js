import React from 'react'

function Hero({heroName}){
    if (heroName === 'joker'){
        throw new Error('Note a hero')
    }

    return (
       <div>
           {heroName}
       </div>

    )
}

export default Hero