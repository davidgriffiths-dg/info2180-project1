/* Add your JavaScript to this file */

    window.onload = function () {

        const subscribe = document.querySelectorAll('.btn');
        
       subscribe[1].addEventListener('click', function(event) {
           event.preventDefault();
           var  container = document.getElementsByClassName("message");
           if (container[0].innerHTML!=""){
               container[0].removeChild(container[0].lastElementChild);  
           }
           var email= document.getElementById("email").value;
           var x = document.createElement("x") ;
           var message="";
           var mail= " has been added to our mailing list!";
           if(email!="")
           {
                 message = document.createTextNode('Thank You! Your email address '.concat(email,mail));
      
            }else

            {
             message = document.createTextNode('Please enter a valid email address');
            }
            x.appendChild(message)
           container[0].appendChild(x);
      })
   
   
      }
