const list = document.getElementById('list');
const createTag = name => document.createElement(name);

const data = [
 
  {
    id: "d02",
    name: "Facilidad de contacto",
    image: '../img/home/cards/contact.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cupiditate voluptates ipsum suscipit, aspernatur eum, amet nemo architecto nihil corrupti.'
  },
  {
    id: "d03",
    name: "Variedad de servicios",
    image: '../img/home/cards/services.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cupiditate voluptates ipsum suscipit, aspernatur eum, amet nemo architecto nihil corrupti.'
  },
  {
    id: "d04",
    name: "Noticias de actualidad",
    image: '../img/home/cards/present.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cupiditate voluptates ipsum suscipit, aspernatur eum, amet nemo architecto nihil corrupti.'
  },
];

const createCard = (name, image, description) => {
  const card = createTag('div');
  card.className = 'contenedor_tarjeta';
  const cardLink = createTag('a');


  const cardFigure = createTag('figure');
  cardFigure.setAttribute('id', 'tarjeta');
  const cardImage = createTag('img');
  cardImage.className = 'frontal';
  cardImage.src = image;

  card.appendChild(cardLink);
  cardLink.appendChild(cardFigure);
  cardFigure.appendChild(cardImage);

  const cardFigcaption = createTag('figcaption');
  cardFigcaption.className = 'trasera';
  const cardTitle = createTag('h2');
  cardTitle.className = 'titulo';
  cardTitle.innerHTML = name;
  const cardHR = createTag('hr');
  const cardDescription = createTag('p');
  cardDescription.innerHTML = description;

  cardFigcaption.appendChild(cardTitle);
  cardFigcaption.appendChild(cardHR);
  cardFigcaption.appendChild(cardDescription);
  cardFigure.appendChild(cardFigcaption);

  list.appendChild(card);
};

data.map(
  ({ name, image, description }) => 
    createCard(name, image, description)
);
