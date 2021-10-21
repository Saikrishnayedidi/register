const myForm = document.getElementById('form');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var isValid=true;
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lastnName').value;
    var date = document.getElementById('date').value;
    var phone = document.getElementById('phone').value;
    var school = document.getElementById('school').value;
    var adress = document.getElementById('adress').value;
    var email = document.getElementById('email').value;
    var table = document.getElementById('tables')
    var dynamic = document.querySelectorAll('.required')
    var error = document.querySelectorAll('.required')
    for (var i = 0; i < dynamic.length; i++) {

        error[i].parentElement.lastElementChild.innerHTML = "";
        switch (dynamic[i].dataset.validtype) {
            case 'string': var emtydata = dynamic[i].value

                if (emtydata === '') {
                    error[i].parentElement.lastElementChild.innerHTML = `please enter valid ${dynamic[i].dataset.name} `;
                   isValid=false;
                }
                else {
                    var regex = /^[a-zA-Z\s]+$/;
                    if (regex.test(emtydata) === false) {
                        error[i].parentElement.lastElementChild.innerHTML = `please enter valid ${dynamic[i].dataset.name} `;
                    }
                }
                break;
            case 'email':

                var regex = /^\S+@\S+\.\S+$/;
                if (regex.test(email) === false) {
                    error[i].parentElement.lastElementChild.innerHTML = `please enter valid ${dynamic[i].dataset.name} `;
                    isValid=false;
                }
                break;
            case 'phone':

                var regex = /^[1-9]\d{9}$/;
                if (regex.test(phone) === false) {
                    error[i].parentElement.lastElementChild.innerHTML = `please enter valid ${dynamic[i].dataset.name} `;
                    isValid=false;
                }
                break;

            case 'date':

                if (date == '') {
                    error[i].parentElement.lastElementChild.innerHTML = `please enter ${dynamic[i].dataset.name} `;
                    isValid=false;
                }
        }


    }
    document.querySelector('form').reset();


    
if(isValid){
    var row = table.insertRow();
    var firstnamecell = row.insertCell(0);
    var datecell = row.insertCell(1);
    var phonecell = row.insertCell(2);
    var schoolcell = row.insertCell(3);
    var adresscell = row.insertCell(4);
    var emailcell = row.insertCell(5);
    var finalecell = row.insertCell(6);
    const imageurl = localStorage.getItem('image')
    firstnamecell.innerHTML = firstName + ' ' + lastName;
    datecell.innerHTML = date;
    phonecell.innerHTML = phone;
    schoolcell.innerHTML = school;
    adresscell.innerHTML = adress;
    emailcell.innerHTML = email;
    finalecell.innerHTML = `<img src=${imageurl} width=100px >`

}
})


document.querySelector('#file').addEventListener('change', function () {
  debugger;
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        localStorage.setItem('image', reader.result)
    })

    reader.readAsDataURL(this.files[0]);
})



