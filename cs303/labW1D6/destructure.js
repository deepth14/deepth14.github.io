"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary, getDateAgo, getWeekDay, getLocalDay, getLastDayOfMonth, formatDate }; //add all of your function names here that you need for the node mocha tests


function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();

}

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}



function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) {
        day = 7;
    }

    return day;
}





function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) {
        return 'right now';
    }

    let sec = Math.floor(diff / 1000);

    if (sec < 60) {
        return sec + ' sec. ago';
    }

    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + ' min. ago';
    }

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));


    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}