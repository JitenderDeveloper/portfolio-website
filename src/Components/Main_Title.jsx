import React from 'react'
import '../index.css';

function Main_Title(props) {
  return (
    <>
        <div className="inner_text">
            <h2>{props.heading}</h2>
            <p>{props.paragraph}</p>
        </div>
    </>
  )
}

export default Main_Title