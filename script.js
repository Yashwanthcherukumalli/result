const countval_1 = document.querySelector(".countval-1")
var count_1 = 0

function rec_1(){
    if(count_1 <100){
        ++count_1
        countval_1.innerHTML=count_1
    }else{
        count_1 = 0
        countval_1.innerHTML=count_1
    }
}

const countval_2 = document.querySelector(".countval-2")
var count_2 = 0
function rec_2(){
    if(count_2 <100){
        ++count_2
        countval_2.innerHTML=count_2
    }else{
        count_2 = 0
        countval_2.innerHTML=count_2
    }
}

const countval_3 = document.querySelector(".countval-3")
var count_3 = 0
function rec_3(){
    if(count_3 <100){
        ++count_3
        countval_3.innerHTML=count_3
    }else{
        count_3 = 0
        countval_3.innerHTML=count_3
    }
}

const countval_4 = document.querySelector(".countval-4")
var count_4 = 0
function rec_4(){
    if(count_4 <100){
        ++count_4
        countval_4.innerHTML=count_4
    }else{
        count_4 = 0
        countval_4.innerHTML=count_4
    }
}

var total_all = document.querySelector(".count-total")
var total_count=""
function total(){
    total_count= (count_1+count_2+count_3+count_4)/10
    total_all.innerHTML=total_count
}
