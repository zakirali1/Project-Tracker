
let time = $("#getmetime");

// time.text("hello world");

let today = moment().format("ddd MMMM YYYY");

time.text(today)