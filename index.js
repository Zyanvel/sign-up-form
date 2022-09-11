function myFunction() {
    alert("I am an alert box and I am linked to your html file!");
  }
  
  
  const form = document.querySelector(".columnRight form");
  const inputs = document.querySelectorAll(".columnRight form input");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
      if (!input.value) {
        input.parentElement.classList.add('error');
      } else {
        input.parentElement.classList.remove('error');
        if(input.id == 'email') {
          if(validateEmail(input.value)) {
            input.parentElement.classList.remove('error');
          } else {
            input.parentElement.classList.add('error');
          }
        }
      }
    });
  });

  function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  
  