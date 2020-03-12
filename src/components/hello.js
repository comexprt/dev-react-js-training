import React from 'react'

const Hello = () =>{
    // return(
    //     <div>
    //         <h1>Hello JSx - john </h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        null,
        React.createElement('h1',{id:'hello',className:'dummy-class lg', htmlFor:'test'}, 'Hello JSX - John')
    )
}

export default Hello