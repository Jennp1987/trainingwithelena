/*eslint-env browser*/

/*Begin JQ for Accordian*/
var $;
$(function () {

    // Default
    $('.example').beefup();

    // Open single
    $('.example-opensingle').beefup({
        openSingle: true,
        stayOpen: 2
    });

    // Fade animation
    $('.example-fade').beefup({
        animation: 'fade',
        openSpeed: 400,
        closeSpeed: 400
    });

    // Scroll
    $('.example-scroll').beefup({
        scroll: true,
        scrollOffset: -10
    });

    // Self close
    $('.example-selfclose').beefup({
        selfClose: true
    });

    // Hash
    $('.example-hash').beefup({
        hash: true
    });

    // Breakpoints
    $('.example-breakpoints').beefup({
        scroll: true,
        scrollOffset: -10,
        breakpoints: [{
            breakpoint: 768,
            settings: {
                animation: 'fade',
                scroll: false
            }
        },
            {
                breakpoint: 1024,
                settings: {
                    animation: 'slide',
                    openSpeed: 800,
                    openSingle: true
                }
            }
                ]
    });

    // API Methods
    var $beefup = $('.example-api').beefup();
    $beefup.open($('#beefup'));

    // Callback
    $('.example-callbacks').beefup({
        onInit: function ($el) {
            $el.css('border-color', 'blue');
        },
        onOpen: function ($el) {
            $el.css('border-color', 'green');
        },
        onClose: function ($el) {
            $el.css('border-color', 'red');
        }
    });

    // Use HTML5 data attributes
    $('.example-data').beefup();

    // Tabs
    $('.tab__item').beefup({
        animation: '',
        openSingle: true,
        openSpeed: 0,
        closeSpeed: 0,
        onOpen: function ($el) {
            // Add active class to tabs
            $('a[href="#' + $el.attr('id') + '"]').parent().addClass(this.openClass)
                .siblings().removeClass(this.openClass);
        }
    });

    // Dropdown
    $('.dropdown').beefup({
        animation: 'fade',
        openSingle: true,
        selfClose: true
    });
});



/*Data Validation JS*/
/*
const input = document.querySelectorAll("input, select, email");
inputs.forEach(input => {
    input.addEventListener(
    "invalid",
    event => {
        input.classList.add("error");
    },
        false
    };
});
*/

/*End JQ for Accordian*/



/*Begin JS for Form Alerts*/

function showAlert() {
    "use strict";
    window.alert("Your information was received and I'll get back to you in 48 hours.");
}
/*Validates Form Inputs for General Questions*/
function varifyGeneralForm() {
    "use strict";
	/*jslint regexp: true*/
    var problem = false,
        name = document.getElementById('name').value,
        nameNotNumbRegex = /^(?![\s.]+$)[a-zA-Z\s.]*$/,
        nameError = document.getElementById('nameError'),
        phone = document.getElementById('phone').value,
        PhoneNumValid = /^[+]?(\d{1,2})?[\s.\-]?\(?\d{3}\)?[\s.\-]?\d{3}[\s.\-]?\d{4}$/,
        phoneError = document.getElementById('phoneError'),
        email = document.getElementById('email').value,
        emailValid = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\/.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        emailError = document.getElementById('emailError');
	/*jslint regexp: false*/

    /*Verify Name*/
    if (name.length === 0) {
        nameError.style.color = "red";
        problem = true;
    } else if (nameNotNumbRegex.test(name) === false) {
        nameError.style.color = "red";
        problem = true;

    } else {
        nameError.style.color = "#009fff";

    }
    /*Verify Phone Number*/
    if (phone.length === 0) {
        phoneError.style.color = "red";
        problem = true;
    } else if (PhoneNumValid.test(phone) === false) {
        phoneError.style.color = "red";
        problem = true;

    } else {
        phoneError.style.color = "#009fff";

    }
    /*Verify Email*/
    if (email.length === 0) {
        emailError.style.color = "red";
        problem = true;
    } else if (emailValid.test(email) === false) {
        emailError.style.color = "red";
        problem = true;
    } else {
        emailError.style.color = "#009fff";
    }

    if (problem) {
        return;
    }
    showAlert();

}

/*Handles All Event Listeners*/
function init() {
    "use strict";
    var submitButton = document.getElementById('submitButton'),
        submitPopupButton = document.getElementById('submitPopupButton');
    submitButton.addEventListener('click', varifyGeneralForm, false);
    submitPopupButton.addEventListener('click', showAlert, false);

}

window.addEventListener('load', init);
