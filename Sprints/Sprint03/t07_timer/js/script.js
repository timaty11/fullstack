class Timer {
  stopCount;
  
  constructor(id, delay, counter) {
    this.title = id;
    this.delay = delay;
    this.stopCount = counter;
  }

  tick = function(obj) {
    console.log("Timer " + obj.title + " Tick! | cycles left " + obj.stopCount + ")");
    obj.stopCount--;
    
    if (obj.stopCount < 0) {
      console.log("Timer " + obj.title + " stopped");
      clearInterval(id);
    }
  }

  start = function() {
    console.log("Timer " + this.title + " stareted (delay=" + this.delay + ", stopCount=" + this.stopCount + ")");
    id = setInterval(this.tick, this.delay, this);
  }

  stop() {
    clearInterval(id);
  }
}


let id;

function runTimer(id, delay, counter) {
  let timer = new Timer(id, delay, counter);
  timer.start();
}
