export default fillCurrent

const currentDate = new Date();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
const firstDay = new Date(year, month, 1);
const lastDay = new Date(year, month + 1, 0);
const monthStart = firstDay.getDay();
const monthEnd = lastDay.getDate();

function fillCurrent() {
    let cellIterator = ''
    const calendarCells = document.querySelectorAll('.cell');
        for (let i = monthStart; i < monthEnd + monthStart; i++) {
            cellIterator = cellIterator + i;
            calendarCells[i].textContent = i - monthStart + 1
        }
}