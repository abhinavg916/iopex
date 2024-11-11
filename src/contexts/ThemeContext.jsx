import React, { createContext, useState, useEffect } from "react";

// Create theme context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	// Theme variable
	const savedTheme = localStorage.getItem("theme");
	const [theme, setTheme] = useState(savedTheme || "dark");

	// Set default theme
	useEffect(() => {
		localStorage.setItem("theme", theme);
		if (theme == "dark") document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
	}, [theme]);

	// Change theme
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };
