const link = "../data.json";
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const container = document.querySelector(".time");
const dot = document.querySelector(".dot");
const info = document.querySelector(".block-info");

/* ========================================================================== */
/*                                ON-MOUSE-DOT                                */
/* ========================================================================== */


/* ========================================================================== */
/*                                  CALL-API                                  */
/* ========================================================================== */
daily.addEventListener("click", checkTime);
weekly.addEventListener("click", checkTime);
monthly.addEventListener("click", checkTime);
checkTime();

/* ---------------------------------- daily --------------------------------- */
function handleClick() {
  let card = [];

  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        // console.log(element);
        let activity = element.title;
        let timeCurrent = element.timeframes.daily.current;
        let timePast = element.timeframes.daily.previous;

        card += ` <div class="time-block ${element.title
          .toLowerCase()
          .replace(/\s+/g, "")} ">
          <div class="block-info">
            <div class="title">
              <strong>${activity}</strong>
              <span  class="dot" >...</span>
            </div>

            <div class="value">
              <h2 class="info-value">${timeCurrent}Hrs</h2>
              <span class="info-time">Yesterday - ${timePast}Hrs </span>
            </div>
          </div>
        </div>`;

        container.innerHTML = card;
      });
    });
}

/* --------------------------------- weekly --------------------------------- */
function handleClickWeekly() {
  let card = [];

  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        let activity = element.title;
        let timeCurrent = element.timeframes.weekly.current;
        let timePast = element.timeframes.weekly.previous;

        card += ` <div class="time-block ${element.title
          .toLowerCase()
          .replace(/\s+/g, "")} ">
          <div class="block-info">
            <div class="title">
              <strong>${activity}</strong>
              <span  class="dot" >...</span>
            </div>

            <div class="value">
              <h2 class="info-value">${timeCurrent}Hrs </h2>
              <span class="info-time">Last Week - ${timePast}Hrs </span>
            </div>
          </div>
        </div>`;

        container.innerHTML = card;
      });
    });
}

/* --------------------------------- monthly -------------------------------- */
function handleClickMonthly() {
  let card = [];

  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        let activity = element.title;
        let timeCurrent = element.timeframes.weekly.current;
        let timePast = element.timeframes.weekly.previous;

        card += ` <div class="time-block ${element.title
          .toLowerCase()
          .replace(/\s+/g, "")} ">
          <div class="block-info">
            <div class="title">
              <strong>${activity}</strong>
              <span  class="dot" >...</span>
            </div>

            <div class="value">
              <h2 class="info-value"> ${timeCurrent}Hrs</h2>
              <span class="info-time">Last Month - ${timePast}Hrs </span>
            </div>
          </div>
        </div>`;

        container.innerHTML = card;
      });
    });
}

/* -------------------------------- checktime ------------------------------- */
function checkTime() {
  if (daily.checked) {
    handleClick();
  }
  if (weekly.checked) {
    handleClickWeekly();
  }
  if (monthly.checked) {
    handleClickMonthly();
  }
}
