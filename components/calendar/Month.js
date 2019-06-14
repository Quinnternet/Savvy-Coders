export default monthUpdate

const currentDate = new Date();
const longMonth = { month: 'long' };

function monthUpdate() {
        const monthField = document.querySelector('#month');
        monthField.textContent = new Intl.DateTimeFormat('en-US', longMonth).format(currentDate)
    }