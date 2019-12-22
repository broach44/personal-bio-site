const createProjectCards = (projectsArr) => {
  let domString = '<div class="row justify-content-between">';
  for (let i = 0; i < projectsArr.length; i += 1) {
    const currentProject = projectsArr[i];
    if (currentProject.available) {
      domString += `
        <div class="project-card center card col-3">
            <h3 class="card-title">${currentProject.title}</h3>
            <img src="${currentProject.screenshot}" class="card-img-top img-fluid">
            <p class="card-text">${currentProject.description}</p>
            <p class="card-text mb-1 pb-1 text-white"><strong>Technologies:</strong>
            <p class="card-text mt-0 pt-0">${currentProject.technologiesUsed}</p>
            <div class="card-footer">
                <a class="btn btn-block" href="${currentProject.url}">Click to View - URL</a>
                <a class="btn btn-block" href="${currentProject.githubUrl}">Click to View - GitHub</a>
            </div>
        </div>
        `;
    }
  }
  domString += '</div>';
  return domString;
};

export default { createProjectCards };
