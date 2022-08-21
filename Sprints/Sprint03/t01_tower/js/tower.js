class Tower {
  constructor(floors, material, address) {
    super(floors, material, address);
    this.hasElevator;
    this.arcCapacity;
    this.height;
  }

  getFloorHeight() {
    return this.height / this.floors;
  }

  toString() {
    return [super.toString(), `Elevator: ${this.isElevator()}`, `Arc reactor capacity: ${this.arcCapacity}`, `Height: ${this.height}`, `Floor heigh: ${this.getFloorHeight()}`].join("\n");
  }

  isElevator() {
    if(this.hasElevator) {
      return "+";
    } else {
      return "-";
    }
  }
}
