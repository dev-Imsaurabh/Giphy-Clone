import { MakeApiCall } from "../components/Api.js";
let path = window.location.pathname;

let page = path.split("/").pop();

let api = new MakeApiCall()
setTimeout(() => {
    let search = document.querySelector("#search");
    let heading = document.querySelector("#heading");
    let banner=  document.querySelector(`#banner`);
    document.querySelector("#home").onclick=()=>{
        window.location.href="../index.html"
        
    }
    document.querySelector("#logo").onclick=()=>{
        window.location.href="../index.html"
        
    }

    document.querySelector("#random").onclick=()=>{
        api.random("#feed")
    }

    document.querySelector("#translate").onclick=()=>{
        
    }
    document.querySelector("#categ").onclick=()=>{
        try {

            heading.innerText="Categories"
        banner.style.display="none"
            
        } catch (error) {
            
        }
        
        api.categories("#cate")
        
    }

    document.querySelector("#seacrhBtn").onclick=()=>{
        let value = search.value
        if(value==""){
            alert("Please enter text")
        }else{
            api.search("#feed",value)
        }
    }

    document.querySelector("#translate").onclick=()=>{
        let value = search.value
        if(value==""){
            alert("Please enter text")
        }else{
            api.translate("#feed",value)
        }
    }


    search.addEventListener("input",function(event){
        if(search.value==""){
            api.trending("#feed","g")
            try {

                banner.style.display="block"
                heading.innerText="Trending"
                
            } catch (error) {
                
            }
        

            
        }else{
        debounce(api.search,"1000")
        }
    })

    let id;

    let debounce=(func,delay)=>{

        if(id){
            clearInterval(id)
        }


        id = setTimeout(() => {
            if(search.value!=""){
                func("#feed",search.value)

            }else{
                heading.innerText="Trending"

            }

            
        }, delay);

    }
    



}, 100);



