import projects from './components/Projects/projects';

import '../styles/main.scss';

const init = () => {
  projects.init();
  projects.printProjects();
};

init();
