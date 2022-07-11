
        //scroll up floating button
        mybutton = document.getElementById("myBtn");
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } 
          else {
            mybutton.style.display = "none";
          }
        }
        
        function topFunction() {
          document.documentElement.scrollTop = 0; 
        }
       


        //card animation pop up

        document.querySelectorAll('.containertwo img').forEach(image =>{
          image.onclick = () =>{
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
          }
        });

        document.querySelector('.popup-image span').onclick = () =>{
          document.querySelector('.popup-image').style.display = 'none';
        }

      





 
