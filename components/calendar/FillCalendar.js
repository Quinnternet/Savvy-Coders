export default fillCalendar

const moment = require('moment')
const currentDate = moment(); // now
const firstDate = moment(currentDate).date(1); // date of first day of month
const lastDate = moment(currentDate).endOf('month'); // date of last day of month
const startDay = moment(firstDate).day(); // day of the week of first day of month
const endDate = moment(lastDate).date(); // last date of month
const calendarCells = document.querySelectorAll('.cell'); // finds calendar cells
let dateArray = []; // fills with dates, populates grid

// does what it says!
function fillCalendar() {
    // adds the dates of the current month to dateArray
    function fillCurrent() {
        for (let i = startDay; i < endDate + startDay; i++) {
            dateArray.push(i - startDay + 1)
        }
    }
    // creates an array of dates in the previous month, slices off a number of
    // indices equal to previousEndDate minus startDay in order to find the number
    // to add to the calendar cells, then adds them to the beginning of dateArray
    function fillPrevious() {
        const previousMonth = moment(currentDate).subtract(1, 'month');
        const previousEndDate = moment(previousMonth).endOf('month').date();
        const previousArray = [];
        for (let i = 0; i < previousEndDate; i++) {
            previousArray.push(i + 1);
        }
        const toAdd = previousArray.slice(previousEndDate - startDay)
        dateArray = toAdd.concat(dateArray)
    }
    // adds the next month's dates to the end of dateArray
    // up to a maximum equalling the total remaining cells;
    // extra numbers will not render on the page
    function fillNext() {
        const nextMonth = moment(currentDate).add(1, 'month');
        const nextStartDay = nextMonth.startOf('month').day();
        for (let i = nextStartDay; i < 14; i++) {
            dateArray.push(i - nextStartDay + 1)
        }
        
    }
    // iterates across the grid, replacing the text in each cell
    // with the numbers generated by the previous functions
    function populate() {
        for (let i = 0; i < 42; i++) {
            calendarCells[i].textContent = dateArray[i];
        }
    }
    // updates the month header thing
    function monthUpdate() {
        const monthField = document.querySelector('#month');
        monthField.textContent = moment(currentDate).format('MMMM')
    }

    fillCurrent()
    fillPrevious()
    fillNext()
    populate()
    monthUpdate()
}