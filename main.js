let alertForm = document.querySelector('#alertForm');

let alertInput = document.querySelector('#alertInput');


alertForm.addEventListener('submit', function(event){
    event.preventDefault();
    alert(alertInput.value);

    alertInput.value = "";
})

//section 2

let sandwichForm = document.querySelector('#sandwichForm');
let ingredients = document.querySelectorAll('#sandwichForm .ingredients');

for(let item of ingredients){
    console.log(item);
}

sandwichForm.addEventListener('submit', function(event){
    event.preventDefault();
 
    let newStr = "";
    for(let i = 0; i < ingredients.length; i++){
        if(ingredients[i].checked === true){
            newStr += `${ingredients[i].id}, `;
        }
    }
    console.log(newStr);

    alert(`Your Sandwich Has: ${newStr}`)
    

})

//section three

let haircutForm = document.querySelector('#haircutForm');

let date = document.querySelector('#date');

let stylist = document.querySelector('#stylist');

let hairType = document.querySelector('#hairType');

let short = document.querySelector('#short');

let long = document.querySelector('#long');

haircutForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(haircutForm);

    console.log(`Your Appointment date ${date}`);
    
    if(long.checked === true){
       hairType = "Long";
    }else if(short.checked === true){
        hairType = "Short";
    }
      
    alert(`Your Appointment Is ${date.value} With stylist ${stylist.value} for ${hairType} Hair.`);

})

let createAccountForm = document.querySelector('#createAccountForm');

let user = document.querySelector('#user');

let email = document.querySelector('#email');

let password1= document.querySelector('#password1');

let password2= document.querySelector('#password2');

createAccountForm.addEventListener('submit',function(event){
    event.preventDefault();

     alert(`Your User Name ${user.value} Your User email ${email.value}`)
})


