function nextStep(step) {
  document.querySelector(".form-step.active").classList.remove("active");

  if (step === 1) {
    document.getElementById("feedbackForm2").classList.add("active");
  } else if (step === 2) {
    document.getElementById("feedbackForm3").classList.add("active");
  } else if (step === 3) {
    document.getElementById("feedbackForm4").classList.add("active");
  }
}
