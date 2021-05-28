const input = document.querySelector('#myInput');
const addBtn = document.querySelector('#addBtn');
const ul = document.querySelector('#list');
const item = document.querySelector('li');



function inputLength(){
    return input.value.length
}

 createToDo = () => {
   let li = document.createElement('li');
   li.append(input.value);
   ul.append(li);
   input.value = "";
   
   crossOut = () => {
       li.classList.toggle('done');
   }

   li.addEventListener('click',crossOut)
       
   


   // adding a delete button
   let deleteBtn = document.createElement('button')
   deleteBtn.append('x')
   li.append(deleteBtn);
   deleteBtn.addEventListener('click', deleteListItem);
   //this should remove the class (li)
   function deleteListItem (){
       li.classList.add("delete")
   }
}

function additem () {
    if(inputLength() > 0  ){
        createToDo();
    }
}

function addItemAfterEnter(event) {
  if (inputLength() > 0 && event.which ===13){
      createToDo()
  }
}


addBtn.addEventListener('click', additem);
input.addEventListener('keypress', addItemAfterEnter );






 