export const TIERS = {
	T0: 't0',
	T1: 't1',
	T2: 't2',
	T3: 't3'	
}

export const COLOURS = {
	DARK_GREY: '#343434',
	SESAMI_SEED_BG: '#b05217',
	SESAMI_SEED_FG: '#efc68f',
	BUN_MID: '#c76619',
	BUN_SHADOW: '#b05217',
	PATTY_MID: '#603914',
	PATTY_SHADOW: '#412413',
	FRIED_EGG_WHITE: '#FFF',
	FRIED_EGG_YOLK_MID: '#f9b03d',
	FRIED_EGG_YOLK_SHADOW: '#ef941d',
	CHEESE_MID: '#f9b03d',
	CHEESE_SHADOW: '#f59a25',
	SALAD_GREEN: '#85bd3b',
	TOMATO_MID: '#e52a1e',
	TOMATO_SHADOW: '#bc1818',
	BACON_SHADOW: '#8b181b',
	BACON_MID: '#cf7589',
	GERKIN_OUTER: '#889a26',
	GERKIN_SHADOW: '#b5cd0f',
	GERKIN_MID: '#a9b619',
	ONION_RING_MID: '#e1c214',
	ONION_RING_SHADOW: '#95821a',
	KETCHUP: '#e52821',
	MUSTARD: '#fbb03b'
}

export const TIER_COLOURS = {
	[TIERS.T0]: {
		bg: '#b9ecfc',
		border: '#83cfed'
	},
	[TIERS.T1]: {
		bg: '#a4cd84',
		border: '#068d38'
	},
	[TIERS.T2]: {
		bg: '#e4bc76',
		border: '#ea8001'
	},
	[TIERS.T3]: {
		bg: '#f1888b',
		border: '#a21916'
	}
}

export const BURGER_INGREDIENTS = {
	BUN_UNSLICED: 'bun_unsliced',
	BUN_TOP: 'bun_top',
	BUN_MID: 'bun_mid',
	BUN_BOTTOM: 'bun_bottom',
	PATTY: 'patty',
	CHEESE: 'cheese',
	SALAD: 'salad',
	GERKIN: 'gerkins',
	ONION_RING: 'onion_rings',
	BACON: 'bacon',
	FRIED_EGG: 'fried_egg',
	KETCHUP: 'ketchup',
	MUSTARD: 'mustard'
}

export const CARD_BURGER_INGREDIENTS_DESCRIPTIONS = {
	[BURGER_INGREDIENTS.BUN_TOP]: {
		id: 'Burger_Bun_Top',
		width: 83.88,
		height: 30,
		transform: 'matrix(1, 0, 0, -1, 2, 30)'
	},
	[BURGER_INGREDIENTS.BUN_MID]: {
		id: 'Burger_Bun_Middle',
		width: 84.46,
		height: 8.15,
		x:2
	},
	[BURGER_INGREDIENTS.BUN_BOTTOM]: {
		id: 'Burger_Bun_Bottom',
		width: 84.46,
		height: 9,
		x: 2
	},
	[BURGER_INGREDIENTS.PATTY]: {
		id: 'Burger_Patty',
		width: 88,
		height: 9.78,
	},
	[BURGER_INGREDIENTS.FRIED_EGG]: {
		id: 'Fried_Egg',
		width: 83.88,
		height: 9,
		x: 10
	},
	[BURGER_INGREDIENTS.CHEESE]: {
		id: 'Cheese',
		width: 59.4,
		height: 7.7,
		x: 15
	},
	[BURGER_INGREDIENTS.SALAD]: {
		id: 'Salad',
		width: 93,
		height: 9,
		x: 5
	},
	[BURGER_INGREDIENTS.GERKIN]: {
		id: 'Gerkin',
		width: 32.38,
		height: 5,
		transform: 'translate(0 -5)'
	},
	[BURGER_INGREDIENTS.ONION_RING]: {
		id: 'Onion_Ring',
		width: 32.38,
		height: 5,
	},
	[BURGER_INGREDIENTS.BACON]: {
		id: 'Bacon',
		width: 91,
		height: 10,
		transform: 'scale(0.96, 1)'
	},
	[BURGER_INGREDIENTS.KETCHUP]: {
		id: 'Ketchup',
		width: 92.4,
		height: 9.52,
		x: 2
	},
	[BURGER_INGREDIENTS.MUSTARD]: {
		id: 'Mustard',
		width: 92.4,
		height: 9.52,
		x: 2
	}
}


export const LAYER_HEIGHT = 30


export const PRICE_AREA = {
	DEFS: [
		``
	],
	SVG: ``
}