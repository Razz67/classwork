const React = require("react");

class New extends React.Component {
	render() {
		return (
			<div>
				<h1>New Fruit Page</h1>
				{/* Action is the route that the form will submit to */}
				<form action="/meats" method="POST">
					<label htmlFor="name">Name:</label>
					<input type="text" name="name" />
					<br />
					<br />

					<label htmlFor="color">Color: </label>
					<input type="text" name="color" />
					<br />
					<br />

					<input type="submit" value="Create Fruit" />
				</form>
			</div>
		);
	}
}

module.exports = New;
