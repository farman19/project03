import React, { useState }  from "react";
import './shop.css';
import { FaHeart,FaEye } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

 
const Shop = ({shop,Filter,allcatefilter,addtocart}) =>{
    // toggle product detail
    const [showDetail,setShowDetail] = useState(false)
    // detail page date
    const [detail,setDetail] = useState([])
        // show detail now
    const detailpage = (product) =>{

        const detaildata =  ([{product}])
        const productdetail = detaildata[0]['product']
        // console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }
    

    const closedetail = () =>{
        setShowDetail(false)
    }
    return(
        <>
        {
            showDetail ? 
            <>
             <div className="product-detail">
                    <button className="close-btn" onClick={closedetail}><AiOutlineClose/></button>
                    <div className="container">
                        <div className="img-box">
                            <img src={detail.image} alt=""></img>
                        </div>
                        <div className="info">
                            <h4># {detail.cat}</h4>
                            <h2>{detail.Name}</h2>
                            <p>A Screen Everyone Will Love: Whether your family is streming or video</p>
                            <h3>${detail.price}</h3>
                            <button onClick={() => addtocart(detail)}>Add To Cart</button>
                        </div>
                    </div>
              </div>
            </>
            : null 
        }
       
        <div className="shop">
            <h2># shop</h2>
            <p>Home . shop</p>
            <div className="container">
                <div className="left-box">
                    <div className="category">
                        <div className="header">
                            <h3>all categories</h3>
                        </div>
                        <div className="box">
                            <ul>
                                <li onClick={()=>allcatefilter()}># All</li>
                                <li onClick={()=> Filter ("tv")}># tv</li>
                                <li onClick={()=> Filter ("laptop")}># laptop</li>
                                <li onClick={()=> Filter ("watch")}># watch</li>
                                <li onClick={()=> Filter ("buds")}># buds</li>
                                <li onClick={()=> Filter ("phon")}># phone</li>
                                <li onClick={()=> Filter ("tab")}># tab</li>
                                <li onClick={()=> Filter ("speacker")}># speacker</li>
                                <li onClick={()=> Filter ("headphone")}># headphone</li>
                                <li onClick={()=> Filter ("keyboard")}># keyboard</li>
                                <li onClick={()=> Filter ("Vr")}># Vr</li>
                            </ul>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="img-box">
                            <img src="image/banner8.png" alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="right-box">
                    <div className="banner">
                        <div className="img-box">
                            <img src="image/banner5.png"alt=""></img>
                        </div>
                    </div>
                    <div className="product-box">
                        <h2>Shop Product</h2>
                        <div className="product-container">
                            {
                                shop.map((curElm)=>{
                                    return(
                                        <>
                                        <div className="box">
                                            <div className="img-box">
                                                <img src={curElm.image} alt=""></img>
                                                <div className="icon">
                                                <li> <FaHeart/></li>
                                                <li onClick={()=>detailpage (curElm)}><FaEye/></li>
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <h3>{curElm.Name}</h3>
                                                <p>${curElm.price}</p>
                                                <button onClick={()=>addtocart(curElm)}>Add To Cart</button>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })
                            }
                            <div className="box"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Shop;