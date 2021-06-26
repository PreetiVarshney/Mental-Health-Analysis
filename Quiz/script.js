const preeti = document.querySelector('.result');
const span = document.querySelector('body > div.result.py-4.d-none.bg-light.text-center > div > p > span');
const  coorectanswer = ['A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A'];
const notsure = ['C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C']

const form = document.querySelector('.quiz-form');
form.addEventListener('submit',(e)=>{
    let score = 0;
    e.preventDefault();
    let user_answers =[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value,form.q11.value,form.q12.value,form.q13.value,form.q14.value,form.q15.value,form.q16.value,form.q17.value,form.q18.value,form.q19.value,form.q20.value];
    user_answers.forEach((answer,index)=>{
        if(answer===coorectanswer[index])
        {
            score +=2;
        }
        else if (answer===notsure[index])
        {
            score +=1;
        }
    })

    const making = document.querySelector('.making');
        if (score===0||score<=15) {
            making.innerHTML="Mild "
        }
        else if (score>15||score<=30) {
            making.innerHTML="Moderate ";
        }
        else if (score>30) {
            making.innerHTML="Severe  "
        }
    preeti.classList.remove('d-none');
    scrollTo(0,0);
    let output =0 
    // settimeout
    // setinterval
    let timer = setInterval(() => {
        span.textContent=`${output}/40`;
        if (output===score) {
            clearInterval(timer);
        }
        else{
            output++;
        }
    }, 10);
})
