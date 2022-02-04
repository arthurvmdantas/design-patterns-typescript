import { Singleton } from "./singleton";
import { ParametricSingleton } from "./singleton";

describe("Singleton", () => {
  test("singleton is singleton", () => {
    expect(Singleton.getInstance()).toBe(Singleton.getInstance());
  });

  test("increment", () => {
    const s = Singleton.getInstance();
    s.increment();

    expect(Singleton.getInstance().count).toBe(1);
  });

  test("decrement", () => {
    const s = Singleton.getInstance();
    s.decrement();

    expect(s.count).toEqual(0);
  });
});

describe("ParametricSingleton", () => {
  test("singleton is singleton", () => {
    expect(ParametricSingleton.getInstance("s1", 1)).toBe(
      ParametricSingleton.getInstance("s1")
    );
  });

  test("different singletons", () => {
    ParametricSingleton.getInstance("s2", 5);

    expect(ParametricSingleton.getInstance("s1")).not.toBe(
      ParametricSingleton.getInstance("s2")
    );
  });

  test("increment", () => {
    ParametricSingleton.getInstance("s1")?.increment();

    expect(ParametricSingleton.getInstance("s1")?.count).toBe(1);
  });

  test("decrement", () => {
    ParametricSingleton.getInstance("s2")?.decrement();

    expect(ParametricSingleton.getInstance("s2")?.count).toBe(-5);
  });

  test("null instance", () => {
    expect(ParametricSingleton.getInstance("s3")).toBeNull();
  });
});
