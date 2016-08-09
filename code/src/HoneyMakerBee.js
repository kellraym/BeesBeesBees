import Bee from './Bee'

/* START SOLUTION */
class HoneyMakerBee extends Bee {
  constructor() {
    super();

    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
};
/* ELSE
class HoneyMakerBee {
  // TODO..
};
END SOLUTION */

export default HoneyMakerBee;