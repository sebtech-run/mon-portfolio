import React, { useState } from "react";



const CollapseKasa = ({ title, content }) => {
  //declaration du state en utilisant le Hook useState()
  const [isOpen, setIsOpen] = useState(false); // je definie le state du toggle (et false par défaut)

  //fonction pour gérer l'afichage du contenu des collapses
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    // affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>Compétences acquises </h2>
        <p onClick={display}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
           
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </p>
      </div>
      {/* Si le collapse est à TRUE alors il affichera la description */}
      <div className="collapse__dropdown__content">
        {isOpen && <div><p>Initialisation d'un projet React avec CRA Ou VIte</p>
        <p>Mise en place d'une architecture de code</p>
        <p>Définition des différentes routes avec React-Router</p>
        <p>Création des différents composants React</p>
        <p>Respect du design via Figma</p>
        <p>Utilisation des media-queries pour le responsive</p></div>}
      </div>
      
     
    </div>
  );
};

export default CollapseKasa;