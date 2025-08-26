    const validPin = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault ();
    const bankName = document.getElementById("bank-name").value;

    const bankAccountNumber = document.getElementById("bank-acc-number").value;

    if (bankAccountNumber.length < 11) {
        alert('Please provide valid account number');
        return;
    }

    const addAmount = parseInt(document.getElementById("add-amount").value);

    const pin = parseInt(document.getElementById("add-pin").value);

    if (pin !== validPin) {
        alert('Please provide valid pin number');
        return;
    }

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText);

    const totalNewAvailableBalance = addAmount + availableBalance;

    document.getElementById("available-balance").innerText = totalNewAvailableBalance;
  });

//   Toggling feature

document.getElementById('addmoney-btn').addEventListener('click', function () {
    document.getElementById('cashout-parent').style.display = "none";
    document.getElementById('add-money-parent').style.display = "block";
});

document.getElementById('cashout-btn').addEventListener('click', function () {
    document.getElementById('cashout-parent').style.display = "block";
    document.getElementById('add-money-parent').style.display = "none";
});