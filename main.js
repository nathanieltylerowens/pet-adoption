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
    },
    {
        name: "Spooky",
        color: "Brown",
        specialSkill: "Comfortable in the outdoors for up to eight hours.",
        type: "cat",
        imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
        name: "Tiger",
        color: "Black",
        specialSkill: "Can read (but cannot understand) Hebrew.",
        type: "dog",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
        name: "Oreo",
        color: "Yellow",
        specialSkill: "Able to stop chewing ice or whistling on request.",
        type: "cat",
        imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
        name: "Ginger",
        color: "Grey",
        specialSkill: "Comfortable in the outdoors for up to eight hours.",
        type: "dino",
        imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
    },
    {
        name: "Sassy",
        color: "Poop-Colored",
        specialSkill: "Adept at talking self and others out of fights.",
        type: "cat",
        imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
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
      domString += `<img src="${pets[i].imageUrl}" id="${pets[i].type}">`
      domString += `<p class="petColor">${pets[i].color}</p>`
      domString += `<p class="special">${pets[i].specialSkill}</p>`
      domString += `<h5 class="${pets[i].type}"> ${pets[i].type} </h5>`
      domString += '</div>';
    }
  
    printToDom('#pet-card', domString);
  }
  
const init = () => {
    buildPetCards();
  }
  
  init();