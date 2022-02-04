export class Singleton {
  static #instance: Singleton | null = null;
  private constructor() {}

  #count = 0;

  static getInstance(): Singleton {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }

    return Singleton.#instance;
  }

  increment() {
    this.#count = this.#count + 1;
  }

  decrement() {
    this.#count = this.#count - 1;
  }

  get count() {
    return this.#count;
  }
}

export class ParametricSingleton {
  #step: number;
  #count = 0;
  static #instances: Map<string, ParametricSingleton> = new Map();

  private constructor(increment: number) {
    this.#step = increment;
  }

  static getInstance(singletonName: string, step?: number) {
    if (!this.#instances.has(singletonName)) {
      const isNullOrUndefined = step === null || step === void 0;
      if (isNullOrUndefined) return null;

      this.#instances.set(singletonName, new ParametricSingleton(step!));
    }

    return this.#instances.get(singletonName);
  }

  increment() {
    this.#count = this.#count + this.#step;
  }

  decrement() {
    this.#count = this.#count - this.#step;
  }

  get count() {
    return this.#count;
  }
}
