export default monthUpdate()

const now = new Date(Date.now());
const longMonth = { month: 'long' };

function monthUpdate() {
    window.onload = function () {
        const monthField = document.querySelector('#month');
        monthField.textContent = new Intl.DateTimeFormat('en-US', longMonth).format(now)
    }
}

// TODO: populate calendar cells with proper dates
// TODO: trigger overlay() when a calendar cell is clicked
// TODO: make appointments save and persist even when the page is closed
// TODO: allow for switching of months