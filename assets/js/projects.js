const viewDetailsButtons = document.querySelectorAll('.view-details');
const modal = document.getElementById('project-modal');
const closeButton = document.getElementsByClassName('close-button')[0];
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

viewDetailsButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const project = projects[index];
    modalImage.src = project.image;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modal.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

const projects = [
  {
    image: 'images/Screenshot (1).png',
    title: 'Project 1',
    description: 'Description of Project 1'
  },
  {
    image: 'images/Screenshot (11).png',
    title: 'Project 2',
    description: 'Description of Project 2'
  },
  {
    image: 'images/Screenshot (14).png',
    title: 'Project 3',
    description: 'Description of Project 3'
  }
];