const dayLabels = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
const monthLabels = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
const monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
const currentDate = new Date();

function Calendar(month, year){
    this.month = (isNaN(month) || month == null) ? currentDate.getMonth() : month;
    this.year = (isNaN(year) || year == null) ? currentDate.getFullYear() : year;
    this.html = '';
}