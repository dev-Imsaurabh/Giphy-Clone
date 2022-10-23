function appendData(id,data){

    let container = document.querySelector(`${id}`);
    container.innerHTML=""
    data.forEach((el,index) => {
        console.log(el.embed_url)
        let div = document.createElement("div");
        let gif = document.createElement("img");
        gif.src=el.images.original.url
        div.append(gif)
        container.append(div)
        let obj ={
            title:el.title,
            gif:el.images.original.url
        }
        div.onclick=()=>{
            localStorage.setItem("gif",JSON.stringify(obj))
            localStorage.setItem("searchGif",obj.title)
            window.location.href="../view.html"

        }
    });


}

export default appendData