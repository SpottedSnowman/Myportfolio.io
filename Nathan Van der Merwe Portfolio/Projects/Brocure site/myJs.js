function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");

    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;  
    expandImg.parentElement.style.display = "block";
  }


  Query(document).ready(function()
    {
        $('textarea').on("keyup" , function()
        
        {
            var count = $(this).val().length;
            var output = "Character Count: " + count;
            $('#status').text(output);

            if(count > 120)
            {
                
                document.getElementById('text').disabled="disabled";
            }
            
        });
    });



    $(document).ready(function() { 
 
 $('#myButton').click(function() {  

   $(".error").hide();
   var hasError = false;
   var registration = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   var blockmail =/^([\w-\.]+@(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;

   var emailaddressVal = $("#mail").val();
   if(emailaddressVal == '') {
     $("#mail").after('<span class="error">Please enter your email address.</span>');
     hasError = true;
   }

   else if(!registration.test(emailaddressVal)) {
     $("#mail").after('<span class="error">Enter a valid email address.</span>');
     hasError = true;
   }

   else if(!blockmail.test(emailaddressVal)) {
     $("#mail").after('<span class="error">No hotmail emails.</span>');
     hasError = true
   } 

   if(hasError == true) { return false; }

   });
});
