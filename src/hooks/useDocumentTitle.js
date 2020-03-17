import {useEffect} from 'react'


function useDocumentTitle(count){
    useEffect (() => {
        document.title =   `Count ${count}`
        //  return ()=>{
        //  };
     }, [count] )
 
}


export default useDocumentTitle
