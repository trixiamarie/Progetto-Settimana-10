import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import SearchBar from './components/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import DetailPage from './components/DetailPage';
import PageNotFound from './components/PageNotFound';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/detailpage/:searchValue" element={<DetailPage />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <MyFooter />
      </>
    </Router>
  );
}

export default App;
