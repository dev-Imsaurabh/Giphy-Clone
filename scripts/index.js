import {MakeApiCall} from "../components/Api.js";
import nav from "../components/nav.js";
document.querySelector("#navbar").innerHTML=nav()

//inflate trending in feed
let api = new MakeApiCall()
api.trending("#feed","g")


