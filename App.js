Array.from(document.getElementsByTagName('input')).forEach((e, i)=> {
    e.addEventListener('keyup', (el) => {
        if (e.value.length > 0) {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
        }
    })
})

// let bilist = document.getElementsByClassName('bi-list');

// bilist.addEventListener('click', () => {
//     bilist.




let bilist = document.getElementsByClassName('bi-list')[0];
let menu_bx = document.getElementById('menu_bx');
   bilist.addEventListener("click", () => {
       bilist.classList.toggle('bi-x-lg');
       menu_bx.classList.toggle('ul_active');
   });

// let bilists = document.getElementsByClassName('bi-x-lg')[0];
//    bilists.addEventListener("click", () => {
//  bilists.classList.add('bi-list');
//  bilists.classList.remove('bi-x-lg');
//     // (a == b ) ? ulli.style.display = "none" : ulli.style.display = "none";
//     alert('kk')
// });

