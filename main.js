const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
        name: "Coco",
        color: "Black",
        specialSkill: "Burps minimally.",
        type: "dog",
        imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    }
]

const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
  }
  
const buildPetCards = () => {
    let domString = '';
  
    for (let i = 0; i < pets.length; i++) {
      domString += '<div class="pets">';
      domString += `<h3 class="petsName">${pets[i].name}</h3>`;
      domString += `<img src="${pets[i].imageUrl}" alt="Pet image">`
      domString += `<p class="petColor">${pets[i].color}</p>`
      domString += `<p class="special">${pets[i].specialSkill}</p>`
      domString += `<h5>${pets[i].type}</h5>`
      domString += '</div>';
    }
  
    printToDom('#pet-card', domString);
  }
  
const init = () => {
    buildPetCards();
  }
  
  init();