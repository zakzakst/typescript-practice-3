let myA = 1999;
function myB() {}

type myA = number;
interface myB {
  (): void;
}

type State = {
  [key: string]: string;
};

class StringDatabase {
  state: State = {};

  get(key: string): string | null {
    return key in this.state ? this.state[key] : null;
  }

  set(key: string, value: string): void {
    this.state[key] = value;
  }

  static from(state: State) {
    let db = new StringDatabase();
    for (let key in state) {
      db.set(key, state[key]);
    }
    return db;
  }
}
