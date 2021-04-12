import { GetFishes } from './database.js'

export function FishesHTML() {
	const fishes = GetFishes()
	let htmlString = ""
	for (const fish of fishes) {
		htmlString += `<div class="fish">
			<div class="fish__name">${fish.name}</div>
			<div><img class="fish__image" src="${fish.image}" /></div>
			<div class="fish__length">Length (in): ${fish.length}</div>
			<div class="fish__location">Origin: ${fish.origin}</div>
			<div class="fish__food">Diet: ${fish.food}</div>
		</div>
`
	}
	return htmlString
}
