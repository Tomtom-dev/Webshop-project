import React from 'react'
import {useSelector} from "react-redux"

function selectArticle (reduxState){
    console.log('show us the redux STATE!', reduxState);
    
}




export default function ClotheCard() {
   
    const clothes = useSelector(selectArticle)
    console.log('clothes in component',clothes);

    return (
        <div>
            
        </div>
    )
}
