const stations = ["Airport", "Central", "Egmore", "Guindy", "Vadapalani", "Teynampet", "Washermanpet"];
const fareChart = {
    "Airport-Central": 50,
    "Airport-Egmore": 45,
    "Central-Egmore": 20,
    "Guindy-Vadapalani": 30,
    "Teynampet-Washermanpet": 40
};

function populateStations() {
    let fromSelect = document.getElementById("fromStation");
    let toSelect = document.getElementById("toStation");
    stations.forEach(station => {
        let option1 = document.createElement("option");
        option1.text = station;
        option1.value = station;
        fromSelect.add(option1);
        
        let option2 = document.createElement("option");
        option2.text = station;
        option2.value = station;
        toSelect.add(option2);
    });
}

function calculateFare() {
    let from = document.getElementById("fromStation").value;
    let to = document.getElementById("toStation").value;
    let key = `${from}-${to}`;
    let reverseKey = `${to}-${from}`;
    let fare = fareChart[key] || fareChart[reverseKey] || "Not Available";
    document.getElementById("fareResult").innerText = `Fare: ₹${fare}`;
}

window.onload = populateStations;
