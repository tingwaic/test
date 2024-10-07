import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Diver1 from "./Diver1/Diver1.js";
import Fish from "./Fish/Fish.js";
import Crab from "./Crab/Crab.js";

const stage = new Stage({ costumeNumber: 5 });

const sprites = {
  Diver1: new Diver1({
    x: -149.5019989013672,
    y: 127,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  Fish: new Fish({
    x: 190.62783357187354,
    y: 120.1690013993078,
    direction: 138.46304096718458,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 120,
    visible: true,
    layerOrder: 2,
  }),
  Crab: new Crab({
    x: 171,
    y: -86.33332824707031,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 45.5002960555166,
    visible: true,
    layerOrder: 3,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
