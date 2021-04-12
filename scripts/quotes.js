import { GetQuotes } from './database.js'

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


