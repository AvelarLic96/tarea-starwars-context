import React from 'react';

//import "./Home.css";
import People from '../../assets/images/starwars-people1.jpg';
import BoxLeft from '../../assets/images/starwars-box1.jpg';
import BoxRight from '../../assets/images/starwars-box2.jpg';

function Home() {
	return(
		<>
			<div id="principalContainer" className="container-fluid">
				<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
							<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
						</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={People} className="d-block w-100" alt="Dark Vaider"></img>
							<div className="carousel-caption d-none d-md-block">
								<h5>First slide label</h5>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-12">
					<h2 className="mt-4">Star Wars</h2>
					<p className="text-justify">
						Star Wars is a science-fiction franchise comprising movies, books, comics, video games, toys, and animated shows. It is a fictional universe created by George Lucas.
						The Star Wars story employs archetypal motifs common to science fiction, political climax and classical mythology, as well as musical motifs of those aspects.
						As one of the foremost examples of the space opera subgenre of science fiction, Star Wars has become part of mainstream popular culture, as well as being one of the 
						highest-grossing series of all time. It is currently the second highest-grossing film series behind only the Marvel Cinematic Universe[1] and also the second 
						highest-grossing media franchise of all time (with only the Japanese franchise Pokémon outranking it).
					</p>
				</div>

				<div className="container">
					<div className="row p-5">
						<div className="card" style={{width: "30rem"}}>
							<img src={BoxLeft} className="card-img-top" alt="... /"></img>
							<div className="card-body">
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
					

						<div className="card" style={{width: "30rem"}}>
							<img src={BoxRight} className="card-img-top" alt="... /"></img>
							<div className="card-body">
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</	div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home;