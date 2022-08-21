let movies = ['FORCING_1', 'FORCING_2', 'FORCING_3', 'FORCING_4', 'FORCING_5'];
let current = 'FORCING_1';

let element = document.getElementsByClassName("element");
let title = document.getElementById("title");
let info = document.getElementById("info");
let actor1 = document.getElementById("actor1");
let actor2 = document.getElementById("actor2");
let actor3 = document.getElementById("actor3");
let actor4 = document.getElementById("actor4");
let actor5 = document.getElementById("actor5");
let description = document.getElementById("description");
let image = document.getElementById("imageSource");

function zootopia() {
    if(current == "FORCING_1") {
        return;
    } else {
        current = "FORCING_1";
        update();
    }
}


function sing() {
    if (current == "FORCING_2") {
        return;
    } else {
        current = "FORCING_2";
        update();
    }
}


function shazam() {
    if (current == "FORCING_3") {
        return;
    } else {
        current = "FORCING_3";
        update();
    }
}


function balto() {
    if (current == "FORCING_4") {
        return;
    } else {
        current = "FORCING_4";
        update();
    }
}


function zootopiaplus() {
    if (current == "FORCING_5") {
        return;
    } else {
        current = "FORCING_5";
        update();
    }
}

function update() {
    if (current === movies[0]) {
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#97B3DA";
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '10px';
            element[i].style.borderBottomLeftRadius = '10px';
        }

        document.getElementById('FORCING_1').style.borderLeft = 'solid 3.9px #b6d5ff';
        document.getElementById('FORCING_1').style.borderTopLeftRadius = '2px';
        document.getElementById('FORCING_1').style.borderBottomLeftRadius = '2px';
        title.innerText = "FORCING 1"
        info.innerHTML = "PG &nbsp;&nbsp;&#124&nbsp;&nbsp; 1h 46min &nbsp;&nbsp;&#124&nbsp;&nbsp; Animation, Adventure, Comedy &nbsp;&nbsp;&#124&nbsp;&nbsp; 16 March 2001 (USA)";
        actor1.innerText = "Paul Walker";
        actor2.innerText = "ViN DIESEL";
        actor3.innerText = "Michelle Rodriguez";
        actor4.innerText = "Matt Schulze";
        actor5.innerText = "Rick Yun";
        description.innerText = "His name is Brian and he is a turbo and nitro fanatic. His goal is to be accepted into the auto gang of the legendary Dominic Toretto, champion of dangerous and illegal street racing. But that's only part of the truth... Brian is also a cop on a mission to gain the confidence of Toretto, who is suspected of being involved in daring trailer robberies, carried out right off the bat.        ";
        crossfade("assets/images/1.png");
    } else if (current === movies[1]){
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#0C8ACA";
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '10px';
            element[i].style.borderBottomLeftRadius = '10px';
        }

        document.getElementById('FORCING_2').style.borderLeft = 'solid 3.9px #284791';
        document.getElementById('FORCING_2').style.borderTopLeftRadius = '2px';
        document.getElementById('FORCING_2').style.borderBottomLeftRadius = '2px';
        title.innerText = "FORCING 2"
        info.innerHTML = "PG &nbsp;&nbsp;&#124&nbsp;&nbsp; 1h 47min &nbsp;&nbsp;&#124&nbsp;&nbsp; Animation, Comedy, Family &nbsp;&nbsp;&#124&nbsp;&nbsp; 21 December 2003 (USA)";
        actor1.innerText = "Paul Walker";
        actor2.innerText = "Tyrese Gibson";
        actor3.innerText = "Eva Mendes";
        actor4.innerText = "Cole Hauser";
        actor5.innerText = "Tom Barry";
        description.innerText = "Former police officer Brian O'Conner, along with his partner Roman Pierce, are going to transport a large amount of  money of the famous mafia Carter Verona as his henchmen. But in fact, this job is only a front for Brian, who, along with secret agent Monica Fuentes, must catch a dodgy criminal...        .";
        crossfade("assets/images/2.png")
    } else if(current === movies[2]){
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#C13128";
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '10px';
            element[i].style.borderBottomLeftRadius = '10px';
        }

        document.getElementById('FORCING_3').style.borderLeft = 'solid 3.9px #2B0908';
        document.getElementById('FORCING_3').style.borderTopLeftRadius = '2px';
        document.getElementById('FORCING_3').style.borderBottomLeftRadius = '2px';
        title.innerText = "FORCING 3"
        info.innerHTML = "PG-13 &nbsp;&nbsp;&#124&nbsp;&nbsp; 2h 12min &nbsp;&nbsp;&#124&nbsp;&nbsp; Action, Adventure, Comedy &nbsp;&nbsp;&#124&nbsp;&nbsp; 5 April 2019 (USA)";
        actor1.innerText = "Lucas Black";
        actor2.innerText = "Bow Wow";
        actor3.innerText = "Sang Keng";
        actor4.innerText = "Brian Tee";
        actor5.innerText = "Natalie Kelly";
        description.innerText = "Sean Boswell is a lonely guy who wants to be seen as a street racing pro. He recklessly chases through the streets of the city, trying to escape from the hardships of life and making enemies among the local authorities. When Sean faces jail, he is sent away from sin to his father, a professional military man who serves at a military base in Japan.        .";
        crossfade("assets/images/3.png");
    } else if(current === movies[3]){
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#367995";
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '10px';
            element[i].style.borderBottomLeftRadius = '10px';
        }

        document.getElementById('FORCING_4').style.borderLeft = 'solid 3.9px #191C20';
        document.getElementById('FORCING_4').style.borderTopLeftRadius = '2px';
        document.getElementById('FORCING_4').style.borderBottomLeftRadius = '2px';
        title.innerText = "FORCING 4"
        info.innerHTML = "G &nbsp;&nbsp;&#124&nbsp;&nbsp; 1h 48min &nbsp;&nbsp;&#124&nbsp;&nbsp; Animation, Adventure, Drama &nbsp;&nbsp;&#124&nbsp;&nbsp; 9 April 2009 (USA)";
        actor1.innerText = "Vin Diesel";
        actor2.innerText = "Paul Walker";
        actor3.innerText = "Jordana Brewster";
        actor4.innerText = "Gal Gadot";
        actor5.innerText = "John Ortiz";
        actor6.innerText = "Las Alonso";
        actor7.innerText = "Michelle Rodriguez";
        description.innerText = "When a twisted path sends fugitive Dom Toretto back to Los Angeles, a feud with agent Brian O'Conner flares up again. But the couple has a common enemy, and Dom and Brian have to conclude a truce in the hope of defeating him. Raiding convoys, digging tunnels and crossing borders, they arrive at the ideal form of vengeance - the gas pedal pressed all the way down.        ";
        crossfade("assets/images/4.png");
    } else if(current === movies[4]){
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#5AB870";
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '10px';
            element[i].style.borderBottomLeftRadius = '10px';
        }

        document.getElementById('FORCING_5').style.borderLeft = 'solid 3.9px #d36e01';
        document.getElementById('FORCING_5').style.borderTopLeftRadius = '2px';
        document.getElementById('FORCING_5').style.borderBottomLeftRadius = '2px';
        title.innerText = "FORCING 5"
        info.innerHTML = "G &nbsp;&nbsp;&#124&nbsp;&nbsp; 1h 48min &nbsp;&nbsp;&#124&nbsp;&nbsp; Animation, Adventure, Drama &nbsp;&nbsp;&#124&nbsp;&nbsp; 9 April 2011 (USA)";
        actor1.innerText = "Vin Diesel";
        actor2.innerText = "Paul Walker";
        actor3.innerText = "Jordana Brewster";
        actor4.innerText = "Gal Gadot";
        actor5.innerText = "John Ortiz";
        description.innerText = "Former police officer Brian O'Conner, along with seasoned scorcher Dominic Toretto, took a little interest in outlaw life. After Brian and Mia Toretto freed Dominic, they don't risk staying in one place for long, as they are a welcome target for a bunch of disgruntled cops. © GuideOnline";
        crossfade("assets/images/5.png");
    }
}


function crossfade(name) {
    setTimeout(() => image.classList.add("crossfade"), 200);
    setTimeout(() => image.src = name, 250);
    setTimeout(() => image.classList.remove("crossfade"), 300);
}
