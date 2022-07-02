const container = document.querySelector('.container');

function getData(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const { bpi , time, chartName, disclaimer} = data;
        createCardHtml(bpi, time, chartName, disclaimer)
    })
    .catch(err => {
        container.innerHTML = "Faild Fetch Data"+ " " + err;
    })
}

function createCardHtml(bpi, time, chartName, disclaimer){
    let html = `
    <div class="card">
       <div class="card-head">
       <h3>
       ${chartName}
       <i class="fa-brands fa-bitcoin"></i>
     </h3>
     <p>
       ${disclaimer}
     </p>
     <p>${time.updated}</p>
       </div>
       <div class="card-boxes">
           <div class ="box">
              <h4>
                ${bpi.EUR.description}
              </h4>
              <p>
                 ${bpi.EUR.rate_float}
                 <i class="fa-solid fa-euro-sign"></i>
              </p>
           </div>
           <div class ="box">
              <h4>
                ${bpi.USD.description}
              </h4>
              <p>
                 ${bpi.USD.rate_float}
                 <i class="fa-solid fa-dollar-sign"></i>
              </p>
           </div>

           <div class ="box">
              <h4>
                ${bpi.GBP.description}
              </h4>
              <p>
                 ${bpi.GBP.rate_float}
                 <i class="fa-solid fa-sterling-sign"></i>
              </p>
           </div>
       </div>
    </div>
    `;
    container.insertAdjacentHTML('beforeend', html)
}
getData("https://api.coindesk.com/v1/bpi/currentprice.json")