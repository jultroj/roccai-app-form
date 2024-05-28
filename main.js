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

function getQueryParams() {
  const params = {};
  window.location.search
    .substring(1)
    .split("&")
    .forEach((param) => {
      const [key, value] = param.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent(
        value.replace(/\+/g, " ")
      );
    });
  return params;
}

function prefillForm() {
  const params = getQueryParams();
  if (params["entry.1420346119"]) {
    document.querySelector('input[name="entry.1420346119"]').value =
      params["entry.1420346119"];
  }
  if (params["entry.682553374"]) {
    document.querySelector('input[name="entry.682553374"]').value =
      params["entry.682553374"];
  }
  if (params["entry.312586703"]) {
    document.querySelector('input[name="entry.312586703"]').value =
      params["entry.312586703"];
  }
}

window.onload = prefillForm;
