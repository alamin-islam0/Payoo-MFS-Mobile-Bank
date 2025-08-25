document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault ();

    const bankName = document.getElementById("bank-name").value;

    const bankAccountNumber = document.getElementById("bank-acc-number").value;

    const addAmount = parseInt(document.getElementById("add-amount").value);

    const pin = document.getElementById("add-pin").value;

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText);

    const totalNewAvailableBalance = addAmount + availableBalance;

    document.getElementById("available-balance").innerText = totalNewAvailableBalance;
  });
