import { createContext } from "react";
import { createStoryItems } from "./createStories";

const wed_Niki_Beach = require.context('assets/stories/weddings/Antuan&Anna_2022_Montenegro', false, /\.(jpe?g|webp)$/);
const wed_Olga_Sergiy = require.context('assets/stories/weddings/Olga&Sergiy_2020_Ukrain', false, /\.(jpe?g|webp)$/);
const ls_Vlad_Tania = require.context('assets/stories/loveStory/Vlad&Tania_2020_Praga', false, /\.(jpe?g|webp)$/);
const ls_Sasha_Dasha = require.context('assets/stories/loveStory/Sasha&Dasha_2021_Lviv', false, /\.(jpe?g|webp)$/);
const f_Zaporizia = require.context('assets/stories/family/Viktor&Inna_2020_Kyiv', false, /\.(jpe?g|webp)$/);
const f_Kyiv = require.context('assets/stories/family/Olia&Anton_2019_Zaporizia', false, /\.(jpe?g|webp)$/);
const f_Lalesia = require.context('assets/stories/family/Lesia&Oleg_2020_Kyiv ', false, /\.(jpe?g|webp)$/);

const wedding_Contexts = [
	wed_Niki_Beach,
	wed_Olga_Sergiy];

const loveStory_Contexts = [
	ls_Vlad_Tania,
	ls_Sasha_Dasha
];
const family_Contexts = [
	f_Kyiv, f_Lalesia, f_Zaporizia
];

export const storiesData = {
	weddings: createStoryItems(wedding_Contexts, 'weddings'),
	lovestory: createStoryItems(loveStory_Contexts, 'lovestory'),
	family: createStoryItems(family_Contexts, 'family')
};

export const storiesContext = createContext();






