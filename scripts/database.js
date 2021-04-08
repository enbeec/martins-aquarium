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

	]
}

export function GetFishes() {
	return database.fish
}
