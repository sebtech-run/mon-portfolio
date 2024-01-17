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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et dolore vero repellat inventore explicabo distinctio ea excepturi voluptate fugiat. Aliquid dicta possimus recusandae dolore blanditiis corrupti ut nobis! Impedit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et dolore vero repellat inventore explicabo distinctio ea excepturi voluptate fugiat. Aliquid dicta possimus recusandae dolore blanditiis corrupti ut nobis! Impedit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et dolore vero repellat inventore explicabo distinctio ea excepturi voluptate fugiat.
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