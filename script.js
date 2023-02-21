const valueEl=document.getElementById('value');
const btnsEl=document.querySelectorAll('.btn');

let count=0;

btnsEl.forEach(function(btn){
 btn.addEventListener('click',(e)=>{
console.log(e.currentTarget.classList);
const styles = e.currentTarget.classList;
if(styles.contains('decrease')){
 count--;
}else if(styles.contains('increase')){
 count++;
}else{
 count=0;
}
if(count<0){
 valueEl.style.color='red';
}else if(count>0){
 valueEl.style.color='green';
}else{
 valueEl.style.color='#222'
}
valueEl.textContent=count;
 })
})

