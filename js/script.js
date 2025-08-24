// Login btn functionality
document.getElementById('login-btn')
.addEventListener('click', function (e) {
    e.preventDefault()
    const mobileNumber = 01722930883;
    const pinNumber = 1234;

    const mobileNumberValue = document
    .getElementById('mobile-number').value
    const mobileNumberValueConverted = parseInt
    (mobileNumberValue)

    const pinNumbervalue = document 
    .getElementById('pin-number').value
    const pinNumbervalueConverted = parseInt
    (pinNumbervalue)

    if (mobileNumberValueConverted === mobileNumber
        && pinNumbervalueConverted === pinNumber) {
            window.location.href="home.html"
        }
        else {
            console.log('invalid')
        }
})
