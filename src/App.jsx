import { ThemeProvider } from "./contexts/ThemeContext";
import UserTable from "./components/UserTable.jsx";
const App = () => {
	return (
		<ThemeProvider>
			<UserTable />
		</ThemeProvider>
	);
};

export default App;
