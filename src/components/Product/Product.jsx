import React from 'react'
import './style.css';
import { FaPlusSquare, FaRegHeart, FaRegPaperPlane, FaRegStar } from 'react-icons/fa';
import { BsGrid, BsLightningCharge } from 'react-icons/bs';
import { MdAutoGraph } from 'react-icons/md'
import { FiCompass } from 'react-icons/fi'


const Product = () => {
  return (
    <div>
        <div className='product-container'>
            <h1 className='product-title'>Our Product</h1>
            <div className="prod-section-container">
                <div className='item-container'>
                    <FaPlusSquare className='icon'/>
                    <h2 className='section-title'>Create Content</h2>
                    <p className='section-desc'>Post to your feed and share your thoughts with the community.</p>
                </div>
                <div className='item-container'>
                    <BsGrid className='icon'/>
                    <h2 className='section-title'>Join Pits</h2>
                    <p className='section-desc'>Join Groups about topics you're interested in.</p>
                </div>
                <div className='item-container'>
                    <MdAutoGraph className='icon'/>
                    <h2 className='section-title'>Invest</h2>
                    <p className='section-desc'>Invest and learn about stocks and crypto.</p>
                </div>
                <div className='item-container'>
                    <FiCompass className='icon'/>
                    <h2 className='section-title'>Explore</h2>
                    <p className='section-desc'>Discover stocks, news, and topics.</p>
                </div>
                <div className='item-container'>
                    <FaRegHeart className='icon'/>
                    <h2 className='section-title'>Interact</h2>
                    <p className='section-desc'>Engage with and build your community.</p>
                </div>
                <div className='item-container'>
                    <BsLightningCharge className='icon'/>
                    <h2 className='section-title'>View Trends</h2>
                    <p className='section-desc'>See what's popular with other Avocado users.</p>
                </div>
                <div className='item-container'>
                    <FaRegPaperPlane className='icon'/>
                    <h2 className='section-title'>Share Content</h2>
                    <p className='section-desc'>Share content and send messages with your friends.</p>
                </div>
                <div className='item-container'>
                    <FaRegStar className='icon'/>
                    <h2 className='section-title'>Create a Watchlist</h2>
                    <p className='section-desc'>Favorite stocks and crypto that you are interested in.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product