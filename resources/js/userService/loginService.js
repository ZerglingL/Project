var emailInput = document.getElementById('m_userLogin_2emailInput');
var emailDiv = document.getElementById('m_userLogin_2email');
var emailAsr = document.getElementById('m_userLogin_2emailAsr');
var loginEmail = document.getElementById('m_userLogin_2loginEmail')

emailAsr.addEventListener("click", (event) => {
    if (emailInput.value.trim() !== '') {
        loginPw.style.opacity = '1';
        loginEmail.style.borderRadius = '10px 10px 0px 0px'
    }
});

emailInput.addEventListener("input", (event) => {
    if (emailInput.value.trim() == '') {
        loginPw.style.opacity = '0';
        loginEmail.style.borderRadius = '10px'
    }
});

emailInput.addEventListener("blur", (event) => {
    loginEmail.style.border = '1px solid #858585'
    loginEmail.style.boxShadow = 'none'
    emailDiv.style.marginTop = '-36px';
    emailDiv.style.fontSize = '16px';
    emailAsr.style.marginTop = '18px';
    emailAsr.style.filter = 'invert(57%) sepia(0%) saturate(462%) hue-rotate(134deg) brightness(92%) contrast(90%)';
    updateEmailStyle()
});

function updateEmailStyle() {
    if (emailInput.value.trim() !== '') {
        emailDiv.style.marginTop = '-44px';
        emailDiv.style.fontSize = '10px';
        emailAsr.style.marginTop = '26px';
        emailAsr.style.filter = 'invert(28%) sepia(93%) saturate(1651%) hue-rotate(194deg) brightness(95%) contrast(107%)';
    }
}
emailInput.addEventListener("focus", (event) => {
    emailDiv.style.marginTop = '-44px';
    emailDiv.style.fontSize = '10px';
    emailAsr.style.marginTop = '26px';
    loginEmail.style.border = '1px solid #0071E3'
    loginEmail.style.boxShadow = '0px 0px 4px 0px #0071e3'
});

var pwInput = document.getElementById('m_userLogin_2pwInput')
var pwDiv = document.getElementById('m_userLogin_2pw');
var pwAsr = document.getElementById('m_userLogin_2pwAsr');
var loginPw = document.getElementById('m_userLogin_2loginPw')

pwInput.addEventListener("blur", (event) => {
    loginPw.style.border = '1px solid #858585'
    loginPw.style.boxShadow = 'none'
    pwDiv.style.marginTop = '-36px';
    pwDiv.style.fontSize = '16px';
    pwAsr.style.marginTop = '18px';
    pwAsr.style.filter = 'invert(57%) sepia(0%) saturate(462%) hue-rotate(134deg) brightness(92%) contrast(90%)';
    updatePwStyle();
});

function updatePwStyle() {
    if (pwInput.value.trim() !== '') {
        pwDiv.style.marginTop = '-44px';
        pwDiv.style.fontSize = '10px';
        pwAsr.style.marginTop = '26px';
        pwAsr.style.filter = 'invert(28%) sepia(93%) saturate(1651%) hue-rotate(194deg) brightness(95%) contrast(107%)';
    }
}
pwInput.addEventListener("focus", (event) => {
    pwDiv.style.marginTop = '-44px';
    pwDiv.style.fontSize = '10px';
    pwAsr.style.marginTop = '26px';
    loginPw.style.border = '1px solid #0071E3'
    loginPw.style.boxShadow = '0px 0px 4px 0px #0071e3'
});