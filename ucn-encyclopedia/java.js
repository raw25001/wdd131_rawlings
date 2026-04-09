const characters = [
    {
        name: "Freddy Fazbear",
        description: "He approaches from the left hall. Keep track of him on the monitor and shut the door when he is standing in the doorway. He moves faster as the building gets warmer.",
        category: "Office",
        image: "images/freddy.png"
    },
    {
        name: "Bonnie",
        description: "He shares Pirate Cove with Foxy, but whereas Foxy will hide from himself when viewed on camera, Bonnie will do the opposite, and become more agitated. View the figurine on the desk to see who is active in Pirate's Cove.",
        category: "Cameras",
        image: "images/bonnie.png"
    },
    {
        name: "Chica",
        description: "While Chica doesn't care if the music box is wound up, she can grow tired of the selection playing. When the sound of pots and pans stops, you only have a short amount of time to change the music. The Global Music Box can also soothe her.",
        category: "Cameras",
        image: "images/chica.png"
    },
    {
        name: "Foxy",
        description: "He will gradually leave Pirate's Cove if you don't check on him regularly. Once he is out, he will enter your office piece by piece.",
        category: "Cameras",
        image: "images/foxy.png"
    },
    {
        name: "Toy Freddy",
        description: "He sits in the Parts and Service room playing Five Nights With Mr. Hugs on his big screen TV. Click the cams on Toy Freddy's monitor, then be sure that the appropriate door is closed to prevent Mr. Hugs from jumpscaring him.",
        category: "Cameras",
        image: "images/toy freddy.png"
    },
    {
        name: "Toy Bonnie",
        description: "Put on your Freddy Fazbear mask quickly when he sneaks into your room to fool him and make him go away.",
        category: "Office",
        image: "images/toy bonnie.png"
    },
    {
        name: "Toy Chica",
        description: "Put on your Freddy Fazbear mask quickly when she sneaks into your room to fool her and make her go away.",
        category: "Office",
        image: "images/toy chica.png"
    },
    {
        name: "Mangle",
        description: "Unlike the other animatronics in the vents, once Mangle reaches the vent opening he will never leave. Use the vent-snare to prevent her from making it that far.",
        category: "Vents",
        image: "images/mangle.png"
    },
    {
        name: "BB",
        description: "He will try to sneak in through the side vent. Close the side vent and wait until you hear a thud indicating he is gone. If BB slips in, he will temporarily disable your flashlight.",
        category: "Vents",
        image: "images/bb.png"
    },
    {
        name: "JJ",
        description: "She will try to sneak in through the side vent. Close the side vent and wait until you hear a thud indicating she is gone. If JJ slips in, she will disable door controls temporarily.",
        category: "Vents",
        image: "images/jj.png"
    },
    {
        name: "Withered Chica",
        description: "She climbs through the air vents, but may get stuck when trying to enter your office. Use the vent-snare to prevent her from reaching the opening.",
        category: "Vents",
        image: "images/withered chica.png"
    },
    {
        name: "Withered Bonnie",
        description: "He will appear in your office poised to attack! Throw on your Freddy mask to make him leave again.",
        category: "Office",
        image: "images/withered bonnie.png"
    },
    {
        name: "Marionette",
        description: "Keep his music box wound or he will come to get you! The global music box also works against him.",
        category: "Distractions",
        image: "images/puppet.png"
    },
    {
        name: "Golden Freddy",
        description: "He will occasionally appear in your office. Throw on your Freddy mask or pull up your monitor quickly to cause him to disappear.",
        category: "Office",
        image: "images/golden freddy.png"
    },
    {
        name: "Springtrap",
        description: "He makes his way toward the vent opening embedded in the wall in front of you. When he is poised to attack you will see his face looking down at you. Close the vent door to send him away.",
        category: "Vents",
        image: "images/springtrap.png"
    },
    {
        name: "Phantom Mangle",
        description: "When you see him on your monitor, quickly close it, or he will appear in your office and create an audio disturbance.",
        category: "Cameras",
        image: "images/phantom mangle.png"
    },
    {
        name: "Phantom Freddy",
        description: "Shine your flashlight on him to cause him to fade away. If you don't, he will jumpscare you, giving time for enemies in the vents to sneak into your office. Heat causes him to appear faster.",
        category: "Office",
        image: "images/phantom freddy.png"
    },
    {
        name: "Phantom BB",
        description: "When he appears on your monitor, quickly close it or change the cam to avoid his jumpscare.",
        category: "Cameras",
        image: "images/phantom bb.png"
    },
    {
        name: "Nightmare Freddy",
        description: "When the Freddles begin to accumulate in your office, shine your flashlight on them before Freddy appears!",
        category: "Office",
        image: "images/nightmare freddy.png"
    },
    {
        name: "Nightmare Bonnie",
        description: "Buy his plush from the Prize Counter when he appears in the hallway to avoid his jumpscare. He can't be stopped by the office door.",
        category: "Cameras",
        image: "images/nightmare bonnie.png"
    },
    {
        name: "Nightmare Fredbear",
        description: "He is invisible to the cameras and can only be seen when he reaches your left doorway. Close the door on his face to send him back into the darkness!",
        category: "Office",
        image: "images/nightmare fredbear.png"
    },
    {
        name: "Nightmare",
        description: "He is invisible to the cameras and can only be seen when he reaches your right doorway. Close the door on his face to send him back into the darkness!",
        category: "Office",
        image: "images/nightmare.png"
    },
    {
        name: "Jack-O-Chica",
        description: "When the office heats up, she will appear in both halls at the same time. Close both doors to make her vanish. This won't work if the office is 100 degrees or more.",
        category: "Distractions",
        image: "images/jack o chica.png"
    },
    {
        name: "Nightmare Mangle",
        description: "Purchase his plush toy from the Prize Counter when he appears in the right hall to avoid his attack! He can't be stopped by the office door.",
        category: "Cameras",
        image: "images/nightmare mangle.png"
    },
    {
        name: "Nightmarionne",
        description: "Don't let your mouse cursor linger over Nightmarionne for too long!",
        category: "Office",
        image: "images/nightmarionne.png"
    },
    {
        name: "Nightmare BB",
        description: "When he is slumped over in your office, do not shine your light on him. When he is sitting up however, you must use your flashlight to reset him.",
        category: "Office",
        image: "images/nightmare bb.png"
    },
    {
        name: "Old Man Consequences",
        description: "Use the C button to catch a fish when his mini-game appears, otherwise he will lock your monitor for a short time.",
        category: "Office",
        image: "images/omc.png"
    },
    {
        name: "Circus Baby",
        description: "Purchase her plush toy from the Prize Counter when she appears in the right hall to avoid her attack! The office door can't stop her.",
        category: "Cameras",
        image: "images/baby.png"
    },
    {
        name: "Ballora",
        description: "She will approach from the one of the hallways. Listen for which hall she is in and shut the appropriate door.",
        category: "Office",
        image: "images/ballora.png"
    },
    {
        name: "Funtime Foxy",
        description: "Check his curtain to see when his show is set to begin, then be sure to watch his cam at that exact time to postpone the show, otherwise that is when your game will end.",
        category: "Cameras",
        image: "images/funtime foxy.png"
    },
    {
        name: "Ennard",
        description: "Difficult to see on the vent radar, he will make his way toward your office. Listen for the sound cue of squeaking metal, then close the vent.",
        category: "Vents",
        image: "images/ennard.png"
    },
    {
        name: "Trash and the Gang",
        description: "???",
        category: "Distractions",
        image: "images/trash and the gang.png"
    },
    {
        name: "Helpy",
        description: "When you see him sitting in your office, click on him quickly, otherwise he will get in your face with an airhorn, agitating sound-sensitive animatronics.",
        category: "Office",
        image: "images/helpy.png"
    },
    {
        name: "Happy Frog",
        description: "She moves through the air ducts making her way toward you. Use the audio-lure to keep her in place. She is immune to the heater.",
        category: "Ducts",
        image: "images/happy frog.png"
    },
    {
        name: "Mr. Hippo",
        description: "He makes his way toward your office using the air ducts. Use the audio-lure to hold him in place, or the heater to push him back.",
        category: "Ducts",
        image: "images/mr hippo.png"
    },
    {
        name: "Pigpatch",
        description: "He makes his way toward your office using the air ducts. Use the audio-lure to hold him in place, or the heater to push him back.",
        category: "Ducts",
        image: "images/pig patch.png"
    },
    {
        name: "Nedd Bear",
        description: "He climbs through the vent system making his way toward you. Use the audio-lure or the heater to keep him at bay.",
        category: "Ducts",
        image: "images/nedd bear.png"
    },
    {
        name: "Orville Elephant",
        description: "He makes his way toward your office through the air ducts. He isn't often fooled by the audio-lure, but can be pushed back with the heater.",
        category: "Ducts",
        image: "images/orville.png"
    },
    {
        name: "Rockstar Freddy",
        description: "He will occassionally activate and ask for five Faz-Coins. You can alternatively use the heater to cause him to malfunction.",
        category: "Office",
        image: "images/tax collector freddy.png"
    },
    {
        name: "Rockstar Bonnie",
        description: "When he appears in your office, search the cameras to find his guitar. Click the guitar to send him away.",
        category: "Cameras",
        image: "images/rockstar bonnie.png"
    },
    {
        name: "Rockstar Chica",
        description: "Check the left and right hallways, then double-click the wet-floor sign to place it on the same side as Rockstar Chica. She won't enter if the sign is in place.",
        category: "Distractions",
        image: "images/rockstar chica.png"
    },
    {
        name: "Rockstar Foxy",
        description: "When you see his parrot, click it, and Rockstar Foxy may offer you some help. This comes with risk, however.",
        category: "Office",
        image: "images/rockstar foxy.png"
    },
    {
        name: "Music Man",
        description: "Keep the noise down, or you'll begin to hear his cymbals crashing faster and faster eventually leading to a jumpscare.",
        category: "Distractions",
        image: "images/MUSIC MAN.png"
    },
    {
        name: "El Chip",
        description: "He's just here to promote his new restaurant. Close the ad when it appears.",
        category: "Distractions",
        image: "images/el chip.png"
    },
    {
        name: "Funtime Chica",
        description: "She will appear at random to distract you. There is no way to avoid her.",
        category: "Distractions",
        image: "images/funtime chica.png"
    },
    {
        name: "Molten Freddy",
        description: "He climbs in the vents, but can avoid the vent snare. Listen for his voice, then shut the vent door before he gets through.",
        category: "Vents",
        image: "images/molten freddy.png"
    },
    {
        name: "Scrap Baby",
        description: "She will appear on the opposite side of your office desk. When she moves, use a controlled shock!",
        category: "Office",
        image: "images/scrap baby.png"
    },
    {
        name: "Afton",
        description: "He will attack once per night, making a lot of noise and causing the lights to flicker before attacking. Close the right vent door to block him.",
        category: "Vents",
        image: "images/afton.png"
    },
    {
        name: "Lefty",
        description: "He becomes active from noise and heat. He is too far away from the music box to be soothed by it, but the global music box can calm him down.",
        category: "Distractions",
        image: "images/lefty.png"
    },
    {
        name: "Phone Guy",
        description: "When he calls, quickly mute him, otherwise it will create a lengthy audio disturbance. The mute button will appear in different places each time.",
        category: "Distractions",
        image: "images/phone guy.png"
    },
    {
        name: "RWQFSFASXC",
        description: "He will cause your office to become pitch black for about ten seconds. There is no way to avoid him.",
        category: "Distractions",
        image: "images/RWQFSFASXC.png"
    },
    {
        name: "Plushtrap",
        description: "He will appear on a specific screen and sit in his chair. If the player doesn't scare him out of his chair fast enough, he will jumpscare them.",
        category: "Cameras",
        image: "images/plushtrap.png"
    },
    {
        name: "Nightmare Chica",
        description: "Jaws will begin to close on the player's screen. If the player does not promptly turn on the power A/C before the jaws close, she will jumpscare the player. The further down the jaws are, the longer they take to disappear.",
        category: "Distractions",
        image: "images/nightmare chica.png"
    },
    {
        name: "Bonnet",
        description: "Like in the previous game, she will walk across the office and must be stopped by clicking on her nose.",
        category: "Office",
        image: "images/bonnet.png"
    },
    {
        name: "Minireena",
        description: "When summoned, several Minireenas will appear and block the player's view. Unlike in the previous game, the effect is temporary and the Minireenas will leave after a short time, usually about an in-game hour (45 seconds).",
        category: "Office",
        image: "images/minireenas.png"
    },
    {
        name: "Lolbit",
        description: "When summoned, Lolbit's face will appear on the screen with the words \"PLEASE STAND BY\", blocking the player's view, preventing them from using the cameras or doors, and adding about 3 bars to the noise meter. The player must type L-O-L on their keyboard to make it disappear.",
        category: "Distractions",
        image: "images/lolbit.png"
    },

];

function displayCharacters(characterList) {
    const display = document.getElementById("characterDisplay");

    if (characterList.length === 0) {
        display.innerHTML = "<p>No characters found.</p>";
        return;
    }

    display.innerHTML = characterList.map(character => `
        <div class="character">
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="">
            <p>${character.description}</p>
        </div>
    `).join("");
}


document.getElementById("searchBar").addEventListener("input", (e) => {
    const search = e.target.value.toLowerCase();

    const filtered = characters.filter(c =>
        c.name.toLowerCase().includes(search)
    );

    displayCharacters(filtered);
});

window.onload = () => {
    const freddy = characters.filter(c => c.name === "Freddy Fazbear");
    displayCharacters(freddy);
};
