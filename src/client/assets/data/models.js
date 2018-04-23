import { BURGER_INGREDIENTS as BI } from './assets'


export const Burger = {
	name: '',
	layers: []
}

export const Layer = {
  x: 0,
  y: 0,
  ingredients: []
}


export const burger = {
  name: 'burger',
  layers: [
    {
      ingredients: [
        BI.BUN_TOP
      ]
    },
    {
      ingredients: [
        BI.PATTY,
        BI.FRIED_EGG
      ]
    },
    {
      ingredients: [
        BI.BACON,
        BI.SALAD
      ]
    },
    {
      ingredients: [
        BI.BUN_MID,
        BI.CHEESE
      ]
    },
    {
      ingredients: [
        BI.PATTY,
        BI.KETCHUP,
      ]
    },
    {
      ingredients: [
        BI.BUN_MID,
        BI.CHEESE
      ]
    },
    {
      ingredients: [
        BI.PATTY,
        BI.MUSTARD
      ]
    },
    {
      ingredients: [
        BI.BUN_MID,
        BI.CHEESE,
        BI.GERKIN,
      ]
    },
    {
      ingredients: [
        BI.PATTY,
        BI.KETCHUP,
        BI.ONION_RING
      ]
    },
    {
      ingredients: [
        BI.BUN_BOTTOM,
        BI.CHEESE
      ]
    }
  ]
}

// burger structure

// --- bun top    --- //

// --- layer      --- //
  // - burger     - //
  // - cheese     - //

// --- bun mid    --- //

// --- layer      --- //
  // - bacon     - //

// --- layer      --- //
  // - burger     - //

// --- bun bottom --- //