import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../../helpers/getHeroById';
import './hero-card.css'

export const HeroScreen = () => {

  const { heroId } = useParams()
  const hero = useMemo( () => getHeroById(heroId), [ heroId ]) 
  const navigate = useNavigate()

  const { id, superhero, publisher, alter_ego, first_appearance } = hero
  const imagePath = `/assets/${id}.jpg`

  if (!hero) {
    return <Navigate to="/"/>
  }

  const handleReturn = () => {
    navigate(-1)
  }



  return (
    <div className="container card-info animate__animated animate__fadeInLeft">
      <div className="row">
        <div className="col-4 card-head-wrapper">
          <div className="card-head">
            <img 
              className="img img-fluid" 
              src={ imagePath } 
              alt={superhero}/>
          </div>
        </div>
        <div className="col-8">
          <div className="card-body">
            <h3>{superhero}</h3>
            <hr/>
            <ul className="list-group">
              <li className="list-group-item"><b>Alter Ego:</b> {alter_ego}</li>
              <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
              <li className="list-group-item"><b>First Appearance:</b> {first_appearance}</li>
            </ul>
            <hr/>
            <button 
              className="btn btn-outline-dark"
              onClick={ handleReturn }
            >Regresar</button>
          </div>
        </div>
      </div>
    </div>
  )
};
