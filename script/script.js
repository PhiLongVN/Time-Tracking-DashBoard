const link = "../data.json";
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

const dailytext = document.querySelector(".dailytext");
const weeklytext = document.querySelector(".weeklytext");
const monthlytext = document.querySelector(".monthtext");

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

/* ---------------------------------- update --------------------------------- */
function handleClick(timer) {
  let card = [];

  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        // console.log(element);
        let activity = element.title;
        let timeCurrent = element["timeframes"][timer]["current"];
        let timePast = element["timeframes"][timer]["previous"];
        let texttime = {
          daily: "Yesterday",
          weekly: "Last-Week",
          monthly: "Last-Month",
        };

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
              <span class="info-time"> ${
                texttime[timer]
              } - ${timePast}Hrs </span>
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
    const day = dailytext.innerText.toLowerCase();
    handleClick(day);
  }
  if (weekly.checked) {
    const week = weeklytext.innerText.toLowerCase();
    handleClick(week);
  }
  if (monthly.checked) {
    const month = monthlytext.innerText.toLowerCase();
    handleClick(month);
  }
}
