class Importance {
  constructor(name) {
    this.ID = Math.floor(Math.random() * 1000).toString();
    this.name = name;
    this.count = 0;
  }

  countUp() {
    this.count += 1;
    return this.count;
  }

  changeName(name) {
    this.name = name;
  }
}

export default Importance;
