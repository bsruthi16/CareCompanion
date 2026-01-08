// Welcome message
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to CareCompanion!");
});

// Book Appointment
function bookAppointment() {
    const name = document.getElementById("patientName").value;
    const date = document.getElementById("appointmentDate").value;

    if (name === "" || date === "") {
        alert("Please fill in all appointment details.");
        return;
    }

    alert(`Appointment booked successfully!\nPatient: ${name}\nDate: ${date}`);
}

// Medication Reminder
function setReminder() {
    const medicine = document.getElementById("medicineName").value;
    const time = document.getElementById("reminderTime").value;

    if (medicine === "" || time === "") {
        alert("Please enter medicine name and time.");
        return;
    }

    alert(`Reminder set!\nMedicine: ${medicine}\nTime: ${time}`);
}


<input type="text" id="patientName" placeholder="Patient Name">
<input type="date" id="appointmentDate">
<button onclick="bookAppointment()">Book Appointment</button>

<br><br>

<input type="text" id="medicineName" placeholder="Medicine Name">
<input type="time" id="reminderTime">
<button onclick="setReminder()">Set Reminder</button>

<script src="script.js"></script>
