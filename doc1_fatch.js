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
     console.log(input.value)
     let countery = "india"
     if(input.value!==""){
        countery = input.value
        // console.log(typeof countery)
     }

/*fatch(): fatch use make Http request(get,post,etc),get data form sever or api,it based on promise-based make 
           network request(replace older XMLHttpRequest)*/
 var s =   fetch("https://restcountries.com/v3.1/name/"+countery)  //like behaiv pormise 
//  console.log("value of s:",s)      //value of fetch ,response and s is same values
   .then((response)=>{
    console.log("response:",response)
    response.json()    //It returns a Promise that resolves to a JavaScript object (the parsed JSON data).
    .then((data)=>{     //more then one object one by one exicute
        console.log("data:",data[0]) //print object index[0] element
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
    })
  .catch((erronr)=>{
    alert("invailid countery name")
  })
   })
.catch((error)=>{
    alert("invaild fetch data")
})

}
getAPIData()