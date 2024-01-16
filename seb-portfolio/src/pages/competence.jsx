import React from 'react';
import Collapse from '../components/collapse';
import CollapseData  from '../datas/collapses.json';

const Competence = () => {
    return (
    <div>
        <div className='home'>
            <h1 className='home__title'>Compétences</h1>
        </div>
        <div className="collapse">
            <div className="collapse__dropdown">
              {CollapseData.map((item) => {
                return (
                <div key={item.id}>
                    <Collapse content={item.content} title={item.title} />
                </div>
                );
              })}
            </div>
        </div>
      </div>

    );
};

export default Competence;