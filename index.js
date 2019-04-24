//VARIABLES
let ar1 = ["Girl", "Woman", "Woman", "Woman", "Woman",
  "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"
];
let ar2 = ["Imperial", "Amazing", "Spectular",
  "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro",
  "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny",
  "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue",
  "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"
];
let ar3 = ["Spider", "Laser", "Microbe", "Spectre",
  "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane",
  "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind",
  "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper",
  "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night",
  "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"
];
const ar4 = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor", "El", "Professor",
  "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"
];

//FUNCIONES
function heroinas(ar1, ar2, ar3) {
  return ar1[Math.floor(Math.random() * ar1.length)] + " " + ar2[Math.floor(Math.random() * ar2.length)] + " " + ar3[Math.floor(Math.random() * ar3.length)];
}

function heroes(ar1, ar2, ar3) {
  return ar4[Math.floor(Math.random() * ar4.length)] + " " + ar2[Math.floor(Math.random() * ar2.length)] + " " + ar3[Math.floor(Math.random() * ar3.length)];
}

//MAIN
const botonChica = document.querySelectorAll('body > main > section > div > p:nth-child(3) > a.btn.btn-primary.my-2')[0];
botonChica.addEventListener('click', function(nombreHeroina){
  document.querySelectorAll('body > main > section > div > p.lead.text-muted > a')[0].textContent = heroinas(ar1,ar2,ar3);
});

const botonChico = document.querySelectorAll('body > main > section > div > p:nth-child(3) > a.btn.btn-secondary.my-2')[0];
botonChico.addEventListener('click', function(nombreHeroe){
  document.querySelectorAll('body > main > section > div > p.lead.text-muted > a')[0].textContent = heroes(ar1,ar2,ar3);
});
