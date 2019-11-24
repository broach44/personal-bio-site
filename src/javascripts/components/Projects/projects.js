const init = () => {
  const projects = [
    {
      title: 'Temperature Converter',
      screenshot: './images/celsius-to-fahren1.png',
      description: 'This app converts temperatures in Fahrenheit to Celsius, or will convert temperatures in Celsius to Fahrenheit', // A good project description includes 'the what', 'the why', and 'the how'.
      technologiesUsed: 'HTML, CSS, Bootstrap, Vanilla JavaScript, Version Control with Github',
      available: true,
      url: 'https://github.com/broach44/js-temp-converter', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
      githubUrl: 'https://github.com/broach44/js-temp-converter',
    },
    {
      title: 'Cool Project',
      screenshot: 'https://www.creativeboom.com/uploads/articles/20/20c1c7520534686f227993ac0e58e70fe4b719b8_1100.jpg',
      description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
      technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
      available: false,
      url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
      githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    },
    {
      title: 'Cool Project',
      screenshot: 'https://www.creativeboom.com/uploads/articles/20/20c1c7520534686f227993ac0e58e70fe4b719b8_1100.jpg',
      description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
      technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
      available: false,
      url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
      githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    },
  ];

  const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML = toPrint;
  };

  // function to loop through the projects array and build domString
  const createProjectCards = (projectsArr) => {
    // Build string of projects
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
    // add logic to only show the project on the page if it has a value of true in the available property

    // print to div called projectsPage
    printToDom('projectsPage', domString);
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
      } else if (e.target.id === 'Home') {
        if (selectBio.style.display === 'none' || selectTechnologies.style.display === 'none') {
          selectTechnologies.style.display = 'block';
          selectBio.style.display = 'block';
          selectProjects.style.display = 'block';
        }
      }
    });
  };

  createProjectCards(projects);
  addListeners();
};

export default { init };
