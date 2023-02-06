import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Button_Com(props) {
    return (
        <>
            <div className="Button_Component d-flex align-items-center justify-content-center">
                <Link to={props.linker}>{props.btn_title}</Link>
            </div>
        </>
    )
}

export default Button_Com