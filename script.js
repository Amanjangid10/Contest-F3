const errorMessage= document.getElementById('err');
const successMessage= document.getElementById('succ');
const signupButton= document.getElementById('btn');
const signUp= document.getElementById('signup-form');

signUp.addEventListener('submit', function (event){
        event.preventDefault();
       
        const userName= document.getElementById('name').value;
        const userEmail= document.getElementById('email').value;
        const userPassword= document.getElementById('password').value;
        const userConfirmPassword= document.getElementById('confirm-password').value;

             if(userName !== 'Aman' ){
            errorMessage.textContent='Error: Password does not match';
            }
            if(userPassword != userConfirmPassword){
                errorMessage.textContent='Error: Password does not match';
            }
            

    
            
            
            function Token(){
                var array = new Uint8Array(16); // Create an array to store 16 bytes

                // Fill the array with random values
                window.crypto.getRandomValues(array);
              
                // Convert the array to a hexadecimal string
                var hexString = Array.from(array)
                  .map(byte => byte.toString(16).padStart(2, '0'))
                  .join('');
              
                return hexString;

            }
            var accessToken = Token();


            localStorage.setItem('Token', accessToken)
            localStorage.setItem('Name', userName);
            localStorage.setItem('Email', userEmail);
            localStorage.setItem('Password', userPassword);


           successMessage.textContent= 'Successfully signed in';

           var isAuthenticated = true;

           if(isAuthenticated){
            window.location.href='/profile.html'
           }

})