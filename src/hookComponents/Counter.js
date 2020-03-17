import React, {useState, useMemo} from 'react'


function Counter(){

  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setcounterTwo] = useState(0)

  const incrementOne = () => {
      setCounterOne(counterOne + 1)
  } 

  const incrementTwo = () => {
    setcounterTwo(counterTwo + 2)
} 

const isEven = useMemo( () => {
    let i = 0
    while (i<200000000) i++
    return counterOne %2 === 0

}, [counterOne])



  
  return(
    <div>
          <div>
              <button onClick={incrementOne}>
                    Count One - {counterOne}
                    
              </button>
              <span>{isEven ? 'Even' : 'Odd'}</span>
          </div>

          <div>
              <button onClick={incrementTwo}>
                    Count Two - {counterTwo}
              </button>
          </div>

     </div>
    )
}


export default Counter
