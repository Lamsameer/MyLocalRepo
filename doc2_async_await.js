var second = document.querySelector(".second")
var center = document.querySelector(".center")
function generate(key,value){
    var container =document.createElement("div")
    container.classList.add("container")

    var keyDiv  = document.createElement("div")
    keyDiv.classList.add("key")

    var valueDiv = document.createElement("div")
    valueDiv.classList.add("value")

    keyDiv.innerHTML=key           //
    if(key=="flags"){
        let imgs = document.createElement("img")
        imgs.src=value
        valueDiv.appendChild(imgs)   //append with image
        // valueDiv.innerHTML=value   //print only hyper link
    }
    else if(key==="maps"){
        let map = document.createElement("a")
       map.href=value
       map.innerHTML="click on here for map"
       map.target="_blank"
   valueDiv.appendChild(map)
    }
    else
    valueDiv.innerHTML=value

    container.appendChild(keyDiv)    //
    container.appendChild(valueDiv)

    second.append(container) //
}


async function getAPIData(){

     let input =document.getElementById("countery")
     console.log(input.value)
     let countery = "india"
     if(input.value!==""){
        countery = input.value
        // console.log(typeof countery)
     }
try{
   let response = await fetch("https://restcountries.com/v3.1/name/"+countery)
 let data = await response.json()
 
           center.removeChild(second)
    second = document.createElement("div")
    second.classList.add("second")
    center.appendChild(second)

    data.forEach(count=>{   //object operation (in array persent obj element operation perform)
            console.log(count)
        generate("name",Object.values(count.name))
        generate("officialName",count.name.official)
        generate("capital",count.capital)
        generate("region",count.region)
        generate("languages",Object.values(count.languages))
        generate("latlng",count.latlng)
        generate("landlocked",count.landlocked)
        generate("area",count.area)
        generate("translation",Object.values(Object.values(count.translations.ara)))  //
        generate("population",count.population)
        generate("timezone",count.timezones)
        generate("flags",count.flags.png)
        generate("postalcode",Object.values(count.postalCode))
        generate("maps",count.maps.googleMaps)


        var gap = document.createElement("div")
        gap.classList.add("gap")
       second.appendChild(gap)
       gap.innerHTML="other countery details..."
        })
}

catch(error){
    alert("invalid ")
}


}
getAPIData()