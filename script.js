document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); 
       
        document.getElementById("responseMessage").innerText = 
            "Your form has been submitted successfully. We will schedule your call soon!";
        
       
        this.reset();
    });
});