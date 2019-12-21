import projectData from '../../helpers/data/projectData';
import utilities from '../../helpers/utilities';

import projectCard from '../projectCard/projectCard';

const init = () => {
  const printProjects = () => {
    projectData.getProjects()
      .then((projects) => {
        const projectCards = projectCard.createProjectCards(projects);
        utilities.printToDom('projectsPage', projectCards);
      })
      .catch((error) => console.error(error));
  };

  const selectTechnologies = document.getElementById('technologiesPage');
  const selectBio = document.getElementById('bioPage');
  const selectProjects = document.getElementById('projectsPage');

  const technologyDisplayed = () => {
    if (selectTechnologies.style.display === 'none') {
      selectTechnologies.style.display = 'block';
      selectBio.style.display = 'none';
      selectProjects.style.display = 'none';
    } else {
      selectTechnologies.style.display = 'block';
      selectBio.style.display = 'none';
      selectProjects.style.display = 'none';
    }
  };

  const bioDisplayed = () => {
    if (selectBio.style.display === 'none') {
      selectTechnologies.style.display = 'none';
      selectBio.style.display = 'block';
      selectProjects.style.display = 'none';
    } else {
      selectTechnologies.style.display = 'none';
      selectBio.style.display = 'block';
      selectProjects.style.display = 'none';
    }
  };

  const projectsDisplayed = () => {
    if (selectProjects.style.display === 'none') {
      selectTechnologies.style.display = 'none';
      selectBio.style.display = 'none';
      selectProjects.style.display = 'block';
    } else {
      selectTechnologies.style.display = 'none';
      selectBio.style.display = 'none';
      selectProjects.style.display = 'block';
    }
  };

  const addListeners = () => {
    document.body.addEventListener('click', (e) => {
      if (e.target.id === 'Technologies') {
        technologyDisplayed();
      } else if (e.target.id === 'Bio') {
        bioDisplayed();
      } else if (e.target.id === 'Projects') {
        projectsDisplayed();
      }
      // } else if (e.target.id === 'Home') {
      //   if (selectBio.style.display === 'none' || selectTechnologies.style.display === 'none') {
      //     selectTechnologies.style.display = 'block';
      //     selectBio.style.display = 'block';
      //     selectProjects.style.display = 'block';
      //   }
      // }
    });
  };

  printProjects();
  addListeners();
};

export default { init };
