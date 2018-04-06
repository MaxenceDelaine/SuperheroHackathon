const targetElement = document.getElementById('main')
const targetElement2 = document.getElementById('main2')

// Requête une URL pour récupérer UN héros
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/69.json')
.then(response => response.json())
.then(hero => {

	let durability = hero.powerstats.durability /*valeur du paramètre Durability importée depuis l'API*/
	let power = hero.powerstats.power /*valeur du paramètre Power importée depuis l'API*/
	let strength = hero.powerstats.strength /*valeur du paramètre Strength importée depuis l'API*/
	let intelligence = hero.powerstats.intelligence /*valeur du paramètre Intelligence importée depuis l'API*/
	let speed = hero.powerstats.speed /*valeur du paramètre Speed importée depuis l'API*/
	let combat = hero.powerstats.combat /*valeur du paramètre Comnbat importée depuis l'API*/


	function closeComb() {
	  result = Math.trunc(((combat * strength) / 100))
	  return result
	}

	function zoneComb() {
	  result = Math.trunc(((power * strength) / 100))
	  return result
	}

	function distComb() {
	  result = Math.trunc(((combat * power) / 100))
	  return result
	}
  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre hero contient l'objet reçu, décodé à partir du JSON.
	console.log(hero)

  // On va construire du HTML à partir de ces données
  // Par exemple, hero a des propriétés :
  //   - name qui contient le nom du super héros
  //   - work qui contient à son tour deux propriétés base et occupation
  //   - images qui contient à son tour quatre propriétés lg, md, sm, xs
  //     (des URLs vers des images)
  const html = `
	<div class="row ">
		<div class="col-3 left">
		  <h2 class="heroname">${hero.name}</h2>
			<h3 class="HP">${hero.powerstats.durability *2}</h3>
		  <img alt="${hero.name}'s photo" src="${hero.images.md}" />
			<p class="specstitle"><strong>Specs:</strong></p>
			<p class="specs">Intelligence: ${hero.powerstats.intelligence}</p>
			<p class="specs">Strength: ${hero.powerstats.strength}</p>
			<p class="specs">Speed: ${hero.powerstats.speed}</p>
			<p class="specs">Durability: ${hero.powerstats.durability}</p>
			<p class="specs">Power: ${hero.powerstats.power}</p>
			<p class="specs">Combat: ${hero.powerstats.combat}</p>
		</div>
	</div>
    `
  targetElement.innerHTML = html


})

fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/213.json')
.then(response => response.json())
.then(hero2 => {

  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre hero contient l'objet reçu, décodé à partir du JSON.
	let durability = hero2.powerstats.durability /*valeur du paramètre Durability importée depuis l'API*/
	let power = hero2.powerstats.power /*valeur du paramètre Power importée depuis l'API*/
	let strength = hero2.powerstats.strength /*valeur du paramètre Strength importée depuis l'API*/
	let intelligence = hero2.powerstats.intelligence /*valeur du paramètre Intelligence importée depuis l'API*/
	let speed = hero2.powerstats.speed /*valeur du paramètre Speed importée depuis l'API*/
	let combat = hero2.powerstats.combat /*valeur du paramètre Comnbat importée depuis l'API*/


	function closeComb(){
	  result = Math.trunc(((combat * strength) / 100))
	  return result
	}

	function zoneComb(){
	  result = Math.trunc(((power * strength) / 100))
	  return result
	}

	function distComb(){
	  result = Math.trunc(((combat * power) / 100))
	  return result
	}


  // On va construire du HTML à partir de ces données
  // Par exemple, hero a des propriétés :
  //   - name qui contient le nom du super héros
  //   - work qui contient à son tour deux propriétés base et occupation
  //   - images qui contient à son tour quatre propriétés lg, md, sm, xs
  //     (des URLs vers des images)

  const html = `
		<h2 class="heroname2">${hero2.name}</h2>
		<h3 class="HP2">${hero2.powerstats.durability *2}</h3>
		<img alt="${hero2.name}'s photo" src="${hero2.images.md}" />
		<p class="specstitle"><strong>Specs:</strong></p>
		<p class="specs">Intelligence: ${hero2.powerstats.intelligence}</p>
		<p class="specs">Strength: ${hero2.powerstats.strength}</p>
		<p class="specs">Speed: ${hero2.powerstats.speed}</p>
		<p class="specs">Durability: ${hero2.powerstats.durability}</p>
		<p class="specs">Power: ${hero2.powerstats.power}</p>
		<p class="specs">Combat: ${hero2.powerstats.combat}</p>
    `
  targetElement2.innerHTML = html
})

$('.btn').click(function() {
  alert("You Win !");


});
