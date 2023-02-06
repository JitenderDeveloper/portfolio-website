import React, { useState } from 'react'
import Button_Com from '../../Components/Button_Com';
import Main_Title from '../../Components/Main_Title'
import Product_api from '../../Product_api/Product_api'
import Product_menu from './Product_menu';
// import Product_menu from './Product_menu';

function Product() {

    const allCategory = [...new Set(Product_api.map((elm) => elm.category)), "All"];
    const Reve_data = allCategory.reverse();
    // console.log(allCategoryF);

    const [cateItems, setCateItems] = useState(Reve_data)
    const [data, setData] = useState(Product_api)
    const Menu_btn = (val) => {
        if(val === "All"){
            setData(Product_api)
            return;
        }
        const fliter_s = Product_api.filter((catege) => {
            return catege.category === val;
        })
        setData(fliter_s)
    }

    return (
        <>
            <div className="container Product_item ">
                <Main_Title heading="Introducing Our Demos" />
               
                <Product_menu data={data} Menu_btn={Menu_btn} cateItems={cateItems}/>

                <div className="row mt-5">
                    {
                        data.slice(0,9).map((value) => {
                            const { id, product_title, product_img, product_price, tech_details } = value;
                            return (
                                <div key={id} className="col-lg-4 col-md-4 col-12">
                                    <div className="card_section">
                                        <div className="card_img">
                                            <img src={product_img} alt="" />
                                            <div className="Upper_content">
                                                <div className="uper-pre">
                                                    <a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
                                                    <h6>Preview</h6>
                                                </div>
                                                <div className="uper-pre">
                                                    <a href=""><i className="fa-solid fa-circle-info"></i></a>
                                                    <h6>Details</h6>
                                                </div>
                                                <div className="uper-pre">
                                                    <a href=""><i className="fa-solid fa-face-grin-hearts"></i></a>
                                                    <h6>Live</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_content d-flex align-items-center justify-content-between">
                                            <h4>{product_title}...</h4>
                                            <h5><span>$</span> {product_price}</h5>
                                        </div>
                                        <div className="tech-use">
                                            <h5>{tech_details}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="view_all mt-5">
                    <Button_Com linker="/Product_page" btn_title="View More" />
                </div>
            </div>
        </>
    )
}

export default Product