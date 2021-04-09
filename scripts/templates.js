import { GetFishes, GetLocations, GetTips, GetQuotes } from './database.js'

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

export function QuotesHTML() {
	const quotes = GetQuotes()
	let htmlString = ""
	for (const quote of quotes) {
		htmlString += `<div class="quote">
			<span class="quote__text">${quote}</span>
		</div>
`
	}
	return htmlString
}

export function LocationsHTML() {
	const locations = GetLocations()
	let htmlString = ""
	for (const loc of locations) {
		htmlString += `<div class="location">
			<div>
				<img class="location__image" src="${loc.image}" alt="${loc.image_alt}" />
			</div>
			<div class="location__name">${loc.name}</div>
			<div class="location__fish-harvested">Native Fish: ${loc.fishes}</div>
		</div>
`
	}
	return htmlString
}

export function TipsHTML() {
	const tips = GetTips()
	let htmlString = `<h2 class="header header--tips">Tips</h2>
	<ul class="tips__list">`
	for (const tip of tips) {
		htmlString += `<li>${tip}</li>`
	}
	htmlString += "</ul>"
	return htmlString
}
