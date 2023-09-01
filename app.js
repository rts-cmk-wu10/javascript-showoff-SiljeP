const MYPETS = [
    {
        picture:  "/images/bucky.png",
        name: "Bucky",
        species: "hund",
        race: "Australian Shepherd",
        age: 2.8,
        favFood: ["fisk", "godbidder"]
    },
    {
        picture:  "/images/Melvin-copy.png",
        name: "Melvin",
        species: "hund",
        race: "Rottweiler",
        age: .9,
        favFood: ["tomat", "godbidder"]
    },
    {
        picture:  "/images/rambo-copy.png",
        name: "Rambo",
        species: "hund",
        race: "Fransk Bulldog og King Charles Cavalier",
        age: 11,
        favFood: ["ost", "godbidder"]
    }, {
        picture:  "/images/merlin.JPG",
        name: "Merlin",
        species: "kat",
        race: "Maine Coon",
        age: 3.6,
        favFood: ["kyllinge Hjerter", "godbidder", "plastik"]
    }, {
        picture:  "/images/ozzy-copy.png",
        name: "Ozzy",
        species: "kat",
        race: "Maine Coon",
        age: 3,
        favFood: ["fisk", "godbidder", "vådfoder"]
    }
]

//TILFÆLDIGT DYR SECTION HERUNDER
const ANIMAL_SECTION = document.querySelector(".animalSection")
const RANDOM_BUTTON = document.querySelector(".randomButton")

RANDOM_BUTTON.addEventListener("click", randomAnimal)

function randomAnimal(animal) {
    const RANDOM = Math.floor(Math.random() * MYPETS.length);
//random giver et tal mellem 0 og 1 så derfor ganges længden af arrayet på.
  
    ANIMAL_SECTION.innerHTML = `
        <img class="animalPicture" src="${MYPETS[RANDOM].picture}">
        <h2 class="animalName">${MYPETS[RANDOM].name}</h2>
        <span class="animalAge">${MYPETS[RANDOM].age} år gammel</span>
        <p class="animalText">${MYPETS[RANDOM].name} er en ${MYPETS[RANDOM].species} af racen ${MYPETS[RANDOM].race}. Som elsker at spise ${MYPETS[RANDOM].favFood.join(', ')}</p>
        `
}

// SØG SECTION HERUNDER


