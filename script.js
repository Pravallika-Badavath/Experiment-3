function validateForm() {
  const phone = document.getElementById("phone").value;
  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    return false;
  }

  const email = document.getElementById("email").value;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Enter a valid email address.");
    return false;
  }

  const dob = document.getElementById("dob").value;
  if (new Date(dob) > new Date()) {
    alert("DOB cannot be a future date.");
    return false;
  }

  const fileInput = document.getElementById("certificate");
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
  if (!allowedExtensions.exec(fileInput.value)) {
    alert("Upload a valid certificate file (JPG, PNG, or PDF).");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}


