import '../css/App.css';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';


function ProjectPage() {
  return (
    <div>
      <NavBar curPage="project"/>
      <div>Projects.</div>
    </div>
  );
}

export default ProjectPage;
