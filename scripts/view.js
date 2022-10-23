import { MakeApiCall } from "../components/Api.js";
import nav from "../components/nav.js";

document.querySelector("#navbar").innerHTML=nav()
let api = new MakeApiCall()


let data =JSON.parse(localStorage.getItem("gif"))||{}


let search = localStorage.getItem("searchGif")||data.title
api.search("#rec",search)
document.querySelector("#gifPreview>img").src=data.gif
document.querySelector("#heading").innerText=data.title

