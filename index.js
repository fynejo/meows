class Meows {
    constructor(name, color) {
      this.name = name || 'Meowster';
      this.color = color || 'Calico';
      this.energyLevel = 100;
    }
  
    meow() {
      if (this.energyLevel > 0) {
        console.log(`${this.name} the Kitty says Meow!`);
        this.energyLevel -= 10;
      } else {
        console.log(`${this.name} is too tired to meow.`);
      }
      this.displayEnergy();
    }
  
    nap() {
      console.log(`${this.name} the Kitty is taking a catnap.`);
      this.energyLevel = 100;
      this.displayEnergy();
    }
  
    displayEnergy() {
      console.log(`${this.name}'s energy level: ${this.energyLevel}`);
    }
  }
  
  // Example usage
  const fluffyMeow = new Meows('Fluffster', 'Gray');
  const playfulMeow = new Meows('Playfulpaws', 'Tabby');
  
  fluffyMeow.meow();
  playfulMeow.nap();
  