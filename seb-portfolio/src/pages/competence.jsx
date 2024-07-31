import React from 'react';


const Competence = () => {
    return (
    <div>
      
        <div className="banner">
        <div className='home'>
            <h1 className='home__title'>Compétences</h1>
        </div>
           
        </div>
        <main>
       <section className='section-competence'>
        <div className="section-competence__div1">
        <h2>Domaines de compétences</h2>
            <div className="section-competence__div1__text">
            <i className="fa-solid fa-list-check"></i>
            <div>
            <h3>Gestion de projet web</h3>
           <p>Planification de projet - Methodologie agile</p>
            </div>
            </div>
            <div className="section-competence__div1__text">
            <i className="fa-solid fa-image"></i>
            <div>
            <h3>Conception multi-plateformes</h3>
           <p>Responsive - Mobile first - media querie</p>
            </div>
            </div>
            <div className="section-competence__div1__text">
            <i className="fa-brands fa-google"></i>
            <div>
            <h3>Référencement SEO</h3>
            <p>microdatas - rich snippet - schema.org</p>
          
            </div>
            </div>
            <div className="section-competence__div1__text">
            <i className="fa-solid fa-laptop-code"></i>
            <div>
            <h3>Developpement frontend avec react</h3>
           <p>react app - vite - react router - composants</p>
            </div>
            </div>
            <div className="section-competence__div1__text">
            <i className="fa-solid fa-screwdriver-wrench"></i>
            <div>
            <h3>Optimisation et debug</h3>
            <p>react devtools - ligththouse</p><br/>
         
           
            </div>
            </div>

        </div>
        <div className="section-competence__div2">
            <h2>Stacks</h2>
            <div className="section-competence__div1__text">
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3"></i>
            <div>
            <h3>html - css</h3>
           
            </div>
            </div>

            <div className="section-competence__div1__text">
            <i className="fa-brands fa-sass"></i>
            <div>
            <h3>Sass</h3>
           
            </div>
            </div>

            <div className="section-competence__div1__text">
            <i className="fa-brands fa-js"></i>
            <div>
            <h3>Javascript</h3>
           
            </div>
            </div>

            <div className="section-competence__div1__text">
            <i className="fa-brands fa-react"></i>
            <div>
            <h3>React</h3>
           
            </div>
            </div>

            <div className="section-competence__div1__text">
            <i className="fa-brands fa-node"></i>
            <div>
            <h3>NodeJs - ExpressJs</h3>
           
            </div>
            </div>
            
           

          
        </div>

       </section>
       
       <section>
       <div className="competence__div3">
           <h2> Outils de développement</h2>
            <div className="tag-container">
      <span className="tag-container__button blue">VSCODE</span>
      <span className="tag-container__button">DEV TOOLS</span>
      <span className="tag-container__button">GIT-GITHUB</span>
      <span className="tag-container__button red">FIGMA</span>
      <span className="tag-container__button"></span>
      
        </div>
        </div>
       </section>
       
     </main>
       
      </div>

    );
};

export default Competence;