import React from 'react';

import Logo from '../../../../assets/images/starwars-logo.png';
import './PeopleItem.css';

const PeopleItem = ({name,height,mass,hair_color,skin_color}) => {
	return (
		<>
			<div className="card" style={{width: "18rem", margin: "1rem"}}>
				<img src={Logo} id="logo" className="card-img-top" alt={name}></img>
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"><strong>Height: </strong>{height}</li>
					<li className="list-group-item"><strong>Mass: </strong>{mass}</li>
					<li className="list-group-item"><strong>Hair Color: </strong>{hair_color}</li>
					<li className="list-group-item"><strong>Skin Color: </strong>{skin_color}</li>
				</ul>
			</div>
		</>
	)
}

export default PeopleItem;