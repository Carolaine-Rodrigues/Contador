//Contador Inicial
var count = 0;

//Selecina o botão e o valor do botão
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if(styles.contains('decrement')){
            count--;
        }else if(styles.contains('incremet')){
            count++;
        }else{
            count = 0;
        }

        value.textContent = count;
    })
})