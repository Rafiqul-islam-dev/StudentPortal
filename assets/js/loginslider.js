
    $(document).ready(function(){
        $("#sendOtpShow").click(function(){
            $("#Hideregstion").fadeOut();
        });
    });

    $(document).ready(function(){
        $("#sendOtpShow").click(function(){
            $("#ShowOtp").fadeIn();
        });
    });

    $(document).ready(function(){
        $("#otpSend").click(function(){
            $("#ShowOtp").hide();
        });
    });


    $(document).ready(function(){
        $("#otpSend").click(function(){
            $("#OtpVerification").show();
        });
    });

    $(document).ready(function(){
        $("#otpSend").click(function(){
            $("#Hideregstion").fadeOut();
        });
    });
  
    $(document).ready(function(){
        $(".SubmitOtp").click(function(){
            $("#OtpVerification").hide();
        });
    });

    $(document).ready(function(){
        $(".SubmitOtp").click(function(){
            $(".generatPass").fadeIn();
        });
    });
  
    $(document).ready(function(){
        $(".forgetOtp").click(function(){
            $(".restpasswordHide").hide();
        });
    });

    $(document).ready(function(){
        $(".forgetOtp").click(function(){
            $(".restpasMessage").fadeIn();
        });
    });
  
    $(document).ready(function(){
        $("#restpassforgot").click(function(){
            $(".restpasMessage").hide();
        });
    });

    $(document).ready(function(){
        $("#restpassforgot").click(function(){
            $(".conformresetpass").fadeIn();
        });
    });
  