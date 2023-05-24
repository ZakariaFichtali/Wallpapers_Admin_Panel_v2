import React from 'react'
import '../CSS/App.css'
import {useNavigate } from "react-router-dom";
import HomeBackground from "../IMG/HomeBackground.jpg"
import AllWallpapers from "../IMG/AllWallpapers.jpg"
import LiveWallpapers from "../IMG/LiveWallpapers.gif"
import AllCategory from "../IMG/AllCategory.png"
import ads from "../IMG/ads.jpg"; 
import Subscription from "../IMG/Subscription.png";

// -------------------------------------------------------------------
function Home() {
    const navigate = useNavigate()
    const GoAllWallpapers = () => {
      navigate('/wallpapers')
    
    }
  return (
    <div className='all'>    
     {/* ------------------------------    card 1  ---------------------------------- */}
      <div className="card" style={{ width: "30%", height: "350px" }}>
        <img src={AllWallpapers} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">All Wallpaper</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
          <button type='button' className='btn btn-dark ' onClick={GoAllWallpapers}>Wallpapers</button>
    
            </div>
         </div>
     {/* --------------------------------------------------------------------------- */}
      {/* ------------------------------    card 2  ---------------------------------- */}
      <div className="card" style={{ width: "30%", height: "350px" }}>
        <img src={HomeBackground} className="card-img-top" alt="..." />
            <div className="card-body">
          <h5 className="card-title">Normal Wallpaper</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
          <button type='button' className='btn btn-dark ' onClick={GoAllWallpapers}>Wallpapers</button>
    
            </div>
         </div>
     {/* --------------------------------------------------------------------------- */}
      {/* ------------------------------    card 3  ---------------------------------- */}
      <div className="card" style={{ width: "30%", height: "350px" }}>
        <img src={LiveWallpapers} className="card-img-top" alt="..." />
            <div className="card-body">
          <h5 className="card-title">Live Wallpaper</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
          <button type='button' className='btn btn-dark ' onClick={GoAllWallpapers}>Wallpapers</button>
    
            </div>
         </div>
     {/* --------------------------------------------------------------------------- */}
     {/* --------------------------------------------------------------------------- */}
     {/* ------------------------------    card 4  --------------------------------- */}
      <div className="card" style={{ width: "30%", height: "350px" }}>
        <img src={AllCategory} className="card-img-top" alt="..." />
            <div className="card-body">
           <h5 className="card-title">All Category</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
          <button type='button' className='btn btn-dark ' onClick={GoAllWallpapers}>Wallpapers</button>
    
            </div>
         </div>
     {/* --------------------------------------------------------------------------- */}
      {/* ------------------------------    card 5  --------------------------------- */}
      <div className="card" style={{ width: "30%", height: "350px" }}>
        <img src={ads} className="card-img-top" alt="..." />
            <div className="card-body">
          <h5 className="card-title">Manage Ads</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
          <button type='button' className='btn btn-dark ' onClick={GoAllWallpapers}>Wallpapers</button>
    
            </div>
         </div>
     {/* --------------------------------------------------------------------------- */}
      {/* ------------------------------    card 6  --------------------------------- */}
      <div className="card" style={{ width: "30%", height: "350px" }}>
        <img src={Subscription} className="card-img-top" alt="..." />
            <div className="card-body">
          <h5 className="card-title">Subscription</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
          <button type='button' className='btn btn-dark ' onClick={GoAllWallpapers}>Wallpapers</button>
    
            </div>
         </div>
     {/* --------------------------------------------------------------------------- */}
        
    </div>
  )
}

export default Home