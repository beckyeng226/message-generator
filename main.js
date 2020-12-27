//Message Generator Project
//Arrays to pull strings from
const messagePieces = {
    fairytaleCreatures: ['unicorn', 'witch', 'dragon', 'mermaid', 'wizard', 'ogre', 'dwarf', 'troll', 'hobbit'],
    actions: ['frolick', 'jump', 'fly', 'swim', 'journey', 'play', 'picnic', 'conjure spells'],
    preferences: ['wants to', 'loves to', 'hates to'],
    places: ['to a castle', 'in the forest', 'in a lake', 'through caves', 'to a cottage', 'on a bridge', 'in a tree'],
}

//Choose random element from each array
let randArray = Math.floor(Math.random() * array.length)
let randCreature = fairytaleCreatures[Math.floor(Math.random() * fairytaleCreatures.length)]
let randActions = actions[Math.floor(Math.random() * actions.length)]
let randPreferences = preferences[Math.floor(Math.random() * preferences.length)]
let randPlaces = places[Math.floor(Math.random()* places.length)]

//Create random messages
let fullMessage = `Every ${randCreature} ${randPreferences} ${randActions} ${randPlaces}.`
console.log(fullMessage);