import React, { useEffect, useState }  from "react";
import './home.css';
import {Link} from 'react-router-dom';
import Homeproduct from "./home_product";
import { FaEye,FaHeart,FaFacebookF,FaYoutube    } from "react-icons/fa";
import { FaXTwitter,FaInstagram } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";



const  Home = ({addtocart})=>{ 
    // product type
    const [newProduct,setNewProduct] = useState([])
    const [featuredProduct,setfeaturedProduct] = useState([])
    const [topProduct,setTopProduct] = useState([])
    //trending product
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
    // filter of treding product 
    const filtercate = (x) =>
    {
        const filterproduct = Homeproduct.filter((curElm)=>
        {
            return curElm.type === x 
        })
        setTrendingProduct(filterproduct)
    }
    // all treding product
    const allTredingProduct = () =>{
        setTrendingProduct(Homeproduct)
    }
    // product type
    useEffect (()=>{
    productcategory()
    })

    const productcategory = () =>{
        // new  product
        const newcategory = Homeproduct.filter((x)=>{
            return x.type === 'new'
        })
        setNewProduct(newcategory)

        // featured product
        const featuredcategory = Homeproduct.filter((x)=>{
            return x.type === 'featured'
        })
        setfeaturedProduct(featuredcategory)
        // top product

        const topcategory = Homeproduct.filter((x)=>{
            return x.type === 'top'
        })
        setTopProduct(topcategory)
    }

    return(
        <>
            <div className="home">
                <div className="top-banner">
                   <div className="content">
                    <h3>silver aluminum</h3>
                    <h2>Apple Watch</h2>
                    <p>30% off at your first order</p>
                    <Link to="/shop" className="link">Shop now</Link>
                   </div>
                    
                </div>
                <div className="trending">
                    <div className="container">
                        <div className="left-box">
                            <div className="header">
                                <div className="heading">
                                    <h2 onClick={()=> allTredingProduct()}>trending product</h2>
                                </div>
                                <div className="cate">
                                    <h3 onClick={()=> filtercate ('new')}>New</h3>
                                    <h3 onClick={()=> filtercate ('featured')}>Featured</h3>
                                    <h3 onClick={()=> filtercate ('top')}>top selling</h3>
                                </div>
                            </div>
                            <div className="products">
                                <div className="container">
                                        {
                                            trendingProduct.map((curElm)=>
                                                {
                                                    return(
                                                        <>
                                                        <div className="box">
                                                            <div className="img-box">
                                                                <img src={curElm.image} alt=""></img>
                                                                <div className="icon">
                                                                    <div className="icon-box">
                                                                        <FaEye/>
                                                                    </div>
                                                                    <div className="icon-box">
                                                                        <FaHeart/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className=" info">
                                                                <h3>{curElm.Name}</h3>
                                                                <p>${curElm.price}</p>
                                                                <button onClick={()=> addtocart(curElm)} className="btn">Add to cart</button>
                                                            </div>
                                                        </div>
                                                        </>
                                                    )

                                            })
                                        }
                                </div>
                                <button>show more</button>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="right-container">
                                <div className="testimonial">
                                    <div className="head">
                                        <h3>our testimonial</h3>
                                    </div>
                                    <div className="detail">
                                        <div className="img-box">
                                            <img src="image/t1.jpg" alt="testmonial"></img>
                                        </div>
                                        <div className="info">
                                            <h3>stepan robot</h3>
                                            <h4>web designer</h4>
                                            <p>Web designers are responsible for the visual aspects of websites, including their design, layout, and content:</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="newsletter">
                                <div className="head">
                                        <h3>newsletter</h3>
                                    </div>
                                    <div className="form">
                                        <p>join our maling list</p>
                                        <input type="email" placeholder="E-mail" autoComplete='off'></input>
                                        <button>subscribe</button>
                                        <div className="icon-box">
                                        <div className="icon">
                                            <FaFacebookF/>
                                        </div>
                                        <div className="icon">
                                            <FaXTwitter/>
                                        </div>
                                        <div className="icon">
                                            <FaInstagram/>
                                        </div>
                                        <div className="icon">
                                            <FaYoutube/>
                                        </div>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banners">
                    <div className="container">
                        <div className="left-box">
                            <div className="box">
                                <img src="image/banner3.jpeg" alt="banner"></img>
                            </div>
                            <div className="box04">
                                <img src="image/banner4.jpg" alt="banner"></img>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="top">
                                <img src="image/banner5.png" alt="banner"></img>
                                <img src="image/banner6.jpg" alt="banner"></img>
                            </div>
                            <div className="bottom">
                                <img src="image/banner7.jpg" alt="banner"></img>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="product-type">
                    <div className="container">
                        <div className="box">
                        <div className="header">
                            <h2>New product</h2>
                        </div>
                        {
                            newProduct.map((curElm)=>{
                                return(
                                    <>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src={curElm.image} alt=""></img>
                                        </div>
                                        <div className="detail">
                                            <h3>{curElm.Name}</h3>
                                            <p>${curElm.price}</p>
                                            <div className="icon">
                                                <button><FaEye/></button>
                                                <button><FaHeart/></button>
                                                <button onClick={()=>addtocart (curElm)}><IoCartOutline /></button>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                       
                        </div>
                        <div className="box">
                        <div className="header">
                            <h2>Featured product</h2>
                        </div>
                        {
                            featuredProduct.map((curElm)=>{
                                return(
                                    <>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src={curElm.image} alt=""></img>
                                        </div>
                                        <div className="detail">
                                            <h3>{curElm.Name}</h3>
                                            <p>${curElm.price}</p>
                                            <div className="icon">
                                                <button><FaEye/></button>
                                                <button><FaHeart/></button>
                                                <button onClick={()=>addtocart (curElm)}><IoCartOutline /></button>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                       
                        </div>
                        <div className="box">
                        <div className="header">
                            <h2>Top product</h2>
                        </div>
                        {
                            topProduct.map((curElm)=>{
                                return(
                                    <>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src={curElm.image} alt=""></img>
                                        </div>
                                        <div className="detail">
                                            <h3>{curElm.Name}</h3>
                                            <p>${curElm.price}</p>
                                            <div className="icon">
                                                <button><FaEye/></button>
                                                <button><FaHeart/></button>
                                                <button onClick={()=>addtocart (curElm)}><IoCartOutline /></button>
                                            </div>
                                        </div>
                                    </div>
                                    </>
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
export default Home;