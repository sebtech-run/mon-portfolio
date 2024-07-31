import React from 'react';
import { NavLink } from "react-router-dom";



const portfolio = () => {
  return (
      <>
      <div className="banner">
      <div className='home'>
        <h1 className='home__title'>portfolio</h1>
      </div>      
        </div>
        <main>
          <h1 className='title-portfolio'>Mes projets</h1>
            <section className='section-gallery'>

            <div className="section-gallery__card">
             <div className="section-gallery__card__title">
              <NavLink to="/kasa">
                <h2>Voir projet</h2>
              </NavLink>  
                </div>
                <div className="section-gallery__card__image1">
                
                </div>
            </div>
            
            <div className="section-gallery__card">
                <div className="section-gallery__card__title">
                <NavLink to="/ohmyfood">
                   <h2>Voir projet</h2>
                </NavLink>  
                </div>
                 <div className="section-gallery__card__image2">  
                </div>
            </div>

            <div className="section-gallery__card">
                <div className="section-gallery__card__title">
                <NavLink to="/booki">
                   <h2>Voir projet</h2>
                </NavLink>  
                </div>
                <div className="section-gallery__card__image3">  
                </div>
            </div>

            <div className="section-gallery__card">
                <div className="section-gallery__card__title">
                <NavLink to="/qwenta">
                   <h2>Voir projet</h2>
                </NavLink>  
                </div>
                <div className="section-gallery__card__image4">  
               </div>
            </div>


            <div className="section-gallery__card">
               <div className="section-gallery__card__title">
                  <NavLink to="/sophiebluel">
                   <h2>Voir projet</h2>
                  </NavLink>  
               </div>
                <div className="section-gallery__card__image5">  
                </div>
             </div>



                  <div className="section-gallery__card">
                  card6
                  </div>


          </section> 

        

          <button className='button-portfolio'> <a href="https://github.com/sebtech-run">Retrouve tous mes projets sur GitHub</a></button>

        </main>
  
        </>
  );
};



export default portfolio;