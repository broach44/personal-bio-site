import projectData from '../../helpers/data/projectData';
import utilities from '../../helpers/utilities';


const createProjectCards = (projectsArr) => {
  let domString = '<div class="row">';
  for (let i = 0; i < projectsArr.length; i += 1) {
    const currentProject = projectsArr[i];
    if (currentProject.available) {
      domString += `
        <div class="project-card card card-body col-lg-3">
            <h3 class="card-title">${currentProject.title}</h3>
            <img src="${currentProject.screenshot}" class="card-img-top img-fluid">
            <p class="card-text">${currentProject.description}</p>
            <p class="card-text">${currentProject.technologiesUsed}</p>
            <div class="card-body list-group">
                <a href="${currentProject.url}" class="list-group-item list-group-item-action">Click to View - URL</a> 
                <a href="${currentProject.githubUrl}" class=" list-group-item list-group-item-action">Click to View - GitHub</a>
            </div>
        </div>
        `;
    }
  }
  domString += '</div>';
  return domString;
};


const printProjects = () => {
  projectData.getProjects()
    .then((projects) => {
      const projectCards = createProjectCards(projects);
      utilities.printToDom('projectsPage', projectCards);
    })
    .catch((error) => console.error(error));
};

const init = () => {
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
      } else if (e.target.id === 'Home') {
        if (selectBio.style.display === 'none' || selectTechnologies.style.display === 'none') {
          selectTechnologies.style.display = 'block';
          selectBio.style.display = 'block';
          selectProjects.style.display = 'block';
        }
      }
    });
  };

  printProjects();
  addListeners();
};

export default { init, printProjects };
