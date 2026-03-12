document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let date = document.getElementById("date").value;
let visitors = document.getElementById("visitors").value;
let safari = document.getElementById("safari").value;
let message = document.getElementById("message").value;


// Form Validation

if(name.length < 3){
alert("Name must be at least 3 characters");
return;
}

if(!email.includes("@")){
alert("Enter a valid email");
return;
}

if(phone.length < 10){
alert("Enter valid phone number");
return;
}

if(!date){
alert("Please select visit date");
return;
}

if(!safari){
alert("Please select safari type");
return;
}


// Create booking object

let booking = {
name:name,
email:email,
phone:phone,
date:date,
visitors:visitors,
safari:safari,
message:message
};


// Save in Local Storage

let bookings = JSON.parse(localStorage.getItem("zooBookings")) || [];

bookings.push(booking);

localStorage.setItem("zooBookings", JSON.stringify(bookings));


// Success Message

alert("Booking submitted successfully!");


// Reset form

form.reset();

});

});