var logOut = document.getElementById('log-out')
var wellMass = document.getElementById('well-mass')

wellMass.innerHTML = `Welcome ${localStorage.getItem('name')}`

logOut.addEventListener('click', function () {
    localStorage.removeItem('name')
    location.href = './index.html'
})