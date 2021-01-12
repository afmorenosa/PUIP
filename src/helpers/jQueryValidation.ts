const jQueryValidationOptions = {
  errorElement: "span",
  errorPlacement: function(error, element) {
    error.addClass("invalid-feedback");
    element.closest(".form-group").append(error);
  },
  highlight: function(element, errorClass, validClass) {
    window.$(element).addClass("is-invalid");
  },
  unhighlight: function(element, errorClass, validClass) {
    window.$(element).removeClass("is-invalid");
  }
};

export default jQueryValidationOptions;
