import Character from '../basic';

test('damage recieved', () => {
  const pOne = new Character('Иван', 'Лучник');
  Character.prototype.damage.call(pOne, 20);
  expect(pOne.health).toBe(88);
});

test('player is dead after 2 attacks', () => {
  const pOne = new Character('Иван', 'Лучник');
  Character.prototype.damage.call(pOne, 2000);
  expect(() => { Character.prototype.damage.call(pOne, 2000); }).toThrow();
});


test('player 1 damage recieved, player 2 not', () => {
  const pOne = new Character('Иван', 'Лучник');
  const pTwo = new Character('Степан', 'Мечник');
  Character.prototype.damage.call(pOne, 20);
  expect(pTwo.health).toBe(100);
});
