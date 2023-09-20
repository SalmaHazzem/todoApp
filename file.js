let mytasks =document.querySelector('.tasks');
let btn =document.querySelector('.add');
let myinput=document.querySelector('.newToDo');
let mark=document.querySelectorAll('.circle');
let deletBtn=document.querySelector('.none');
let theme=document.querySelector('#theme');
let divided=document.querySelector('.divded');
let prog=document.querySelector('.prog');
let title=document.querySelector('.title');
let clear=document.querySelector('.clear');
let itemsNum =document.querySelector('.items');
let count =0;
let all =document.querySelector('.all');
let active =document.querySelector('.active');
let completed =document.querySelector('.completed');
// let todos =document.querySelectorAll('.task');
let text=document.querySelector('.drag');
let drag;


btn.addEventListener('click',function(){
    //to add new element to my to do
   let mydiv=document.createElement('div');
 mydiv.classList.add('task','ac'); 
let mycircle=document.createElement('div')
mycircle.classList.add('circle');
let paragraph =document.createElement('p');
let delet=document.createElement('p');
delet.innerHTML='x';
delet.classList.add('none');
paragraph.innerHTML=myinput.value;
mydiv.appendChild(mycircle);
mydiv.appendChild(paragraph);
mydiv.appendChild(delet);
mytasks.appendChild(mydiv);
itemsNum.innerHTML=`${++count} items left`;
window.sessionStorage.setItem(` task${count}`,mydiv.innerHTML);
mydiv.setAttribute('draggable',true);
drag=mydiv;
myinput.value=''



  mycircle.addEventListener('click',function(){
        if(!mycircle.classList.contains('complet')){
        mycircle.style.backgroundColor='cyan';
        mycircle.classList.add('complet');
        mydiv.style.textDecoration='line-through';
        mydiv.classList.remove('ac');
        if(!mydiv.classList.contains('added')){
        itemsNum.innerHTML=`${--count} items left`;
        mydiv.classList.add('added');
        }
        }else {
            mycircle.style.backgroundColor='transparent';
            mycircle.classList.remove('complet');
            mydiv.classList.add('ac');
            mydiv.style.textDecoration='none';
            if(mydiv.classList.contains('added')){
                itemsNum.innerHTML=`${++count} items left`;
                mydiv.classList.remove('added');
                }
        }
    })
        active.addEventListener('click',function(){
               if(mydiv.classList.contains('ac')){
                mydiv.style.display='flex';
               }else {
                mydiv.style.display='none';
               }
        })
        all.addEventListener('click',function(){
              mydiv.style.display='flex';
        })
        clear.addEventListener('click',function(){
            if(!mydiv.classList.contains('ac'))
             
            mydiv.remove();

        })
        delet.addEventListener('click',function(){
            delet.parentElement.remove();
                        if(!mydiv.classList.contains('added')){
                itemsNum.innerHTML=`${--count} items left`;
                mydiv.classList.add('added');
                }
            
        })
        completed.addEventListener('click',function(){
            if(mydiv.classList.contains('ac')){
                mydiv.style.display='none';
                console.log('kk')
               }else {
                mydiv.style.display='flex';
                console.log('i')
               }
        })

      dragItems();
      
    
})

theme.addEventListener('click',function(){
    if(!theme.classList.contains('dark')){
    prog.style.backgroundColor='#000121';
    document.body.style.backgroundColor='#11152e';
    title.style.color='white';
    btn.style.backgroundColor='#3494bf';
    text.style.color='white';
    theme.classList.add('dark');
    }else {
        prog.style.backgroundColor='darkcyan';
        document.body.style.backgroundColor='#eefdff';
        title.style.color='black';
        btn.style.backgroundColor='darkcyan';
        text.style.color='black';
        theme.classList.remove('dark');
    }
    
})


function dragItems(){
    let todos =document.querySelectorAll('.task');
    todos.forEach(i=>{
        i.addEventListener('dragstart',function(){
            drag=i;
        })
        i.addEventListener('dragend',function(){
            drag=null;
           

        })

        
            mytasks.addEventListener('dragover',function(e){
                e.preventDefault();
            })
           
            mytasks.addEventListener('drop',function(e){
                mytasks.append(drag);
            })

        

    })
}



