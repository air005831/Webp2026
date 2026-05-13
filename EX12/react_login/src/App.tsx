import React, { useState } from "react";
import "./App.css";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Signing in with:", { email, password });
		// Add login logic here
		alert(`Signing in with: ${email}`);
	};

	return (
		<div className="login-container">
			<div className="login-card">
				<h2>Sign In</h2>
				<form onSubmit={handleSignIn}>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button type="submit" className="signin-button">
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
}

export default App;
