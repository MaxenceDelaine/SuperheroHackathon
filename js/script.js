const targetElement = document.getElementById('main')

// Requête une URL pour récupérer UN héros
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/10.json')
.then(response => response.json())
.then(hero => {})


let durability = ${hero.powerstats.durability} /*valeur du paramètre Durability importée depuis l'API*/
let power = ${hero.powerstats.power} /*valeur du paramètre Power importée depuis l'API*/
let strength = ${hero.powerstats.strength} /*valeur du paramètre Strength importée depuis l'API*/
let intelligence = ${hero.powerstats.intelligence} /*valeur du paramètre Intelligence importée depuis l'API*/
let speed = ${hero.powerstats.speed} /*valeur du paramètre Speed importée depuis l'API*/
let combat = ${hero.powerstats.combat} /*valeur du paramètre Comnbat importée depuis l'API*/

let AP = calculateAP() /* création de la variable liée aux points d'attaque */
let HP = durability * 2 /* création de la variable liée aux points de vie */

/*Tableau contenant les différents modes de combat */
let combatMode = ['Close', 'Zone', 'Distance']

/*Création de la fonction permettant de calculer la valeur des points d'attaque (variable AP)*/
function calculateAP() {
  if (combatMode[0]) {
    result = Math.trunc(((combat * strength) / 100))
    return result
  }
  if (combatMode[1]) {
    result = Math.trunc(((power * strength) / 100))
    return result
  }
  if (combatMode[2]) {
    result = Math.trunc(((combat * power) / 100))
    return result
  }
}

/* Création d'une fonction correspondant à la gestion de l'attaque pendant un combat */
SHHHHIIIIIIITTTTTTTTTTTTTTT
