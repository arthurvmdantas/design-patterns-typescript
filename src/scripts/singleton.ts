import { Singleton } from "creational/singleton";

function Run() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  instance1.increment();
  instance2.increment();

  console.log(`Counter: ${Singleton.getInstance().count}`);
}

Run();
