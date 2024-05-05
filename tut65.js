// Callback

let loaddata=(src,callback)=>{
    let script=document.createElement('script');
    script.src=src;
    callback(src);
    script.onload=function(){
        console.log("Script load ho gya hai :",src)
    }
    script.onerror=function(){
        console.log("Error aaya hai :",src)
    }
    document.body.appendChild(script)
}
// let fun1 = goodnight =()=>{
//     console.log("Good Night")
// }
function night(src){
    console.log("Callback successfully run :",src)
}
loaddata('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js.app',night);
