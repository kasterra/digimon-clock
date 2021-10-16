const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const updateTime = () => {
  const currentTime = new Date();
  const enrollTime = new Date(2021, 11, 8);
  const difference = enrollTime - currentTime;
  days.innerText = Math.floor(difference / 8.64e7);
  hours.innerText = Math.floor((difference / 3.6e6) % 24);
  minutes.innerText = Math.floor((difference / 60000) % 60);
  seconds.innerText = Math.floor((difference / 1000) % 60);
};
function init() {
  updateTime();
  setInterval(updateTime, 1000);
}
init();
