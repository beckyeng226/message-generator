//Message Generator Project
//Arrays to pull strings from
const messagePieces = {
    fairytaleCreatures: ['unicorn ', 'witch ', 'dragon ', 'mermaid ', 'wizard ', 'ogre ', 'dwarf ', 'troll ', 'hobbit '],
    preferences: ['wants to ', 'loves to ', 'hates to '],
    actions: ['frolick ', 'jump ', 'fly ', 'swim ', 'journey ', 'play ', 'picnic ', 'conjure spells '],
    places: ['to a castle', 'in the forest', 'in a lake', 'through caves', 'to a cottage', 'on a bridge', 'in a tree'],
}

//Choose random element from each array
const randomMessage = (array) => 
  array[Math.floor(Math.random() * array.length)];

//Assemble the message pieces into the final message
const assembleMessage = () => {
    let message = "";

    for (let word in messagePieces) {
        message += randomMessage(messagePieces[word]);
    }
    console.log("Every " + message + ".");
}

assembleMessage()

