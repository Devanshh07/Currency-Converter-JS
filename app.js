let baseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");


//Create select[all country name] and showing
for(let select of dropdown){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected = "selected";
        } else if (select.name==="to" && currCode==="INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);//append
    }
    select.addEventListener("change",(evt)=>{
          changeFlag(evt.target);
    })
}


//update Flag!!

let changeFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrcLink = `https://flagsapi.com/${countryCode}/flat/64.png`;

   let imgg =  element.parentElement.querySelector("img");
   imgg.src = newSrcLink;
}


//when we click on button 

btn.addEventListener("click",(evt)=>{
     evt.preventDefault(); // when we click btn page alwys will be reload ..
     let ammount = document.querySelector(".ammount input");
     let ammountVal = ammount.value;
     console.log(ammountVal);

     if(ammountVal==="" || ammountVal<0 ){
        ammountVal = 1;
        ammountVal.value = "1";
     }
      
      const url = `${baseURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
      let respose = fetch(url);
      console.log(respose)
})



