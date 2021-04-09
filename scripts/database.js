const database = {
	fish: [
		{
			name: "Bart",
			food: "crustaceans",
			length: 3, 
			origin: "Jamaica",
			image: "https://www.pbs.org/wnet/nature/files/2017/07/fish-1534844_1920.jpg"
		},
		{
			name: "Geraldice",
			food: "tacos",
			length: 3,
			origin: "Costa Rica",
			image: "https://tailandfur.com/wp-content/uploads/2015/06/10-Most-Colorful-Fresh-Water-Fish-6.jpg"
		}
	],
	quotes: [
		"Fish are really neat.",
		"Don't pee where you harvest.",
		"You don't collect fish; you harvest them."
	],
	locations: [
		{
			name: "Costa Rica",
			image: "http://i.huffpost.com/gen/1766922/images/o-COSTA-RICA-BEACHES-facebook.jpg",
			fishes: "Geraldice"
		},
		{
			name: "Jamaica",
			image: "http://1.bp.blogspot.com/_XW6ECtQezSg/Sm6FHVxfpGI/AAAAAAAABrM/1V9Has1AwGY/w1200-h630-p-k-no-nu/silver-sands-beach-jamaica.jpg",
			fishes: "Bart"
		},
	],
	tips: [
		"Don't let them die.",
		"Tell them you love them.",
		"Keep them in water."
	]
}

export function GetFishes() {
	return database.fish
}

export function GetQuotes() {
	return database.quotes
}

export function GetLocations() {
	return database.locations
}

export function GetTips() {
	return database.tips
}
