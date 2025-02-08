import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryListPage from "./pages/CountryListPage";
import CountryInfoPage from "./pages/CountryInfoPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CountryListPage />} />
        <Route path="/countries/:countryCode" element={<CountryInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
