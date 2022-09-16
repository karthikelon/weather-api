// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '78ced0874fmsh53393adeab10739p18ce1djsnf05ce2492815',
//       'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//     }
//   };

// fetch('https://open-weather13.p.rapidapi.com/city/london', options)
//   .then(response => response.json())
//   .then(response => {
//     // const val=response;
//     console.log(response);
//     let temp=response.main.temp;
//     let tempmax =response.main.temp_max;
//     let tempmin =response.main.temp_min;

//   })

//   .catch(err => console.error(err))

const btnweather = document.getElementById('btn1')
const text1 = document.getElementById('v1');
btnweather.onclick = () => {
  console.log('button is clicked')
  console.log(text1.value);
  console.log('the url is ', `'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${text1.value}?key=CT5G277LNKM8GXTNAUVSZS62Y'`)
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${text1.value}?key=CT5G277LNKM8GXTNAUVSZS62Y`)
    .then(response => response.json())
    .then(response => {
      try {
        console.log(response);
        let fullresp = response;

        const stats = getstatsHtml(fullresp);

        document.getElementById('c0').innerHTML = `<h4>The weather for ${text1.value} for next 5 days<h4>`
        document.getElementById('c1').innerHTML = `${stats}`

      } catch (error) {
        console.log(error);
        let temp = 'try again';
        //   let tempmax =response.main.temp_max;
        //   let tempmin =response.main.temp_min;
        //   document.getElementById('c1').innerHTML=`<p>the temperature is ${fToCel} celsius </p><p>The forecast for next 15 days is </p>`

        document.getElementById('c1').innerHTML = '<p>Try some to enter some  city name </p>'

      }
    })
  fetch(`https://api.unsplash.com/search/photos/?client_id=I5tlefxmx-npslA3rCp1v3bPUeBqVfSYNs6mmJS2308&query=${text1.value}`)
    .then(response2 => response2.json())
    .then(response2 => {
      try {
        console.log('the image json is ', response2);
        var picresp = response2;
        console.log("the image url is ", picresp.results[0].urls.small)
        i2.innerHTML = `<img src = "${picresp.results[0].urls.small}" alt="Italian Trulli" /> `;

      } catch (error) {
        console.log(error);
        document.getElementById('c1').innerHTML = '<p>Try some other city</p>'

      }
    })

}
const getstatsHtml = (fullresp) => {
  // for (let i=0;i<15;i++){
  //     const stats = Object.keys(fullresp.days[i]).map(stat => {
  //         return `<p>${stat.datetime}:${stat.temp}<p>`
  //     })
  // }
  // console.log(stats.join(''))
  // return stats.join('');
  let values = '';
  for (let i = 0; i < 5; i++) {
    console.log(fullresp.days[i])
    var fToCel = ((fullresp.days[i].temp - 32) * 5 / 9).toFixed(2);
    values += `<p>On ${fullresp.days[i].datetime}: the predicted temp is  ${fToCel} ° celcius&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;climate: ${fullresp.days[i].description} </p>`

  }
  return values;

  //   // console.log('date is ',fullresp.days[i].datetime)
  //   // console.log('the weather forcast is ',fullresp.days[i].datetime)
  // // }

}
//  const weather1 = async () => {
//   const url1 = 'https://open-weather13.p.rapidapi.com/city/london'
//   const response = await fetch(url1)
//   const data = await response.json()
//   console.log(data.drinks[0]);
// }

// weather1();

//  PIXEL WEBSITE API -KEY -563492ad6f91700001000001fd954c7c528d4cf5850d5e1f062f5119
// unsplash api-I5tlefxmx-npslA3rCp1v3bPUeBqVfSYNs6mmJS2308
// let keysplash = I5tlefxmx - npslA3rCp1v3bPUeBqVfSYNs6mmJS2308;
// let url2 = `"https://api.unsplash.com/search/photos/?client_id=I5tlefxmx-npslA3rCp1v3bPUeBqVfSYNs6mmJS2308&query="`;
// var fullimgurl = 'https://api.unsplash.com/search/photos/?client_id=I5tlefxmx-npslA3rCp1v3bPUeBqVfSYNs6mmJS2308&query=${text1.value}'`;

// code for getting image using fetch request

// fetch(`https://api.unsplash.com/search/photos/?client_id=I5tlefxmx-npslA3rCp1v3bPUeBqVfSYNs6mmJS2308&query=${text1.value}`)
//   .then(response2 => response2.json())
//   .then(response2 => {
//     try {
//       console.log(response2);
//       let picresp = response2;
//       console.log("the image url is ", picresp.results[0])
//       document.getElementById("i2").innerHTML = `< img src = "${picresp.results[0].urls.small}" > `;

//     } catch (error) {
//       console.log(error);
//       document.getElementById('c1').innerHTML = '<p>Try some other city</p>'

//     }
//   })
