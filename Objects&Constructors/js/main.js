//1.Создайте функцию конструктор для компьютеров(Computer) 
/*Св-ва созданных экз. объектов - icon(картинка комп), type(laptop, PC...), model(e4650...), 
price(5000),quantity(3...),isAvailable(true/false),check(function)
*/
//метод  check проверяет значение quantity и если оно 0 - то isAvailable - false;
//Создаём используя эту функцию 3 экз объекта Computer


//2.создаём функцию(отдельно от конструктора конечно) register(экз.объекта как параметр), 
//которая новый екземпляр объекта будет записывать в массив Goods 
/*
на выходе - Goods = [
					{icon: '', type: '', model: '', price: 12312, quantity: 3, isAvailable: true, check: function(){}},
					{icon: '', type: '', model: '', price: 4312, quantity: 0, isAvailable: false, check: function(){}},
					]*/

//3. Создаём функцию chekAvailability, которая проходится по Goods и вызывает check на каждом check
// вызываем ее перед запуском render

/*4.Создаём функцию render для вывода в док массива goods - вывод происходив в таблицу(шапка таблицы - имена свойств)
в ячейках только значения свойств, метод не выводим, 
свойство isAvailable - выводим зеленым "В наличии" если isAvailable - true
					   выводим зеленым "Нет в наличии" если isAvailable - false*/ 