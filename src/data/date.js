let date = new Date();

let weekday = date.toLocaleString('en-us', {weekday:'long'});
let day = date.toLocaleString('en-us', {day:'numeric'});
let monthShort = date.toLocaleString('en-us', {month:'short'});
let monthLong = date.toLocaleString('en-us', {month:'long'});
let year = date.toLocaleString('en-us', {year:'numeric'});

export { weekday, day, monthShort, monthLong, year};
