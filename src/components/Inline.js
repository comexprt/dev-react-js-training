import React from 'react'

const heading = {
    fontSize:'72px',
    color: 'blue'
}
function Inline (props){
 
    let className = props.primary ? 'primary' : ''
    return(
        <div>
          <h2 style= {heading}>Inline </h2>
        </div>
    )
}


export default Inline 