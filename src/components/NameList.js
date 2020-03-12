import React from 'react'
import Person from './Person'

function NameList(){
    const names = ['Bruce','Clark','Diana']
    const persons = [
        {
            id:1,
            name:'John',
            age:30,
            skill:'React'
        },
        {
            id:1,
            name:'Noah',
            age:25,
            skill:'Angular'
        },
        {
            id:1,
            name:'Ompad',
            age:28,
            skill:'Vue'
        }
    ]
    const personList = persons.map(person =>(<Person person={person}></Person>))
    return(
        <div>
          { personList }

        </div>
    )
    
}

export default NameList 