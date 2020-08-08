import React, {useContext, useState, useEffect} from 'react';

import { fetchstarshipList } from '../../../api/starwars.starship.api';
import { PeopleContext } from '../../../Context/PeopleContext';
import StarshipItem from './starshipItem/StarshipItem';

const StarshipList = () =>{
    const [peopleState, setPeopleState] = useContext(PeopleContext);
    const {loading, error, list} = peopleState;

    useEffect(() => { 
		setPeopleState({...peopleState, loading:true});
		fetchstarshipList()
			.then((response) => {
				console.log('list', response);
				setPeopleState({...peopleState, loading:false, list:response.results});
			})
			.catch(err => {
				setPeopleState({...peopleState, error:true})
				console.log('err', err);
			});
    }, [setPeopleState]);
    
    if (error) {
			return (
				<div className="alert alert-danger">
					<strong>Error!</strong> There was a problem fetching people from Star Wars.
				</div>
			);
		}
  
    if (loading) {
			return ( 
				<div className="spinner-border text-danger" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			);
		}
		console.log('flista', list);
		
    return(
			<div className="row" style={{marginLeft:"5rem"}}>	
				{list && list.map(ship => {
					return(
					<StarshipItem 
						key={ship.name}
						name={ship.name}
						model={ship.model}
						manufacturer={ship.manufacturer}
						starship_class={ship.starship_class}
					/>
					)
				})}
			</div>
    )
}

export default StarshipList;