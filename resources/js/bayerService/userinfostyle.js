let namereginon = document.getElementById('m_userinfo_updatename_region_buer');
let nameon = document.getElementById('m_userinfo_updatename_region_name');
let contentname = document.getElementById('m_userinfo_contentname');
let contentday = document.getElementById('m_userinfo_contentday');
let bday = document.getElementById('m_userinfo_updatename_region_bday');
let name1 = document.getElementById('m_userinfo_updatename_region_plfname1')
let name2 = document.getElementById('m_userinfo_updatename_region_plfname2')
let inname1 = document.getElementById('m_userinfo_updatename_region_infname1')
let inname2 = document.getElementById('m_userinfo_updatename_region_infname2')
let fname1 = document.getElementById('fname1');

namereginon.addEventListener("click", (event) => {
    namereginon.style.opacity = "0";
    namereginon.style.display = "none";
    nameon.style.opacity = "0";
    nameon.style.display = "none";
    bday.style.opacity = "0";
    bday.style.display = "none";
});

contentday.addEventListener("click", (event) => {
    namereginon.style.opacity = "1";
    namereginon.style.display = "block";
    bday.style.opacity = "1";
    bday.style.display = "block";
});

contentname.addEventListener("click", (event) => {
    namereginon.style.opacity = "1";
    namereginon.style.display = "block";
    nameon.style.opacity = "1";
    nameon.style.display = "block";
});

//이름 수정
inname1.addEventListener("blur", (event) => {
    fname1.style.border = '1px solid #858585'
    fname1.style.boxShadow = 'none'
    name1.style.bottom = '20px';
    name1.style.fontSize = '16px';
    updateNameStyle()
});

function updateNameStyle() {
    if (inname1.value.trim() !== '') {
        name1.style.bottom = '30px';
        name1.style.fontSize = '14px';
    }
}
inname1.addEventListener("focus", (event) => {
    name1.style.bottom = '30px';
    name1.style.fontSize = '14px';
    fname1.style.border = '1px solid #0071E3'
    fname1.style.boxShadow = '0px 0px 4px 0px #0071e3'
});

inname2.addEventListener("blur", (event) => {
    fname2.style.border = '1px solid #858585'
    fname2.style.boxShadow = 'none'
    name2.style.bottom = '20px';
    name2.style.fontSize = '16px';
    updateLnameStyle()
});

function updateLnameStyle() {
    if (inname2.value.trim() !== '') {
        name2.style.bottom = '30px';
        name2.style.fontSize = '14px';
    }
}
inname2.addEventListener("focus", (event) => {
    name2.style.bottom = '30px';
    name2.style.fontSize = '14px';
    fname2.style.border = '1px solid #0071E3'
    fname2.style.boxShadow = '0px 0px 4px 0px #0071e3'
});

let yregion = document.getElementById('yyyyregion');
let yinput = document.getElementById('yyyyinput');
let ytext = document.getElementById('yyyytext');
let result = document.getElementById('result')

yinput.addEventListener("blur", (event) => {
    yregion.style.border = '1px solid #858585'
    yregion.style.boxShadow = 'none'
    ytext.style.bottom = '20px';
    ytext.style.fontSize = '16px';
    result.style.opacity = '0'
    updateYyyyStyle()
});

function updateYyyyStyle() {
    if (yinput.value.trim() !== '') {
        ytext.style.bottom = '36px';
        ytext.style.fontSize = '14px';
        result.style.opacity = '1'
    }
}
yinput.addEventListener("focus", (event) => {
    ytext.style.bottom = '36px';
    ytext.style.fontSize = '14px';
    yregion.style.boxShadow = '0px 0px 4px 0px #0071e3'
    yregion.style.border = '1px solid #0071E3'
    result.style.opacity = '1'
});