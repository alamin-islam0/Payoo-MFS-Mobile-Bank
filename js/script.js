// Login btn functionality
document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 01722930883;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href = "home.html";
  } else {
    console.log("invalid");
  }
});
