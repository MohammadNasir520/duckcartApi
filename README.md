# duckcartApi
# Thank You, Sir, for Giving me the opportunity to do such an amazing task. I am really greatfull to you!
### Live: https://duckcart-api-mohammadnasir520.vercel.app/


## API and convention
#### siginup api: https://duckcart-api-mohammadnasir520.vercel.app/signup
method: POST <br>
{
   "username":"nasir9",
    "password":"aaaaaa",
    "confirmpassword":"aaaaaa"
}




#### login api : https://duckcart-api-mohammadnasir520.vercel.app/login
method:POST <br>
{
   "username":"nasir2",
    "password":"aaaaaa"
}




#### paginated api: https://duckcart-api-mohammadnasir520.vercel.app/creators?page=2&limit=3
method:GET <br>


#### store donaton: https://duckcart-api-mohammadnasir520.vercel.app/donation
method:POST <br>
 {
     
        "name": "CarryMinati",
        "Fromcreator": "CarryMinati",
        "amount": 89,
        "currency": "$",
        "message": "praying for you",
        "Tocreator": "PewDiePie"
    }
    
    
#### get paritcular donation: https://duckcart-api-mohammadnasir520.vercel.app/donation
method:GET<br>
{
    "Fromcreator":"CarryMinati",
    "Tocreator":"BB Ki Vines"
}






