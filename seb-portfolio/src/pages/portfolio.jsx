import React from 'react';

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

                
              <a className="section-gallery__card" href="http://">
              
                    <div className="section-gallery__card__image1">
                        
                    </div>
                   
               
              </a>
                <div className="section-gallery__card">
                <div className="section-gallery__card__image2">
                        
                        </div>
                    </div>
                    <div className="section-gallery__card">
                    card3
                    </div>
                    <div className="section-gallery__card">
                    card4
                    </div>
                    <div className="section-gallery__card">
                    card5
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