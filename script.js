
const billingToggle = document.getElementById("billing-toggle");
const monthlyLabel = document.getElementById("monthly-label");
const yearlyLabel = document.getElementById("yearly-label");

const amounts = document.querySelectorAll(".amount");
const billingNotes = document.querySelectorAll(".billing-note");

let yearlyBilling = false;

function updatePricing() {
  amounts.forEach((amount, index) => {
    const price = yearlyBilling
      ? amount.dataset.yearly
      : amount.dataset.monthly;

    amount.textContent = price;

    billingNotes[index].textContent = yearlyBilling
      ? `Billed $${price} annually`
      : "Billed monthly";
  });

  billingToggle.setAttribute(
    "aria-checked",
    String(yearlyBilling)
  );

  billingToggle.setAttribute(
    "aria-label",
    yearlyBilling
      ? "Switch to monthly billing"
      : "Switch to yearly billing"
  );

  monthlyLabel.classList.toggle("active", !yearlyBilling);
  yearlyLabel.classList.toggle("active", yearlyBilling);
}

billingToggle.addEventListener("click", () => {
  yearlyBilling = !yearlyBilling;
  updatePricing();
});

updatePricing();
