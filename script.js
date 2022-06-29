function bookedDays() {
    // fetch http://127.0.0.1:5984/green_cottage/_design/queries/_view/checkin-checkout
    const booked = [7, 5];
    //const booked = fetch('http://127.0.0.1:5984/green_cottage/_design/queries/_view/checkin-checkout');
    return booked; 
}

document.getElementById("checkIn").innerHTML = "Check-in: " + bookedDays()[0];
document.getElementById("checkOut").innerHTML = "Check-out: " + bookedDays()[1];

fetch('http://admin:55316avz@127.0.0.1:5984/green_cottage/_design/queries/_view/checkin-checkout') 
.then(response => response.json())
.then(data => console.log(data));