import React from 'react'
import Button_Com from '../../Components/Button_Com'

function Home_Hero() {
    return (
        <>
            <div className="container-fluid Main_header_section">
                <div className="row">
                    <div className="col-12">
                        <div className="inner_hero_section">
                            <h1>Start selling or freely distribute your digital assets with Pixer</h1>
                            <p>Pixer – React Multivendor is a digital eCommerce Marketplace Template developed based on React, Next JS, and Tailwind CSS.</p>
                            <div className="hero_btn">
                                <Button_Com linker="/Product_page" btn_title="Explore Demo" />
                                <div className="change_btn">
                                    <Button_Com btn_title="View Pages!" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home_Hero