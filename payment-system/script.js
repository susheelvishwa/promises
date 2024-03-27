const simulatePayment = (accepted) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (accepted) {
        resolve("Payment accepted!");
      } else {
        reject("Payment rejected.");
      }
    }, 1000);
  });
};

const updatePaymentUI = (message, success) => {
  const paymentBox = document.getElementById("paymentBox");
  paymentBox.innerHTML = `<div class="${
    success ? "success-message" : "failure-message"
  }">${message}</div>`;
};

simulatePayment(true)
  .then((message) => {
    updatePaymentUI(message, true);
  })
  .catch((error) => {
    updatePaymentUI(error, false);
  });