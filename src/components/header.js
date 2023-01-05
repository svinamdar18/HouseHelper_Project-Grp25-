import $ from 'jquery'

$(document).ready( () => {
    $("#inputTextBox").keypress(function (event) {
        var inputValue = event.which;
        if (!(inputValue >= 65 && inputValue <= 123) && (inputValue != 32 && inputValue != 0)) {
            event.preventDefault();
        }
        console.log(inputValue);
    })
});

$(document).ready(() => {
    $.validator.addMethod("emailonly", function (value, element) {
        return this.optional(element) || /^([a-zA-Z0-9_\-\#\]+)\@([a-zA-Z]+)\.([a-zA-Z]{2,3})$/.test(value)
    }, "Invalid Email"),

    $("#form").validate({
        rules: {
            name: { required: true },
            email: { required: true, emailonly: true },
            mobile: { required: true, digits: true, minlength: 10, maxlength: 10 },
            dob: { required: true },
            gender: { required: true },
            address: { required: true }
        },
        messages: {
            name: { required: "Name is required" },
        },
        errorClass: "invalid-feedback is-invalid",
        validClass: "is-valid",
        errorPlacement: (error, element) => {
            if (element.attr("name") == "gen")
                error.appendTo("#errorToShow")
            else if (element.attr("name") == "ch")
                error.appendTo("#cherror")
            else
                error.insertAfter(element)
        },
        highlight: function (element) {
            $(element).fadeOut(function () {
                $(element).fadeIn();
                $(element).addClass("is-invalid");
            });
        },
        submitHandler: function (event) {

            var values = {};
            $.each($('#form').serializeArray(), function (i, field) {
                values[field.name] = field.value;
            });
            let str = JSON.stringify(values)

            $("#myalert").append(`<div class="alert alert-success alert-dismissible" id="alertbox">
Form Submitted Successfully        
Data= ${str}          
<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>`)
        }
    }),

    $("#ch").click(() => {
        if ($("#ch").is(':checked'))
            $("#submit").removeAttr("disabled")
        else
            $("#submit").attr("disabled", "true")
    })
})