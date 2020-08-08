import React, {useContext, useState, useEffect} from 'react';

import { fetchPeopleList } from '../../../api/starwars.people.api';
import { PeopleContext } from '../../../Context/PeopleContext';
import PeopleItem from './PeopleItem/PeopleItem';

const PeopleList = () =>{
    const [peopleState, setPeopleState] = useContext(PeopleContext);
    const {loading, error, list} = peopleState;

    useEffect(() => { 
		setPeopleState({...peopleState, loading:true});
		fetchPeopleList()
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
				{list && list.map(person => {
					return(
					<PeopleItem 
						key={person.name}
						name={person.name}
						height={person.height}
						mass={person.mass}
						hair_color={person.hair_color}
						skin_color={person.skin_color}
					/>
					)
				})}
			</div>
    )
}

export default PeopleList;

