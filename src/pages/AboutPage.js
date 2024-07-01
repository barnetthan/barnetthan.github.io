import '../css/App.css';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
// import '../css/HomePage.css';


function AboutPage() {
  return (
    <div>
      <NavBar curPage="about"/>
      <div>About me page</div>
    </div>
  );
}

export default AboutPage;
