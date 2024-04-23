//function to create elements
function element(tag, classname, id, text) {
    let tags = document.createElement(tag);
    tags.classList = classname;
    tags.id = id;
    tags.innerHTML = text;
    return tags;
  }
  let container = element("div","container","","");
  const h1 = element("h1","text-center","title","Countries Weather");
  const row = element("div","row","","")
  const response = fetch("https://restcountries.com/v3.1/all")
  response.then((data)=>data.json())
  .then((ele)=>{
      for(let i=0;i<ele.length;i++){
        const co=ele[i].name.common;
        const con=co.replace(/\s/g, "");
         const col = document.createElement("div");
          col.classList = " col-sm-6 col-md-4 col-lg-4 col-xl-4 my-lg-3"
          col.innerHTML=`
          <div class="card h-100 ss">
          <div class= "card-header bg-black">
          <h5 class= "card-title text-center">${ele[i].name.common}</h5>
          </div>
          <div class="card-body">
          <div class="img-box">
          <img  class="col-sm-6 col-md-4 col-lg-4 col-xl-4 w-100 card-img-top" src=${ele[i].flags.svg} alt="flag">
          </div>
          <div class="card-text text-center">Region : ${ele[i].region}</div>
          <div class="card-text text-center">Capital : ${ele[i].capital}</div>
          <div class="card-text text-center">Country Code : ${ele[i].cca3}</div>
          <button class="btn btn-primary" id="weather" onclick=weather('${con}',${ele[i].latlng[0]},${ele[i].latlng[1]})>Click for weather</button>
          </div>
          </div>
          `
        
          row.append(col)
      }
  })
  container.append(row)
  document.body.append(h1,container)

function weather(country,lattiude,longitude)
{
  const lat=lattiude;
  const lon=longitude;
  const c=country;
  const response1=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b3b99ecb5e2d063b1446032f8f4ca8ff`)
  response1.then((data1)=>data1.json())
  .then((eles)=>
  {
    alert("The current weather in "+c+" "+eles.main.temp+" "+"tempature");
  });
}
