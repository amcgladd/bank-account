// var userAccounts = [];
//
// function toggleSelectedAccount(newSelectedAccount) {
//   userAccounts.forEach(function(account) {
//     if (account.userName === newSelectedAccount.userName) {
//       account.isSelected = true;
//     }
//     if (account.isSelected === true) {
//       account.isSelected = false;
//     }
//   })
// }

// Business logic
function Account(name) {
  this.userName = name;
  console.log(this.userName);
  this.balance = 0;
  this.isSelected = false;
}

Account.prototype.initialDeposit = function(initialDeposit) {
  console.log(initialDeposit);
  if (isNaN(initialDeposit)) {
    initialDeposit = 0;
  }
  this.balance += initialDeposit;
}

Account.prototype.deposit = function(depositAmount) {
  if (isNaN(depositAmount)) {
    depositAmount = 0;
  }
  this.balance += depositAmount;
}

Account.prototype.withdraw = function(withdrawAmount) {
  if (isNaN(withdrawAmount)) {
    withdrawAmount = 0;
  }
  this.balance -= withdrawAmount;
}

function resetter() {
  $("#name").val("");
  $("#initial-deposit").val(0);
  $("#deposit").val(0);
  $("#withdraw").val(0);
}

// UI logic
$(document).ready(function() {
  var selectedAccount;

  $("#new-account").submit(function(event) {
    event.preventDefault();

    var userName = $("#name").val();
    var initialDeposit = parseFloat($("#initial-deposit").val());
    var newAccount = new Account(userName);
    console.log(newAccount);
    newAccount.initialDeposit(initialDeposit);

    $("#account-list").append("<li class='clickable'>" + newAccount.userName + "</li>");
    resetter();
    $(".clickable").last().click(function() {
      selectedAccount = newAccount;
      $("#current-balance").toggle();
      $(".account-name").text(newAccount.userName);
      $(".current-balance").text("Current balance is: $" + newAccount.balance);
    });

  });
  $("#deposit-and-withdraw").submit(function(event) {
    event.preventDefault();
    var depositAmount = parseInt($("#deposit").val());
    var withdrawAmount = parseInt($("#withdraw").val());
    selectedAccount.deposit(depositAmount);
    console.log(depositAmount);
    selectedAccount.withdraw(withdrawAmount);
    $(".account-name").text(selectedAccount.userName);
    $(".current-balance").text("Current balance is: $" + selectedAccount.balance);
    resetter();
});
});
