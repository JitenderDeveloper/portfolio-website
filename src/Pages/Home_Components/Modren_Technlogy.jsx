import React from 'react'
import Main_Title from '../../Components/Main_Title'
import Tech from '../../Product_api/Tech'

function Modren_Technlogy() {
    return (
        <>
            <div className="container Moder_tech">
                <Main_Title heading="Modern technologies we have used to build this platform" paragraph="Our modern & rich tech choice will encourage you to think in a different way. As we have used modern technologies, your experience will get better by using Pixer." />
                <div className="inner_section_skill">
                    <div className="row">
                        {
                            Tech.map((val) => {
                                const { id, tech_title, img } = val;
                                return (
                                    <div key={id} className="col-lg-2 col-md-2 col-4">
                                        <div className="inner_tech">
                                            <div className="tech_img">
                                                <img src={img} alt="" />
                                            </div>
                                            <h4>{tech_title}</h4>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modren_Technlogy