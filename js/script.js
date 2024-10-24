// document.getElementById('registrationForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const firstName = document.getElementById('firstName').value.trim();
//     const lastName = document.getElementById('lastName').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const phone = document.getElementById('phone').value.trim();
//     const password = document.getElementById('password').value.trim();

//     let message = '';
//     const phonePattern = /^[0-9]{10}$/;

//     // Validation
//     if (!firstName || !lastName) {
//         message = 'First Name and Last Name are required.';
//     } else if (!validateEmail(email)) {
//         message = 'Invalid email format.';
//     } else if (!phonePattern.test(phone)) {
//         message = 'Phone number must be 10 digits.';
//     } else if (password.length < 8) {
//         message = 'Password must be at least 8 characters long.';
//     } else {
//         const formData = {
//             first_name: firstName,
//             last_name: lastName,
//             phone_number: phone,
//             email: email,
//             password: password
//         };
//         console.log(formData);
//         message = 'Form submitted successfully!';
//     }

//     document.getElementById('message').textContent = message;
// });

// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
// }


document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    let message = '';
    const phonePattern = /^[0-9]{10}$/;

    // Validation
    if (!firstName || !lastName) {
        message = 'First Name and Last Name are required.';
    } else if (!validateEmail(email)) {
        message = 'Invalid email format.';
    } else if (!phonePattern.test(phone)) {
        message = 'Phone number must be 10 digits.';
    } else if (password.length < 8) {
        message = 'Password must be at least 8 characters long.';
    } else {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phone,
            email: email,
            password: password
        };
        console.log(formData);
        message = 'Form submitted successfully!';

        document.getElementById('registrationForm').reset();
    }

    document.getElementById('message').textContent = message;
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
