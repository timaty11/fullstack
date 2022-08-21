let h;
class Human {
  constructor() {
    this.firstName = "Wanda";
    this.lastName = "Maximoff";
    this.gender = "female";
    this.age = 28;
    this.cal = 0;
  }

  sleepFor() {
    let sec = Number(prompt("How many seconds would you like to sleep?"));
    document.getElementById("action").innerHTML = "I'm sleeping";
    setTimeout(function() { document.getElementById("action").innerHTML = "I'm awake now"; }, sec * 1000);
  }

  feed() {
    let cal = Number(document.getElementById("Calories").firstChild.nodeValue);
    document.getElementById("action").innerHTML = "Non nom nom";
    cal += 200;

    setTimeout(function(){
      if (cal < 500) {
        document.getElementById("action").innerHTML = "I'm still hungry";
      } else {
        document.getElementById("action").innerHTML = "I'm not hungry";
      }
      document.getElementById("Calories").firstChild.nodeValue = cal;
    }, 3000);
  }

  loseCalories() {
    setTimeout(function() {
      let cal = Number(document.getElementById("Calories").firstChild.nodeValue);
      cal -= 200;
      document.getElementById("Calories").firstChild.nodeValue = cal;
    }, 5000);
  }
}


function turnIntoSuperhero() {
  if(document.getElementById("Calories").firstChild.nodeValue > 500) {
    h = new Superhero;
    document.getElementById("div").id = "super";
  }
}


class Superhero extends Human {

}


h = new Human;
sleep.onclick = h.sleepFor;
feed.onclick = h.feed;
trans.onclick = turnIntoSuperhero
document.getElementById("Firstname").innerHTML = h.firstName;
document.getElementById("Lastname").innerHTML = h.lastName;
document.getElementById("Gender").innerHTML = h.gender;
document.getElementById("Age").innerHTML = h.age;
document.getElementById("Calories").innerHTML = h.cal;
