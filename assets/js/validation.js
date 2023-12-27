$(document).ready(function() {
    $('#first_form').submit(function(e) {
      e.preventDefault();
      let first_name = $('#first_name').val();
      let email = $('#email').val();
      let text = $('#text').val();

      $(".error").remove();

      if (first_name.length < 3) {
        $('#first_name').after('<span class="error">Укажите корректное имя!</span>');
        return false;
      } 
      if (email.length < 1) {
        $('#email').after('<span class="error">Укажите корректный E-mail</span>');
        return false;
      } else {
        let regEx = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        let validEmail = regEx.test(email);
        if (!validEmail) {
          $('#email').after('<span class="error">Укажите корректный E-mail</span>');
          return false;
        }
      }
      if (text.length< 8) {
        $('#text').after('<span class="error">Укажите что-то в вашем письме!(минимум 8 символов)</span>');
        return false;
      }

      $('#form__success').click();
      $('#first_form')[0].reset();
    });
    
  });