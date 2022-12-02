let my_btn = document.querySelector(".my_btn");
let my_select = document.querySelector(".my_input");
let my_div_container = document.querySelector(".my_div_container");
my_btn.addEventListener("click", () => {
  // covid 19 API
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3b79af9c92msh79c312e40e6e66fp19e766jsnab9aba9dac3a",
      "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    },
  };
  fetch(
    `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${[
      my_select.value.slice(0, 1).toUpperCase() +
        my_select.value.slice(1).toLowerCase(),
    ]}`,
    options
  )
    .then((my_json) => my_json.json())
    .then((my_data) => {
      // confirm cases returned data
      let country_confirm_cases = `
      <div class="data_div bg-white col-md-5 mb-5">
        <p class="mt-4 pt-3 fs-5">Confirmed Cases</p>
        <h2 class="fw-bold text-dark pb-4">${my_data.data.confirmed}</h2>
      </div>
      `;
      //country deaths returned data
      let country_deaths = `
      <div class="data_div bg-white col-md-5 mb-5">
        <p class="mt-4 pt-3">Deaths</p>
        <h2 class="fw-bold text-dark pb-4">${my_data.data.deaths}</h2>
      </div>
      `;
      // country location
      let country_location = `
      <div class="data_div bg-white col-md-5 mb-5">
        <p class="mt-4 pt-3">Location</p>
        <h2 class="fw-bold text-dark pb-4">${my_data.data.location}</h2>
      </div>
      `;
      //last check returned data
      let country_last_check_date = `
      <div class="data_div bg-white col-md-5 mb-5">
        <p class="mt-4 pt-3">Last check date</p>
        <h2 class="fw-bold text-dark pb-4">${
          my_data.data.lastChecked.slice(0, 10) +
          "<br>" +
          my_data.data.lastChecked.slice(11, 19)
        }</h2>
      </div>
      `;
      // last report returned data
      let country_last_reported_date = `
      <div class="data_div bg-white col-md-5 mb-5">
        <p class="mt-4 pt-3">Last Reported date</p>
        <h2 class="fw-bold text-dark pb-4">${
          my_data.data.lastReported.slice(0, 10) +
          "<br>" +
          my_data.data.lastReported.slice(11, 19)
        }</h2>
      </div>
      `;
      my_div_container.innerHTML =
        country_confirm_cases +
        country_location +
        country_deaths +
        country_last_check_date +
        country_last_reported_date;
    });
});
