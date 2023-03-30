class MySet {
  has(value: number): boolean {
    return false;
  }

  add(value: number): this {
    return this;
  }
}

class MutableSet extends MySet {
  delete(value: number): boolean {
    return false;
  }
}
