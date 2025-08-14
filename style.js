const $ = document;
const All = document.querySelectorAll("*")

const container = $.getElementById('container');

const title = $.getElementsByClassName('left-section__title-h1');
const signinTag = $.getElementsByClassName('left-section__title-Signin-p');
const signinLink = $.getElementsByClassName('left-section__title-Signin-link');

const passInput = $.getElementById('pass-input');
const usernameInput = $.getElementById('userName-input');
const passVisibleKey = $.getElementsByClassName("svg-eye");
const validatTags = $.getElementsByClassName('pass-validation');

const remember = $.getElementById('remember');
const btn = $.getElementById('btn');

const languageKey = $.getElementById('lan-change');


// ================= Functions ==========================================================
function Enable(elem) {
    elem.classList.remove('disable');
}
function Disable(elem) {
    elem.classList.add('disable');
}

function inputValidation(){

    if(usernameInput.value.trim() === ""){
        
        validatTags[0].textContent = 'نام کاربری را وارد کنید !';
        Enable(validatTags[0])

    }else{
        Disable(validatTags[0])
    }

    

    if(passInput.value.trim() === ""){
        
        validatTags[1].textContent = 'رمز عبور را وارد کنید !';
        Enable(validatTags[1])
    }else if(passInput.value.trim().length < 8){

        validatTags[1].textContent = 'کمه آقاجان!  ( لااقل 8 کاراکتر)';
        Enable(validatTags[1])

    }else {
        validatTags[1].textContent = 'رمز نادرست است !'
        Enable(validatTags[1])

    }


}




// ================= --- =================================================================
let Arr = [...Array.from(passVisibleKey)]
Arr.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        passInput.type = passInput.type === 'text' ? 'password' : 'text';
        
        let i = (index + 1) % 2;
        Disable(elem)
        Enable(Arr[i])
    })
})





// ================= Language ==========================================================

// languageKey.addEventListener('click' , ()=>{
//     EnglishPage();
// })

function EnglishPage() {
    title[0].textContent = 'Login';
    signinTag[0].textContent = 'dont regester?'
    signinLink[0].textContent = 'signin'
    remember.textContent = 'remember me'
    btn.textContent = 'OK'
    passInput.placeholder = "password...";
    usernameInput.placeholder = "username...";

    document.querySelectorAll('*').forEach(elem => {
        elem.style.direction = 'ltr';
    });

}




// ================= Language ==========================================================

// document.addEventListener('keypress', (e) => {
//     if (e.target !== 'enter') {
//         validation();
//     }
// })


btn.addEventListener('click', inputValidation)


// alert('test')


// passValidation.textContent = 'رمز عبور را وارد کنید';
// passValidation.textContent = 'رمز نادرست است !'
// passValidation.textContent = ''
// Enable(passValidation)
