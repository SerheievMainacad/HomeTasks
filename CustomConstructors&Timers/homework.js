/*
	используя фунцию конструктор создать часы
	свойства часов: hours, minutes, seconds, isRendered;
	методы public: render, start
	методы private: updateSeconds, updateMinutes, updateHours
	каждый из низ запускается с определенным интервалом
	и обнуляет их значение разных составляющих при достижении предела 
	* - стилизовать часы к приличному виду
	** - написать функционал часов который реализовывает поведение секундомера
*/

function Clock(){
	var time = new Date();
	/*
	берёте тз time
	this.seconds
	this.minutes
	this.hours
	*/
	//this.rendered - значение булевого типа для того, чтобы обновление времени запускалось только если часы созданы в разметке
	//описываете вид часов помещая каждую составляющую(часы,минуты,секунды)
	//в разный элемент с ид
	this.render = function(){
		document.write('<div id="clock"><span id="hours">'+this.hours+'</span></div>')
	}
	this.start = function(){
		updateHours();
	}
	function updateHours(){
		//для получения текущего значения времени уже из элемента
		var hours = document.getElementById('hours')
		//дале логику опишите сами
	}
}