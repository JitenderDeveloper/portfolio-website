import React from 'react';
import '../../index.css'

function Product_menu({ Menu_btn, cateItems }) {

    // let reverse_data = cateItems.reverse();
    return (
        <>
            <div className="container p-0 ">
                <div className="row">
                    <div className="col-12">
                        <div className="Card_menu">
                            {
                                cateItems.map((val, id) => {
                                    return (
                                        <button key={id} onClick={() => Menu_btn(val)}>{val}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product_menu