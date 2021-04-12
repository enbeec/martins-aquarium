import { GetTips } from './database.js'

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
