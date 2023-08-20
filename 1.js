const fulldate = new Date();
let day = fulldate.getDay();
console.log(fulldate.getDay());
elem = document.getElementById('day_of_week');
switch (day) {

    case 0:

        elem.innerHTML = ('<span>Sunday</span>');
        break;
    case 1:

        elem.innerHTML = ('<span>Monday</span>');
        break;
    case 2:

        elem.innerHTML = ("<span>Tuesday</span>");
        break;
    case 3:

        elem.innerHTML = ('<span>Wednesday</span>');
        break;
    case 4:

        elem.innerHTML = ('<span>Rhursday</span>');
        break;
    case 5:

        elem.innerHTML = ('<span>Friday</span>');
        break;
    case 6:
        elem.innerHTML = ('<span>saturday</span>');
        break;
}

clock = document.getElementById('current_time');
clock.innerHTML =  fulldate.getHours() + ":" + fulldate.getMinutes() + ":" +fulldate.getSeconds();
