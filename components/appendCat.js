import { MakeApiCall } from "./Api.js";

function appendCat(id,data){

    let container = document.querySelector(`${id}`);
    container.innerHTML=""
    try {
        document.querySelector(`#feed`).innerHTML="";

        
    } catch (error) {
        
    }
    data.forEach((el,index) => {
        let div = document.createElement("div");
        let gif = document.createElement("img");
        let cat = document.createElement("h3");
        cat.innerText=el.name
        gif.src=el.gif.images.original.url
        div.append(gif,cat)
        container.append(div)

        div.addEventListener("click",function(){
            container.innerHTML=""

            let api = new MakeApiCall()
            el.subcategories.forEach((sub)=>{

                 div = document.createElement("div");
                 gif = document.createElement("img");
                 cat = document.createElement("h3");
                cat.innerText=sub.name
                gif.src="https://media2.giphy.com/media/BHNfhgU63qrks/giphy.gif?cid=ecf05e47hakz1r4fsdu58czn9cewr0ga0i5kl12jqjfwhms6&rid=giphy.gif&ct=g"
                div.append(gif,cat)
                div.onclick=()=>{
                    container.innerHTML=""

                    api.search("#feed",sub.name)
                }

                container.append(div)

            })
        })
        
    });


}

export default appendCat