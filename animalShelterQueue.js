class Animal {
  constructor(name, type, order) {
    this.name = name || order,
    this.type = type || null,
    this.order = order
  }
}

class AnimalQueue {

  constructor() {
    this.dogQ = [];
    this.catQ = [];
  }

  enqueue(name, type) {
    if (type === "dog") {
      let newDog = new Animal(name, type, this.getOrder());
      this.dogQ.push(newDog);
    } else if (type === "cat") {
      let newCat = new Animal(name, type, this.getOrder());
      this.catQ.push(newCat);
    } else {
      console.log("We only take dogs and cats.")
    }
  }

  dequeueDog() {
    if (this.dogQ.length < 1) return null;
    let dog = this.dogQ.shift();
    return dog
  }

  dequeueCat() {
    if (this.catQ.length < 1) return null;
    let cat = this.catQ.shift();
    return cat
  }

  dequeueAny() {
    if (this.getOrder() < 1) return null;
    let dog = this.dogQ[0];
    let cat = this.catQ[0];

    if (!dog) {
      return this.dequeueCat();
    } else if (!cat) {
      return this.dequeueDog();
    } else {
      return (dog.order < cat.order ? this.dequeueDog() : this.dequeueCat());
    }

  }

  getOrder() {
    return this.dogQ.length + this.catQ.length;
  }

}

let kaitlinShelter = new AnimalQueue();
kaitlinShelter.enqueue("Fido", "dog");
kaitlinShelter.enqueue("Roxy", "dog");
kaitlinShelter.enqueue("Pebbles", "dog");
kaitlinShelter.enqueue("Bean", "cat");
kaitlinShelter.enqueue("Louie", "cat");
console.log(kaitlinShelter);
console.log(kaitlinShelter.dequeueCat()); // Bean
console.log(kaitlinShelter.dequeueDog()); // Fido
console.log(kaitlinShelter.dequeueAny()); // Roxy
