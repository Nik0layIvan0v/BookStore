import React from 'react';

class Example extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			//Base default state! initial values of state
			exampleProps: [],
			selectedValue: '',
		};
	}

	componentDidMount() {
		//Trigger on render
		fetch('http://localhost:3030/jsonstore/services') //local server for testing
			.then((resp) => resp.json())
			.then((result) =>
				this.setState({
					exampleProps: Object.values(result),
				})
			);
	}

	onListItemClick(e) {
		console.log(e.target.textContent);
		this.setState({ selectedValue: e.target.textContent });
	}

	componentDidUpdate() {
		console.log('component updated');
	}

	componentWillUnmount() {
		console.log('component removed from dom!');
	}

	render() {
		console.log(this.props);
		return (
			<>
				<h2>this.props.title = {this.props.title}</h2>
				<h2>
					this.state.selectedValue = {this.state.selectedValue}
				</h2>

				<h3>constructor state example props: </h3>
				<ul>
					{this.state.exampleProps.map((x) => (
						<li
							key={x._id}
							onClick={this.onListItemClick.bind(this)}
						>
							{x.name}
						</li>
					))}
				</ul>
			</>
		);
	}
}

export default Example;
