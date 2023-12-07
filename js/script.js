const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/patients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      phone_number: phoneNumber,
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Registrasi berhasil");
      } else {
        alert("Registrasi gagal");
      }
    })
    .catch((error) => {
      alert(`Terdapat error: ${error.message}`);
    });
});
