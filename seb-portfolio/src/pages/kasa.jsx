import React from 'react';
import FicheBannerKasa from '../components/ficheportfolio/kasa/ficheBannerKasa';
import CollapseKasa from '../components/layout/ficheportfolio/collapseKasa';
import FlecheReturn from '../components/ficheportfolio/flecheReturn';
import TagKasa from '../components/layout/ficheportfolio/tagKasa';




const Kasa = () => {
    return (
        <>
        <div className='fiche-container'>
            <FlecheReturn />
           <FicheBannerKasa />
           <TagKasa />
           <CollapseKasa />
        </div>
        <div>
            <div className="kasa-button">
                <a href="https://github.com/sebtech-run/Projet8-kasa">retrouve ce projet sur github</a>
            </div>

        </div>
        </>
    );
};

export default Kasa;