
//Start Query string function

function getId() {
   
   var url = window.location;
   var uuids = url.toString().split("=")[1];
   $("#hiddenId").val(uuids);
   console.log(uuids);

}
getId();
//End Query string function

//Start get data of Userkey
function getkeyId(){
   let kkuuid = "57be3c2f-c444-48af-bf28-8fce03819af1";
   $("#hiddenkeyId").val(kkuuid);
  // alert(kkuuid);
  console.log(kkuuid);
}
getkeyId();

//End get data of userkey




$(function() {

   $("#signup_form").validate({
      errorPlacement: function (error, element) {
         $(element)
         .closest("form")
         .find("label[for='" + element.attr("id") + "']" )
         .append(error);


      },
      

         
      errorElement: "span",
      rules: {
         name : {
            required  : true,

            minlength : 3,
            maxlength : 50,
         },
         lastName : {
            required  : true,
            minlength : 3,
            maxlength : 50,
         },
         email: {
            required : true,
            email    : true,
            maxlength: 70,
         },
         mobile: {
            required : true,
            minlength : 10,
            maxlength: 12,
         },
         
         password: {
            required : true,
            equalTo: "#password", 

            minlength: 8,
            maxlength: 100,
         },
         confirmPass: {
            required: true,
            equalTo: "#password", 
            minlength: 8,
            maxlength:100
         },
         nrcNum:{
  
            required : true,
            maxlength: 16,
         },
         dob:{
            
            required : true,
            maxlength: 10,
         },
         gender:{
            required : true,

         },
        
      },
      messages:
        {
         gender:
          {
            required:"Please select a gender<br/>"
          }
        },
      
      submitHandler: function () {
         let formData = $("#signup_form").serialize();
         let email = $("#email").val();
         localStorage.setItem("signupEmail",email);

         $.ajax({
            url        : '/register',
            data       : formData,
            cache      : false,
            processData: false,
            method     : 'POST',
            type       : 'POST',
            success: function (_res) {
               $('#signup_form').trigger("reset");
               window.location.href = "verification";
            },
            error: function (e) {
              
               let responseText = JSON.parse(e.responseText);
               let errorConfig = {
                  title   : 'Error',
                  message : responseText.message,
                  type    : 'error'
               }
               KWACHA_MAIN.sweetAlert(errorConfig);
            }

         });

      },


   });
});