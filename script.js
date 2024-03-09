const correctAnswers=['11','7','64','36'];
const form=document.querySelector('form');
const result=document.querySelector('.result');
const successMessage=document.querySelector('.successMessage')
const button=document.querySelector('button')


form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0;
    const userAnswers=[form.sual1.value,form.sual2.value,form.sual3.value,form.sual4.value];
    userAnswers.forEach((answer,index)=>{
        if(answer === correctAnswers[index]){
            score+=100 / correctAnswers.length;
        }
    })
 
    result.classList.remove('d-none')
    let xal=0;
    const basmagul=setInterval(()=>{
     result.querySelector('span').textContent=`${xal}%`
     if(xal == score)
     {
        clearInterval(basmagul);
     }
     else{
        xal+=1;
     }
    },10)
    if(score == 100){
        successMessage.classList.remove('d-none');
        button.setAttribute('disabled','');
     }
    

})