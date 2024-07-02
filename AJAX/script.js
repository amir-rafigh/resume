const button = document.getElementById('button');
const result = document.getElementById('result')

// button.addEventListener('click' , ()=>{
//     let xhr =new XMLHttpRequest;
//     xhr.open('GET' , "./x.json");
//     xhr.onload = function(){
//         if(this.status==200){
//             let res = JSON.parse(this.responseText)
//             result.innerHTML  = 
//             `
//             my name is :${res.name}<br>
//             my last name is :${res.lastname}</br>
//             my age is :${res.age}`
//         }
//     }
//     xhr.send()
// })
//////////////////////////////////////////////
/////////////////////////////////////////////


button.addEventListener('click' , ()=>{
    let xhr = new XMLHttpRequest;
    xhr.open("get" , "./x.json");
    xhr.onload = function(){
        if(this.status===200){
            let x =  JSON.parse(this.responseText)
            result.innerHTML=`
            my name is ${x.full_name} , and i live ${x.city} city
            so our language is ${x.language} , at last i ${x.militaryservice} militaryservice`
            
        }
    }
    xhr.send()
})