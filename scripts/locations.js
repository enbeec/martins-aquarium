import { GetLocations } from './database.js'

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
