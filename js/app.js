const targetElement = document.getElementById('main')

// Requête une URL pour récupérer UN héros
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/' + Math.floor((Math.random() * 731) + 1) + '.json')
.then(response => response.json())
.then(hero => {

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
	<div class="row justify-content-center">
		<div class="col-3 left">
		  <h2 class="heroname">${hero.name}</h2>
		  <img alt="${hero.name}'s photo" src="${hero.images.md}" />
			<p class="specstitle"><strong>Specs:</strong></p>
			<p class="specs">Intelligence: ${hero.powerstats.intelligence}</p>
			<p class="specs">Strength: ${hero.powerstats.strength}</p>
			<p class="specs">Speed: ${hero.powerstats.speed}</p>
			<p class="specs">Durability: ${hero.powerstats.durability}</p>
			<p class="specs">Power: ${hero.powerstats.power}</p>
			<p class="specs">Combat: ${hero.powerstats.combat}</p>
		</div>
		<div class="col-3 center">
		  <img id="vsimage" src="img/vs.png" alt="vs"/>
			<a href="#" class="btn1 btn-danger">Close combat</a>
      <a href="#" class="btn2 btn-warning">Melee</a>
			<a href="#" class="btn3 btn-primary">Distance</a>
		</div>
		<div class="col-3 right">
		<h2 class="heroname">${hero.name}</h2>
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
