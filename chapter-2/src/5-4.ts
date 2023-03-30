// type Food = {
//   calories: number;
//   tasty: boolean;
// };

// type Sushi = Food & {
//   salty: boolean;
// };

// type Cake = Food & {
//   sweet: boolean;
// };

interface Food {
  calories: number;
  tasty: boolean;
}

interface Sushi extends Food {
  salty: boolean;
}

interface Cake extends Food {
  sweet: boolean;
}

interface Animal {
  readonly name: string;
  eat(food: string): void;
  sleep(hours: number): void;
}

interface Feline {
  meow(): void;
}

class Cat implements Animal, Feline {
  name = "Whiskers";

  eat(food: string): void {
    console.log("Ate som", food, ". Mmm!");
  }

  sleep(hours: number): void {
    console.log("Slept for", hours, "hours");
  }

  meow() {
    console.info("Meow");
  }
}
