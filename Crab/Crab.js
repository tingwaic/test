/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Crab extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("crab-a", "./Crab/costumes/crab-a.svg", { x: 75, y: 75 }),
      new Costume("crab-b", "./Crab/costumes/crab-b.svg", { x: 75, y: 75 }),
    ];

    this.sounds = [new Sound("pop", "./Crab/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costume = "crab-a";
      this.size = 2;
      for (let i = 0; i < 10; i++) {
        this.size += 10;
        this.costumeNumber++;
        yield* this.wait(1);
        yield;
      }
      yield* this.wait(1);
      this.size = 22;
      yield;
    }
  }
}
