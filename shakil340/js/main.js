$(document).ready(function(){
    $.validator.addMethod("strongpassword", function(value){
        return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value);
    },"please type strong password");
    

    $("#signupForm").validate({
        rules: {
            firstname:"required",
            lastname: "required",
            email:"required",
            Message: {
                required:true,
                minlength:20,
                maxlength:100,
            },
            number: {
                required: true,
                digits: true,
                minlength:11,
                maxlength:11,
            },
            password: {
                required: true,
                minlength: 8,
                strongpassword:true,
            },
            confirm_password: {
                required: true,
                minlength: 8,
                equalTo: "#password",
                strongpassword:true,
            },
            email: {
                required: true,
                email: false,
            },
            topic: {
                required: "#newsletter:checked",
                minlength: 2
            },
            agree: "required",
            gender:{
                required:true,
            },
            check:{
                required:true,
            },
                        
            time:{
                required:true,
            }
            
        },
        highlight:function(element){
            $(element).addClass("c1");
           $(element).removeClass("c2");

        },        
        unhighlight:function(element){
            $(element).removeClass("c1");
            $(element).addClass("c2");
             
        },
        messages: {
            firstname:"Please enter your firstname",

            lastname: "Please enter your lastname",
            number: {
                required: "Please type number",
                minlength: "Your number must consist of at least 11 digit"
            },     
            Message: {
                required: "Please type message",
                minlength: "Your number must consist of at least 20 words",
                maxlength: "Your number must consist of at least 100 words"
            },
            password: {
                required: "Please type  password",
                minlength: "Your password must be at least 5 characters long"
            },            
            time: {
                required: "Please type  just time",
            },
            confirm_password: {
                required: "Please type password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy",
            topic: "Please select at least 2 topics",
            gender:{
                required:"please select your" 
            },
            check:{
                required:"please check terms"
            }
        }
    });

});

