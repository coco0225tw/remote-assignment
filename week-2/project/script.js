const welcome_btn = document.querySelector('.welcome_message');
const btn = document.querySelector('.read_btn');
const content = document.querySelector('.content_2');
const arrow_dir = document.querySelector('.arrow');
const nav_btn_web = document.querySelector('.tri_1');
const nav_btn_phone = document.querySelector('.tri_2');
const show_menu = document.querySelector('.menu_2');

welcome_btn.addEventListener('click', function () {
    welcome_btn.textContent = "Have a good day";
});

btn.addEventListener('click', function () {
    // content.style.display = "flex";
    // content.style.setAttribute("style");


    //按第一下新增的style值為flex(原本沒有)
    if (content.style.display === "flex"){
        btn.textContent = "Read More";
        content.style.display = "none";
        arrow_dir.style.transform = "rotate(0deg) scale(3, 2)";
        // content.style.removeAttribute("style");
    } else {
        // content.style.addAttribute("style");
        btn.textContent = "close";
        //用block排版會跑掉
        content.style.display = "flex";
        arrow_dir.style.transform = "rotate(-180deg) scale(3, 2)";
    }
});



//不設display的話會有時間差
//為什麼不能存取.trigger就好了
nav_btn_web.addEventListener('click', function () {
    // show_menu.style.display = "flex";
    show_menu.style.visibility = "visible";
    show_menu.style.transform = "translateX(-100%)";
})

nav_btn_phone.addEventListener('click', function () {
    // show_menu.style.display = "none";
    show_menu.style.visibility = "hidden";
    show_menu.style.transform = "translateX(0%)";
})