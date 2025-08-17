// This is how to add a new mod to the game.

// Create a new Javascript file like this one.
// Add the file to the mods folder on GitHub, or host it somewhere else.
// https://github.com/R74nCom/sandboxels/tree/main/mods

// For more help with modding, check the wiki: https://sandboxels.wiki.gg/wiki/Modding_tutorial
// Or join our Discord: https://r74n.com/discord/

// To add it in the Mod Loader:
// If it is in the mods folder, you can just use the name of the file. (example_mod.js)
// If it is hosted somewhere else, you can use the full URL, including the HTTPS://.

// Adding elements:
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

elements.sodiumFlouride = {
    color: "#ffffff",
    behavior: behavior.POWDER,
    category: “powders”,
    density: 2558,
}; 

elements.calciumcarbonate = {
    name: "Calcium Carbonate",
    alias: ["CaCO3", "chalk"],
    desc: "Abrasive powder, also known as chalk.",
    color: "#e0e0e0",
    behavior: behaviors.POWDER,
    category: "elements",
    state: "solid",
    density: 2710,
    viscosity: 0
};

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

elements.glycerin = {
    name: "Glycerin",
    desc: "A sweet, syrupy liquid. Keeps toothpaste moist.",
    color: "#ccccff",
    behavior: behaviors.LIQUID,
    category: "elements",
    state: "liquid",
    density: 1260,
    viscosity: 1412 // quite thick
};

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

// Adding behavior presets:
behaviors.SELFDELETE = [
    "XX|XX|XX",
    "XX|DL|XX",
    "XX|XX|XX"
];

// Raw JavaScript behaviors:
behaviors.mud.tick = function(pixel) {
    if (tryMove(pixel, pixel.x, pixel.y+1)) {
        console.log("Moved!");
    }
    else {
        console.log("Couldn't move!")
    }
};

// Create a new tool:
elements.sand_exploder = {
    color: "#ff0000",
    tool: function(pixel) {
        if (pixel.element == "sand") {
            pixel.element = "explosion"
        }
    },
    category: "tools",
};

// Run after all mods are loaded, for cross-mod compatibility
runAfterLoad(function() {
    // Your code here
    console.log("Hello World!");
});

// Run if another mod is active
dependOn("mods/chem.js", function(){
    console.log("Hello World!");
})
// More dependency info: See dependency_test.js

// Creating eLists:
eLists.CONDIMENT = ["ketchup","melted_cheese","mayo"];
// Adding elements to eLists:
eLists.CONDIMENT.push("honey");

// Rendering: See 1.10example.js
