import React from 'react';

import Logo from '../../../../assets/images/starwars-starship.jpg';
import './StarshipItem.css';

const StarshipItem = ({name,model,manufacturer,starship_class}) => {
	return (
		<>
			<div className="card" style={{width: "18rem", margin: "1rem"}}>
				<img src={Logo} id="logo" className="card-img-top" alt={name}></img>
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"><strong>Model:</strong>{model}</li>
					<li className="list-group-item"><strong>Manu facturer:</strong>{manufacturer}</li>
					<li className="list-group-item"><strong>Starship class:</strong>{starship_class}</li>
				</ul>
			</div>
		</>
	)
}

export default StarshipItem;