import { FishesHTML } from './fishes.js'
import { LocationsHTML } from './locations.js'
import { QuotesHTML } from './quotes.js'
import { TipsHTML } from './tips.js'

const fishesSection = document.querySelector(".fishes")
fishesSection.innerHTML = FishesHTML()

const locationsSection = document.querySelector(".locations")
locationsSection.innerHTML = LocationsHTML()

const quotesSection = document.querySelector(".quotes")
quotesSection.innerHTML = QuotesHTML()

const tipsSection = document.querySelector(".tips")
tipsSection.innerHTML = TipsHTML()
