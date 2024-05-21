

  document.addEventListener('DOMContentLoaded', function () {

    var form = document.querySelector('.formbold-form-wrapper form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();


      if (validateForm()) {
        form.submit();
      }
    });
ds
    function validateForm() {
      var name = document.getElementById('name').value;
      var phone = document.getElementById('phone').value;
      var age = document.getElementById('age').value;
      var email = document.getElementById('email').value;

      
      if (name.trim() === '') {
        alert('Please enter your full name');
        return false;
      }
      if (phone.trim() === '') {
        alert('Please enter your phone number');
        return false;
      }
      if (age.trim() === '') {
        alert('Please enter your age');
        return false;
      }
      if (email.trim() === '') {
        alert('Please enter your email');
        return false;
      }
      

      return true;
    }
  });
