let fonDark=document.getElementById('button_tema');
let art1Color=document.getElementById('Fon');
let newsColor=document.getElementById('newsFon');
let planColor=document.getElementById('planFon');
let quoteColor=document.getElementById('quoteFon');
let lineColor=document.getElementById('lineFon');
let last_blockColor=document.getElementById('last_blockFon');
let footerColor1=document.getElementById('footerFon1');
let footerColor2=document.getElementById('footerFon2');
let footerColor3=document.getElementById('footerFon3');
let TextWhite=document.getElementsByClassName('textWhite');
let TextNews=document.getElementsByClassName('textNews');
let NewsButton=document.getElementsByClassName('newsButton');
let FooterButton=document.getElementsByClassName('footerButton');
let TextLight=document.getElementsByClassName('textLight');
let DarkFoto=document.getElementsByTagName('img');
let TitleDark=document.getElementById('titleDark');

let lightfonDark=fonDark.style.backgroundColor;
let lightart1Color=art1Color.style.backgroundColor;
let lightnewsColor=newsColor.style.backgroundColor;
let lightplanColor= planColor.style.backgroundColor;
let lightquoteColor=quoteColor.style.backgroundColor;
let lightlineColor=lineColor.style.backgroundColor;
let lightlast_blockColor=last_blockColor.style.backgroundColor;
let lightfooterColor1=footerColor1.style.backgroundColor;
let lightfooterColor2=footerColor2.style.backgroundColor;
let lightfooterColor3=footerColor3.style.backgroundColor;
let TitleLight=TitleDark.style.color;



function isDark() {
    art1Color.style.backgroundColor = '#0d0e33';
    newsColor.style.backgroundColor = '#a1737b';
    planColor.style.backgroundColor = '#535353';
    quoteColor.style.backgroundColor = '#947c74';
    lineColor.style.backgroundColor = '#5f7b9e';
    last_blockColor.style.backgroundColor = '#535353';
    footerColor1.style.backgroundColor = '#224546';
    footerColor2.style.backgroundColor = '#224546';
    footerColor3.style.backgroundColor = '#224546';
    TitleDark.style.color = '#a18ea8';
    for (let i = 0; i < TextWhite.length; i++) {
        TextWhite[i].style.color = '#c7c7c7';
    }
    for (let i = 0; i < NewsButton.length; i++) {
        NewsButton[i].style.backgroundColor = '#d8bfc1';
    }
    for (let i = 0; i < TextNews.length; i++) {
        TextNews[i].style.color = 'black';
    }
    for (let i = 0; i < FooterButton.length; i++) {
        FooterButton[i].style.backgroundColor = '#c7c7c7';
    }
    for (let i = 0; i < DarkFoto.length; i++) {
        DarkFoto[i].style.filter = "brightness(90%)";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("isDark") === "1") {
        isDark();
    }
});

function applyDarkTheme() {
    art1Color.style.backgroundColor = '#0d0e33';
    newsColor.style.backgroundColor = '#a1737b';
    planColor.style.backgroundColor = '#535353';
    quoteColor.style.backgroundColor = '#947c74';
    lineColor.style.backgroundColor = '#5f7b9e';
    last_blockColor.style.backgroundColor = '#535353';
    footerColor1.style.backgroundColor = '#224546';
    footerColor2.style.backgroundColor = '#224546';
    footerColor3.style.backgroundColor = '#224546';
    TitleDark.style.color = '#a18ea8';
    for (let i = 0; i < TextWhite.length; i++) {
        TextWhite[i].style.color = '#c7c7c7';
    }
    for (let i = 0; i < NewsButton.length; i++) {
        NewsButton[i].style.backgroundColor = '#d8bfc1';
    }
    for (let i = 0; i < TextNews.length; i++) {
        TextNews[i].style.color = 'black';
    }
    for (let i = 0; i < FooterButton.length; i++) {
        FooterButton[i].style.backgroundColor = '#c7c7c7';
    }
    for (let i = 0; i < DarkFoto.length; i++) {
        DarkFoto[i].style.filter = "brightness(90%)";
    }
}

function applyLightTheme() {
    art1Color.style.backgroundColor = lightart1Color;
    newsColor.style.backgroundColor = lightnewsColor;
    planColor.style.backgroundColor = lightplanColor;
    quoteColor.style.backgroundColor = lightquoteColor;
    lineColor.style.backgroundColor = lightlineColor;
    last_blockColor.style.backgroundColor = lightlast_blockColor;
    footerColor1.style.backgroundColor = lightfooterColor1;
    footerColor2.style.backgroundColor = lightfooterColor2;
    footerColor3.style.backgroundColor = lightfooterColor3;
    TitleDark.style.color = TitleLight;
    for (let i = 0; i < TextWhite.length; i++) {
        TextWhite[i].style.color = 'black';
    }
    for (let i = 0; i < NewsButton.length; i++) {
        NewsButton[i].style.backgroundColor = 'white';
    }
    for (let i = 0; i < TextNews.length; i++) {
        TextNews[i].style.color = "#EF3340";
    }
    for (let i = 0; i < FooterButton.length; i++) {
        FooterButton[i].style.backgroundColor = 'white';
    }
    for (let i = 0; i < TextLight.length; i++) {
        TextLight[i].style.color = 'white';
    }
    for (let i = 0; i < DarkFoto.length; i++) {
        DarkFoto[i].style.filter = "brightness(100%)";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem("isDark") === "1") {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
});

fonDark.addEventListener('click', function() {
    if (localStorage.getItem("isDark") === "1") {
        localStorage.setItem("isDark", "0");
        applyLightTheme();
    } else {
        localStorage.setItem("isDark", "1");
        applyDarkTheme();
    }
});


document.addEventListener('DOMContentLoaded', ()=>{
    const art=document.querySelector('.art_1');
    const headerAnim=document.querySelector('.headerAnim');
    const scrollItems=document.querySelectorAll('.scroll-items');

    const scrollAnimation=()=>{
        let windowCenter=(window.innerHeight/2)+window.scrollY;
        scrollItems.forEach(el=>{
            let scrollOffset=el.offsetTop+(el.offsetHeight/4);
            if (windowCenter>=scrollOffset){
                el.classList.add('animation-class');
            }else{
                el.classList.remove('animation-class');
            }
        });
    };

    const headerFixed=()=>{
        let scrollTop=window.scrollY;
        let artCenter=art.offsetHeight/2;
        if (scrollTop >=artCenter){
            headerAnim.classList.add('fixed');
            headerAnim.style.backgroundColor="black";
        }else{
            headerAnim.classList.remove('fixed');
            headerAnim.style.backgroundColor="transparent";
        }
    };
    headerFixed();
    scrollAnimation();
    window.addEventListener('scroll', ()=>{
        headerFixed();
        scrollAnimation();
    });
});