let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.addEventListener('resize', adjustFormLayout);

function adjustFormLayout() {
    var screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        
        document.getElementById('fullname').setAttribute('placeholder', 'Fullname');
        document.getElementById('email').setAttribute('placeholder', 'Email');
        document.getElementById('phone').setAttribute('placeholder', 'Phone');
        document.getElementById('confirmEmail').setAttribute('placeholder', 'Confirm Email');
    } else {
       
        document.getElementById('fullname').setAttribute('placeholder', 'Enter Fullname');
        document.getElementById('email').setAttribute('placeholder', 'Enter Email Address');
        document.getElementById('phone').setAttribute('placeholder', 'Enter Phone Number');
        document.getElementById('confirmEmail').setAttribute('placeholder', 'Confirm Email Address');
    }
}

adjustFormLayout();
// Function to validate the form inputs
function validateForm() {
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var confirmEmail = document.getElementById('confirmEmail').value;
    var comment = document.getElementById('comment').value;

    if (fullname.trim() === '' || email.trim() === '' || phone.trim() === '' || confirmEmail.trim() === '' || comment.trim() === '') {
        alert('Please fill in all fields');
        return false;
    }

    if (email !== confirmEmail) {
        alert('Email addresses do not match');
        return false;
    }

    return true;
}

// Function to simulate sending the message
function sendMessage() {
    var isValid = validateForm();

    if (isValid) {
        // Simulate sending the message (replace with actual backend code)
        var formData = {
            fullname: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            comment: document.getElementById('comment').value
        };

        console.log('Sending message:', formData);

        // Reset form after submission
        document.getElementById('contactForm').reset();
    }
}

// Attach event listener to the form submit button
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    sendMessage(); // Call sendMessage function
});
