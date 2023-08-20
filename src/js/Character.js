export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Parameter "Name" is invalid!');
    }
    this.name = name;
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Parameter "Type" is invalid!');
    }
    this.type = type;
  }

  health = 100;

  level = 1;

  attack = 10;

  defence = 10;

  levelUp() {
    if (this.health === 0) {
      throw new Error('Character is dead now');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
