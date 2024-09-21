// document.getElementById('submit-btn').addEventListener('click', function(){
//    const inputValue = document.getElementById('text-area').value;
//    console.log(inputValue);
//    const container = document.getElementById('review');
//    const p = document.createElement('p');
//    p.innerText = inputValue;
//    container.appendChild(p);
//    document.getElementById('text-area').value = "";
// })

//keybord event
const inputValue = document.getElementById('text-area')
.addEventListener('keyup', function(event){
   // console.log(event.target.value);
   if(event.key == "Enter"){
      const inputValue = document.getElementById('text-area').value;
      const container = document.getElementById('review');
      const p = document.createElement('p');
      p.innerText = inputValue;
      container.appendChild(p);
      document.getElementById('text-area').value = "";
   }

})

