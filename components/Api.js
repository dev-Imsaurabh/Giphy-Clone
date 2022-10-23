import appendData from "../components/appendData.js";
import appendCat from "./appendCat.js";
let API_KEY = "vYIUEJSN1C6ZOGWCYg0ve3WYcTrXPqa8"


class MakeApiCall{
    constructor(){

    }


    

   async trending(id,sortBy){
        let res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=${sortBy}`);
        let data = await res.json()
        appendData(id,data.data)
    }

    async random(id){
        let res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
        let data = await res.json()
        let div = document.createElement("div");
        let image = document.createElement("img");
        console.log(data.data)
        image.src=data.data.images.original.url
        div.append(image)
        try {
            
      let banner=  document.querySelector(`#banner`);
      banner.style.display="none"
            
        } catch (error) {
            
        }
     
      let heading=  document.querySelector(`#heading`);
      console.log(data.data.title)
      heading.innerText=data.data.title
      let inflater=  document.querySelector(`${id}`);
      let inflater1=  document.querySelector(`#cate`);
      inflater.innerHTML=""
      inflater1.innerHTML=""
      let obj ={
        title:data.data.title,
        gif:data.data.images.original.url
    }
    div.onclick=()=>{
        localStorage.setItem("gif",JSON.stringify(obj))
        localStorage.setItem("searchGif",obj.title)
        window.location.href="../view.html"

    }
      inflater.append(div)

    }

    async search(id,text,sortBy){
        let res = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${text}&limit=25&offset=0&rating=${sortBy}&lang=en`);
        let data = await res.json()
        
        let heading=  document.querySelector(`#heading`);
        console.log(data.data.title)
        let search = localStorage.getItem("searchGif")
        // let path = window.location.pathname;

        // let page = path.split("/").pop();

        
            heading.innerText="Search results: "+text

        
      




        try {
            let banner=  document.querySelector(`#banner`);
            banner.style.display="none"
            let inflater=  document.querySelector(`#sort`);
            let inflater1=  document.querySelector(`#cate`);
            inflater.innerHTML=""
            inflater1.innerHTML=""
            
        } catch (error) {
            
        }
       
        localStorage.setItem("searchGif",text)
        appendData(id,data.data)

        
    }
    async translate(id,text){
        let res = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${text}`);
        let data = await res.json()
        let div = document.createElement("div");
        let image = document.createElement("img");
        console.log(data.data)
        image.src=data.data.images.original.url
        div.append(image)
        let inflater=  document.querySelector(`${id}`);
      inflater.innerHTML=""
      try {
        let banner=  document.querySelector(`#banner`);
        banner.style.display="none"
      } catch (error) {
        
      }
      let heading=  document.querySelector(`#heading`);
      console.log(data.data.title)
      heading.innerText=data.data.title
      let obj ={
        title:data.data.title,
        gif:data.data.images.original.url
    }
    div.onclick=()=>{
        localStorage.setItem("gif",JSON.stringify(obj))
        localStorage.setItem("searchGif",obj.title)
        window.location.href="../view.html"

    }
      inflater.append(div)
    }

    async categories(id){
        let res = await fetch(`https://api.giphy.com/v1/gifs/categories?api_key=${API_KEY}`);
        let data = await res.json()
        let buttonA_Z= document.createElement("button");
        buttonA_Z.innerText="A-Z"
        let buttonZ_A= document.createElement("button");
        buttonZ_A.innerText="Z-A"
        localStorage.setItem("cat",JSON.stringify(data.data))
        let ldata = JSON.parse(localStorage.getItem("cat"))||[]

        buttonA_Z.onclick=()=>{
            // alert("ok")
           ldata.sort((a,b)=>a.name.localeCompare(b.name))
            appendCat(id,ldata)

        }
        buttonZ_A.onclick=()=>{
            // alert("ok")
          ldata.sort((a,b)=>b.name.localeCompare(a.name))
            appendCat(id,ldata)

        }
        console.log(ldata)

        document.querySelector("#sort").append(buttonA_Z,buttonZ_A)
       
        appendCat(id,ldata)


    }




}



export {MakeApiCall}