// ===============================
// Toothpaste Mod for Sandboxels
// ===============================

// --- Ingredient 1: Sodium Fluoride ---
elements.sodiumfluoride = {
    name: "Sodium Fluoride",
    alias: ["NaF"],
    desc: "Active cavity-fighting salt.",
    color: "#f8f8ff",
    behavior: behaviors.POWDER,
    category: "elements",
    state: "solid",
    density: 2558,
    viscosity: 0
};

// --- Ingredient 2: Calcium Carbonate ---
elements.calciumcarbonate = {
    name: "Calcium Carbonate",
    alias: ["CaCO3", "Chalk"],
    desc: "Abrasive powder, also known as chalk.",
    color: "#e0e0e0",
    behavior: behaviors.POWDER,
    category: "elements",
    state: "solid",
    density: 2710,
    viscosity: 0
};

// --- Ingredient 3: Silica ---
elements.silica = {
    name: "Silica",
    alias: ["SiO2"],
    desc: "Abrasive mineral, used in toothpaste.",
    color: "#dddddd",
    behavior: behaviors.POWDER,
    category: "elements",
    state: "solid",
    density: 2650,
    viscosity: 0
};

// --- Ingredient 4: Glycerin ---
elements.glycerin = {
    name: "Glycerin",
    desc: "A sweet, syrupy liquid. Keeps toothpaste moist.",
    color: "#ccccff",
    behavior: behaviors.LIQUID,
    category: "elements",
    state: "liquid",
    density: 1260,
    viscosity: 1412
};

// --- Ingredient 5: Sodium Lauryl Sulfate ---
elements.sls = {
    name: "Sodium Lauryl Sulfate",
    alias: ["SLS"],
    desc: "A detergent and foaming agent.",
    color: "#fff0f0",
    behavior: behaviors.POWDER,
    category: "elements",
    state: "solid",
    density: 1000,
    viscosity: 0
};

// --- Final Product: Toothpaste ---
elements.toothpaste = {
    name: "Toothpaste",
    desc: "A paste for cleaning teeth. Contains abrasives, fluoride, and foaming agents.",
    color: "#f0fff0",
    behavior: behaviors.PASTE, // behaves like a thick goo
    category: "elements",
    state: "liquid",
    density: 1450,
    viscosity: 30000,

    breakInto: ["sodiumfluoride","calciumcarbonate","silica","glycerin","sls"],

    reactions: {
        "water": { elem1: "toothpaste", elem2: "toothpaste_water" }
    }
};

// --- Toothpaste mixed with water ---
elements.toothpaste_water = {
    name: "Toothpaste Slurry",
    desc: "Diluted toothpaste mixed with water.",
    color: "#e0fff0",
    behavior: behaviors.LIQUID,
    category: "elements",
    state: "liquid",
    density: 1200,
    viscosity: 5000
};

// ===============================
// End of Toothpaste Mod
// ===============================
