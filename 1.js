const Cels = prompt('Введите число: ');
const Fareng = Math.floor((1.8 * Cels + 32) * 100) / 100;
alert(`Градусы Цельсия: ${Cels}, Фаренгейты: ${Fareng}`);