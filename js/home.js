// Add money feature

const validPin = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bankName = document.getElementById("bank-name").value;

    const bankAccountNumber = document.getElementById("bank-acc-number").value;

    if (bankAccountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }

    const addAmount = parseInt(document.getElementById("add-amount").value);

    const pin = parseInt(document.getElementById("add-pin").value);

    if (pin !== validPin) {
      alert("Please provide valid pin number");
      return;
    }

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    const totalNewAvailableBalance = addAmount + availableBalance;

    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });

//   Cash out feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {

  e.preventDefault();

  const agentNumber = document.getElementById("agent-number").value;

  if (agentNumber.length < 11) {
    alert("Please provide valid agent account number");
    return;
  }

  const cashOutAmount = parseInt(document.getElementById("cashout-amount").value);

  const availableBalance = parseInt(document.getElementById('available-balance').innerText);
  
  const totalNewAvailableBalance = availableBalance - cashOutAmount;

  document.getElementById('available-balance').innerText = totalNewAvailableBalance;

  const cashOutPin = parseInt(document.getElementById("cashout-pin").value);

  if (cashOutPin !== validPin) {
    alert("Please provide valid pin number");
    return;
  }
  
});

//   Toggling feature

document.getElementById("addmoney-btn").addEventListener("click", function () {
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cashout-btn").addEventListener("click", function () {
  document.getElementById("cashout-parent").style.display = "block";
  document.getElementById("add-money-parent").style.display = "none";
});
