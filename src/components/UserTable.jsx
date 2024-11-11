import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../contexts/ThemeContext";

const UserTable = () => {
	// Theme state
	const { theme, toggleTheme } = useContext(ThemeContext);
	// User state
	const [users, setUsers] = useState([]);
	// Loading state
	const [loading, setLoading] = useState(true);
	// Error state
	const [error, setError] = useState(false);

	// API Calling for Users
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				setUsers(response.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(true);
				setLoading(false);
			});
	}, []);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
			{/* Theme - Light/Dark Mode */}
			<nav className="absolute right-5 top-5">
				<button className="px-2 py-2rounded-md transition duration-300" onClick={toggleTheme}>
					<h1 className="font-semibold text-gray-700  underline underline-offset-4 dark:text-white">{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
				</button>
			</nav>
			<main>
				{/* Display Users Table */}
				<table className="min-w-full table-auto">
					<thead>
						<tr className="bg-gray-200 dark:bg-gray-700 text-left ">
							<th className="px-4 py-2 font-semibold text-gray-900 dark:text-gray-100">User ID</th>
							<th className="px-4 py-2 font-semibold text-gray-900 dark:text-gray-100">Name</th>
							<th className="px-4 py-2 font-semibold text-gray-900 dark:text-gray-100">Email</th>
							<th className="px-4 py-2 font-semibold text-gray-900 dark:text-gray-100">Company</th>
						</tr>
					</thead>
					<tbody>
						{!loading &&
							users.map((user) => {
								return (
									<tr key={user.id} className="border-b border-gray-200 dark:border-gray-600">
										<td className="px-4 py-2 text-gray-800 dark:text-gray-200">{user.id}</td>
										<td className="px-4 py-2 text-gray-800 dark:text-gray-200">{user.name}</td>
										<td className="px-4 py-2 text-gray-800 dark:text-gray-200">{user.email}</td>
										<td className="px-4 py-2 text-gray-800 dark:text-gray-200">{user.company.name}</td>
									</tr>
								);
							})}
						{error && (
							<tr className="border-b border-gray-200 dark:border-gray-600">
								<td className="px-4 py-2 text-red-600 dark:text-red-400"> Error: Something went wrong!</td>
							</tr>
						)}
					</tbody>
				</table>
			</main>
		</div>
	);
};

export default UserTable;
