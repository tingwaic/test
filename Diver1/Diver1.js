/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Diver1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("diver1", "./Diver1/costumes/diver1.svg", { x: 75, y: 75 }),
    ];

    this.sounds = [new Sound("pop", "./Diver1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      this.x = -161;
      for (let i = 0; i < 221; i++) {
        this.ifOnEdgeBounce();
        this.move(10);
        yield;
      }
      yield;
    }
  }
}
