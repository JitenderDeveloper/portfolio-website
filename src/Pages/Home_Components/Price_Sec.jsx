import React from 'react'
import Button_Com from '../../Components/Button_Com'
import Main_Title from '../../Components/Main_Title'
import Price_api from '../../Product_api/Price_api'

function Price_Sec() {
    return (
        <>
            <div className="container Price_section pt-5">
                <Main_Title heading="Introducing Our Price" />
                <div className="row mt-5 mb-5">
                    {
                        Price_api.map((val) => {
                            const { id, price_img, price_title, price, priceList } = val;
                            return (
                                <div key={id} className="col-lg-4 col-md-6 col-12">
                                    <div className="Price_card">
                                        <div className="price_img d-flex align-items-center justify-content-center">
                                            <img src={price_img} alt="" />
                                        </div>
                                        <div className="price_heading mt-3 text-center">
                                            <h2>{price_title}</h2>
                                            <h3><span><i class="fa-solid fa-dollar-sign"></i></span> {price}</h3>
                                        </div>
                                        <div className="price_content">
                                            <ul>
                                                {/* {
                                                    Price_api.map(function (item, i) {
                                                        return <li key={i}><i className="fa-regular fa-circle-check"></i>{item}</li>
                                                    })
                                                } */}

                                            </ul>
                                        </div>
                                        <div className="price_btn">
                                            <Button_Com linker="/" btn_title="Let's Start" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Price_Sec