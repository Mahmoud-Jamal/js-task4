// var signUpName = document.getElementById('signup-name')
// // var signUpGender = Array.from(document.getElementsByName('gender'))
// var signUpEmail = document.getElementById('signup-email')
// var signUpPass = document.getElementById('signup-pass')
// var btnSignup = document.getElementById('signup')
// var done = document.getElementById('done')
// var notDone = document.getElementById('not-done')
// var notValid = document.getElementById('not-valid')
// var exist = document.getElementById('exist')
// var ancorSignup = document.getElementById('ancor-signup')
// var emailRgx = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/

// // console.log(JSON.parse(localStorage.getItem('Emails')));


// if (localStorage.getItem('Emails') == null) {
//     var emails = []

// } else {
//     emails = JSON.parse(localStorage.getItem('Emails'))


// }





// btnSignup.addEventListener('click', function () {
//     var dataEmail = {
//         name: signUpName.value,
//         // gender: signUpGender.value,
//         email: signUpEmail.value,
//         pass: signUpPass.value,
//     }
//     // console.log(dataEmail.name.length);]

//     if (dataEmail.name.length == 0 || dataEmail.email.length == 0 || dataEmail.pass.length == 0) {
//         console.log('1');

//         done.classList.add('d-none')
//         notValid.classList.add('d-none')
//         exist.classList.add('d-none')


//         notDone.classList.remove('d-none')

//     }
//     else if (!emailRgx.test(dataEmail.email)) {
//         console.log('2');

//         done.classList.add('d-none')

//         notDone.classList.add('d-none')
//         exist.classList.add('d-none')


//         notValid.classList.remove('d-none')


//     }
//     else if (localStorage.getItem('Emails') != null) {
//         for (let i = 0; i < emails.length; i++) {
//             console.log(emails[i]);
//             if (dataEmail.email == emails[i].email) {
//                 console.log('3');

//                 notValid.classList.add('d-none')

//                 notDone.classList.add('d-none')
//                 done.classList.add('d-none')
//                 exist.classList.remove('d-none')
//                 return;



//             } else {
//                 console.log('4');
//                 exist.classList.add('d-none')

//                 notValid.classList.add('d-none')

//                 notDone.classList.add('d-none')
//                 done.classList.remove('d-none')
//                 emails.push(dataEmail)
//                 localStorage.setItem('Emails', JSON.stringify(emails))
// console.log(emails);
// setTimeout(() => {
//     location.href = './login.html'
// }, 1500);

//             }
//         }
//     } else {
//         console.log('5');
//         exist.classList.add('d-none')

//         notValid.classList.add('d-none')

//         notDone.classList.add('d-none')
//         done.classList.remove('d-none')
//         emails.push(dataEmail)
//         localStorage.setItem('Emails', JSON.stringify(emails))
// console.log(emails);
// setTimeout(() => {
//     location.href = './login.html'
// }, 1500);

//     }
// }
// )

// chat gbt refactor

const signUpName = document.getElementById('signup-name');
var signUpGender = Array.from(document.getElementsByName('gender'))

const signUpEmail = document.getElementById('signup-email');
const signUpPass = document.getElementById('signup-pass');
const btnSignup = document.getElementById('signup');
const done = document.getElementById('done');
const notDone = document.getElementById('not-done');
const notValid = document.getElementById('not-valid');
const exist = document.getElementById('exist');
const emailRgx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


let emails = JSON.parse(localStorage.getItem('Emails')) || [];


btnSignup.addEventListener('click', function () {
    const dataEmail = {
        name: signUpName.value.trim(),
        email: signUpEmail.value.trim(),
        pass: signUpPass.value.trim(),
    };
    done.classList.add('d-none');
    notDone.classList.add('d-none');
    notValid.classList.add('d-none');
    exist.classList.add('d-none');

    if (!dataEmail.name || !dataEmail.email || !dataEmail.pass) {
        notDone.classList.remove('d-none');
        return
    }

    if (!emailRgx.test(dataEmail.email)) {
        notValid.classList.remove('d-none');
        return
    }


    let emailExists = false;
    for (let i = 0; i < emails.length; i++) {
        if (emails[i].email === dataEmail.email) {
            emailExists = true;
            break;
        }
    }


    if (emailExists) {
        exist.classList.remove('d-none');
    } else {
        emails.push(dataEmail);
        localStorage.setItem('Emails', JSON.stringify(emails));

        done.classList.remove('d-none');

        setTimeout(() => {
            location.href = './index.html';
        }, 1500);
    }
});
