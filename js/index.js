// var signInEmail = document.getElementById('signin-email')
// var signInPass = document.getElementById('signin-pass')
// var btnSignIn = document.getElementById('signin')
// var done = document.getElementById('done');
// var notDone = document.getElementById('not-done');
// var notValid = document.getElementById('not-valid');
// if (localStorage.getItem('Emails') == null) {
//     var emails = []

// } else {
//     emails = JSON.parse(localStorage.getItem('Emails'))


// }

// btnSignIn.addEventListener('click', function () {
//     done.classList.add('d-none');
//     notDone.classList.add('d-none');
//     notValid.classList.add('d-none');
//     if (signInEmail.value && signInPass.value) {
//         for (var i = 0; i < emails.length; i++) {
//             if (signInEmail.value == emails[i].email && signInPass.value == emails[i].pass) {
//                 console.log('hello');
//                 done.classList.remove('d-none');


//             }
//             else {
//                 console.log('sss');
//                 notValid.classList.remove('d-none');



//             }
//         }

//     }
//     else {
//         notDone.classList.remove('d-none');

//     }

// })

// chat gbt refactor
const signInEmail = document.getElementById('signin-email');
const signInPass = document.getElementById('signin-pass');
const btnSignIn = document.getElementById('signin');
const done = document.getElementById('done');
const notDone = document.getElementById('not-done');
const notValid = document.getElementById('not-valid');

// Retrieve stored emails from localStorage
let emails = JSON.parse(localStorage.getItem('Emails')) || [];

// Handle sign-in button click event
btnSignIn.addEventListener('click', function () {
    // Hide all messages initially
    done.classList.add('d-none');
    notDone.classList.add('d-none');
    notValid.classList.add('d-none');

    const email = signInEmail.value.trim();
    const pass = signInPass.value.trim();

    // Validate inputs
    if (!email || !pass) {
        // Show 'not done' message if email or password is missing
        notDone.classList.remove('d-none');
        return;
    }

    // Check if email and password match any existing account using for loop
    let userFound = false;

    for (let i = 0; i < emails.length; i++) {
        if (emails[i].email === email && emails[i].pass === pass) {
            userFound = true;
            done.classList.remove('d-none');
            console.log('User logged in:', emails[i]);
            console.log(emails[i].name);
            localStorage.setItem('name', emails[i].name)
            setTimeout(function () {
                location.href = './home.html'
            }, 500)

            break; // Exit loop once we find a match
        }
    }

    // If no matching user was found, show 'not valid' message
    if (!userFound) {
        notValid.classList.remove('d-none');
    }
});
