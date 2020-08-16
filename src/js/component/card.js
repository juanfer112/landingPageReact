import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//import "../../styles/index.scss";
export class Card extends React.Component {
	static propTypes = {
		cards: PropTypes.any
	};
	render() {
		const cards = this.props.cards;
		return (
			<div className="card-row card-deck mx-auto">
				{cards.map((card, index) => {
					return (
						<div className="card" key={index}>
							<img
								className="card-img-top"
								src="http://placehold.it/500x325"
								alt="Card image"
							/>
							<div className="card-body text-center">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">{card}</p>
							</div>
							<div className="card-footer text-center">
								<a href="#" className="btn btn-primary">
									Find out more!
								</a>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
