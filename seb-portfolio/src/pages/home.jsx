import React from 'react';


const Home = () => {
    return (
     <>   
   
    <div className="banner">
    <div className='home'>
     <h1 className='home__title'>à propos</h1>
     </div>     
     </div>
     <main>
      
       <section className='section-container'>
        <div className="section-container__div1">
        <div className="circle"></div>
          <div className="circle__text">
            <h2>Intégrateur Web</h2>
            </div> 
        </div>

        <div className="section-container__div2">
        <div>
        <i class="fa-solid fa-terminal"></i>
        <p>
         Bonjour, je m'appelle<strong> Bouillet Sébastien</strong>, j'ai 48 ans et je suis actuellement en reconversion professionnelle dans le développement web.<br/>
         A ce jour, j'ai suivi une formation diplômante chez OpenClassroom afin d'acquérir des compétences dans le développement frontend avec des langages de programmation tels que HTML, CSS, SASS, REACT...<br/>
         Mon objectif est d'acquérir de l'experience dans le développement web en travaillant sur des nouveaux projets.
         
          </p>
          <i class="fa-solid fa-code"></i>
        </div>
        </div>
       </section>
     </main>
  </>
);
};

export default Home;