import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Hack @ UCI Tech Deliverable</h1>

			<h2>Submit a quote</h2>
			<form action="/api/quote" method="post">
				<label htmlFor="input-name">Name</label>
				<input type="text" name="name" id="input-name" required />
				<label htmlFor="input-message">Quote</label>
				<input type="text" name="message" id="input-message" required />
				<button type="submit">Submit</button>
			</form>

			<h2>Previous Quotes</h2>
			<div className="messages">
				<h3>Test User</h3>
				<p>test message</p>
			</div>
		</div>
	);
}

export default App;
