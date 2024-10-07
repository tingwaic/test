/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("achtergrond1", "./Stage/costumes/achtergrond1.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("Blue Sky", "./Stage/costumes/Blue Sky.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("Castle 1", "./Stage/costumes/Castle 1.png", {
        x: 480,
        y: 360,
      }),
      new Costume("Concert", "./Stage/costumes/Concert.png", {
        x: 480,
        y: 360,
      }),
      new Costume("Underwater 1", "./Stage/costumes/Underwater 1.svg", {
        x: 240,
        y: 180,
      }),
    ];

    this.sounds = [new Sound("plop", "./Stage/sounds/plop.wav")];

    this.triggers = [];
  }
}
