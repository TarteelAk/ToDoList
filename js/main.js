let addTobutton = document.getElementById('addToDo');
let toDocontainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addTobutton.addEventListener('click' , function(){
    var par = document.createElement('p');/*انشاء فراغ للمهمة */
    par.innerText = inputField.value;
    toDocontainer.appendChild(par);
    inputField.value="";/* بتخلي مربع المهمة فاضي*/
    par.addEventListener('click' ,function(){
        par.classList.add('active');/*وضع الخط */
    })



})