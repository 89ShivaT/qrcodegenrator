const btData = document.querySelector("button");
const input = document.querySelector("input");
const imgData = document.querySelector("#pic");


btData.addEventListener("click", () => {
   if(input.value!= ''){
    imgData.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
   }else{
    alert("please Enter Your Data")
   }
});