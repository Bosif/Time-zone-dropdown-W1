function alertDate(event) {
  if (event.target.value == "Tokyo") {
    alert(`It is ${tokyoDate} in Asia/Tokyo`);
  } else if (event.target.value == "Amsterdam") {
    alert(`It is ${amsterdamDate} in Europe/Amsterdam`);
  } else if (event.target.value == "Seoul") {
    alert(`It is ${seoulDate} in Asia/Seoul`);
  }
}

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", alertDate);

let tokyoDate = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY HH:mm A");

let amsterdamDate = moment()
  .tz("Europe/Amsterdam")
  .format("dddd, MMMM D, YYYY HH:mm A");

let seoulDate = moment().tz("Asia/Seoul").format("dddd, MMMM D, YYYY HH:mm A");
