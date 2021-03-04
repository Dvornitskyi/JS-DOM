//----------Функция для замены телефона и href по клику Работает много раз
//----------добавил функцию скролла в процентах и запись в Куки
const newPhoneAustraliaOnClicks = (newPhoneAustralia = "07-1111-1111") => {
    const telsx = document.querySelector('.last').children[0];
    telsx.onclick = () => {
        scrollingPercentage(); //функция скролла в процентах и запись в Куки
        telsx.href=(("tel:")+newPhoneAustralia);
        telsx.children[1].innerText = newPhoneAustralia;
 }
}
// newPhoneAustraliaOnClicks(); //для проверки раскомментировать 
                                //в () можно вписать любой номер телефона

//----------функция для замены телефона и href по клику РАБОТАЕТ ОДИН РАЗ
//----------добавил функцию скролла в процентах и запись в Куки
const newPhoneAustraliaOnClick = (newPhoneAustralia = "07-1111-1111") => {
        document.querySelector('a[href = "tel:0261888118"]').onclick = () => {
            scrollingPercentage(); //функция скролла в процентах и запись в Куки
            const tels = document.querySelectorAll('a[href = "tel:0261888118"]')
            document.querySelector('a[href = "tel:0261888118"]').href=(("tel:")+newPhoneAustralia);
            [].forEach.call(tels, function(tel){
                tel.children[1].innerText = newPhoneAustralia;
            })
     }
}
// newPhoneAustraliaOnClicks(); //для проверки раскомментировать
//--------------------------------в () можно вписать любой номер телефона

//----------Функция скролла в процентах
const scrollingPercentage = () =>{
    let name = "ScrollTracking";
    let value = 0;
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    if((window.pageYOffset)!=0){
        value=((window.pageYOffset)/(scrollHeight))*100;
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    }else{
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    }
}

//-----Записывать скролл по закрытию страницы и модальным окном ОК, Отмена
// window.onbeforeunload = () =>{
//     scrollingPercentage();
//     return "Что?";
// }

//-----Записывать скролл по закрытию страницы
// window.onunload = () =>{
//     scrollingPercentage();
// }
