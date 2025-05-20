
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const agree = document.querySelector('input[name="agree"]').checked;
    const radioChecked = document.querySelector('input[name="queryType"]:checked');
    const queryInputs = document.querySelectorAll('.query-type-option input[type="text"]');

    
    if (firstName === "" || lastName === "" || email === "" || message === "") {
      alert("Please fill out all required fields.");
      e.preventDefault();
      return;
    }


    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }

    if (!radioChecked) {
      alert("Please select a query type.");
      e.preventDefault();
      return;
    }

    
    let filled = false;
    queryInputs.forEach(input => {
      if (input.value.trim() !== "") {
        filled = true;
      }
    });

    if (!filled) {
      alert("Please enter a query description.");
      e.preventDefault();
      return;
    }


    if (!agree) {
      alert("You must agree to the terms.");
      e.preventDefault();
      return;
    }
  });

