

const projects = [
    {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },

]

const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML = toPrint;
};

//function to loop through the projects array and build domString
const createProjectCards = (projectsArr) => {
//Build string of projects
let domString = `<div class="row">`;
for (let i = 0; i < projectsArr.length; i++) {
    const currentProject = projectArr[i];
    domString += `
    <div class="project-card col">
    <h3>${currentProject.title}</h3>
    <img src="${currentProject.screenshot}">
    <p>${currentProject.description}</p>
    <p>${currentProject.technologiesUsed}</p>
    <p><a href="${currentProject.url}">Click to View - URL</a></p>
    <p><a href="${currentProject.githubUrl}">Click to View - GitHub</a></p>
    </div>
    `;
}
domString += `</div>`;
//add logic to only show the project on the page if it has a value of true in the available property

//print to div called projectsPage
printToDom('project-list', domString);
};

createProjectCards(projects);

//Call the createProjectCards(); function in an init function that runs when the project loads.