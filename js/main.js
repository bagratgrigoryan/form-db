
const btn = document.querySelector('.btn');
const formData = document.querySelector('#formElem');
function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert('true');
    } else alert('false')
}

function ValidPhone (phone){
    if (/[^0-9]/g.test(phone)){
        alert(true);
    }else alert(false)
}
btn.addEventListener('click' ,  ()=> {
    ValidateEmail(formData['email'].value);
    ValidPhone(formData['phone'].value);
    let data = {
        'name': formData['fName'].value,
        'lastName': formData['lName'].value,
        'email': formData['email'].value,
        'phone': formData['phone'].value
    };
    const FormFunction = async () => {
        let response = await fetch('http://localhost/gitprojectsphp/phpProject/index.php', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json());
            if (response['status'] == 'true'){
                alert("OK");
            }else alert("Fields are Required");
    };

    FormFunction();
});

