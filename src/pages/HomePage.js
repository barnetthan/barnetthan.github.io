import '../css/App.css';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
// import '../css/HomePage.css';


function HomePage() {
  return (
    <div>
      <NavBar curPage="home"/>
      <div>Welcome.</div>
    </div>
  );
}

export default HomePage;
