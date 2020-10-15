import React,{useEffect} from 'react'
import '../styles/Home.css'
import Product from'./Product'

function Home() {
    useEffect(()=>{
        document.title = 'Amazon Clone'
    },[])
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt="banner" className="home_banner"/>

                <div className="home__row">
                    <Product id="12321341" title="The Lean Startup" price="209.99" image="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Lean_Startup.png/220px-Lean_Startup.png" rating={5}/>
                    <Product id="49538094" title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon" price="400.99" rating={4} image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg"/>
                    
                </div>
                <div className="home__row">
                <Product id="4903850" image="https://m.media-amazon.com/images/I/81wUWVAiWDL._AC_UL320_.jpg" price="160.03" rating={4} title="AmazonBasics Blue, White, and Yellow Microfiber Cleaning Cloth - Pack of 24"/>
                <Product id="23445930" title="AmazonBasics Down Alternative Bed Comforter, Full / Queen, White, Light" image="https://m.media-amazon.com/images/I/71q-QpZdqqL._AC_UL320_.jpg" price="360.07" rating={4}/>
                <Product id="3254354345" title="AmazonBasics Wireless Computer Mouse with USB Nano Receiver - Black" image="https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_UL320_.jpg" rating={4} price="120.99"/>
                </div>
                <div className="home__row">
                <Product id="90829332" image="https://m.media-amazon.com/images/I/71-RYZhPacL._AC_UL320_.jpg" title="AmazonBasics 20-Piece Stainless Steel Flatware Set with Square Edge, Service for 4" rating={4} price="190.09"/>
                </div>
            </div>
        </div>
    )
}

export default Home
