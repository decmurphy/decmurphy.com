/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    var clockEl = $("#clock");
    setInterval(function () {
        setClock(clockEl);
    }, 500);
});

var setClock = function (el) {

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    var today = new Date();
    var target = new Date('2016/12/29 02:45:00 UTC');
    var distance = target - today;

    var sign = distance > 0 ? '-' : '+';
    var days = Math.floor(distance / _day);
    var hours = Math.abs(Math.floor((distance % _day) / _hour));
    var minutes = Math.abs(Math.floor((distance % _hour) / _minute));
    var seconds = Math.abs(Math.floor((distance % _minute) / _second));

    if (sign === '+') {
        days -= 1;
        hours -= 1;
        minutes -= 1;
        seconds -= 1;
    }

    if (days < 10)
        days = '0' + days;
    if (hours < 10)
        hours = '0' + hours;
    if (minutes < 10)
        minutes = '0' + minutes;
    if (seconds < 10)
        seconds = '0' + seconds;

    el.text('T' + sign + days + ':' + hours + ':' + minutes + ':' + seconds);

};