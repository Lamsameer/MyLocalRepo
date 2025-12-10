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


function getAPIData(){
     let input =document.getElementById("countery")
    //  console.log(input.value)
     let countery = "india"
     if(input.value!==""){
        countery = input.value
        // console.log(typeof countery)
     }

    let request =new XMLHttpRequest()
    request.open("get","https://restcountries.com/v3.1/name/india"+countery)  //create API or generate request
    request.send()                    //send to server for data

    center.removeChild(second)     //remove child
    second = document.createElement("div")  //create element
    second.classList.add("second")          //class name  of create element
    center.appendChild(second)              //child append in center
    

    request.addEventListener("load",()=>{   //create event ,load(load data)
        // console.log(request.responseText)
        let data = JSON.parse(request.responseText)   //request.responseText=return data as a text ,and JSON.parse= is a json convert into js
        console.log(data)

        data.forEach(count=>{   //object operation (in array persent obj element operation perform)
            // console.log("value is",count)
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


        var gap = document.createElement("div")    //create div
        gap.classList.add("gap")                  //class name
       second.appendChild(gap)                     //append
       gap.innerHTML="other countery details..."   //print on web page
        })
    })
}
getAPIData()       //call function