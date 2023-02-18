


let mydiv = document.getElementById("flex-container")
let some;
let promise1 = new Promise((resolve,reject)=>{ 
    return fetch(" https://free-food-menus-api-production.up.railway.app/burgers")
            .then((Response)=>Response.json())
            .then((data)=>{
               some=data
                // console.log(data[1].img)
                const newElement = document.createElement('div')
              newElement.className = 'myclass'
              const resInfo = data.map((iteam)=>{
                return `
              <img class="image" src="${iteam.img}">
            <p> ${iteam.dsc}
            <p class="name">MEAL -- ${iteam.name}</p>
            <p class="name">PRICE -- ${iteam.price}</p>
                `;
              })
              newElement.innerHTML=resInfo
                mydiv.appendChild(newElement)         
//dsc  name price rate
            })
        })
 


    let salectedmeal;
    
    
        promise1.then((res)=>{
            setTimeout(() => {
                function takeorder(){
                   console.log(some)
                }
            },);
        })


function getMenu(){
    
}