//console.log("sei una fallita");
const fetchMusic = function (query, id) {
  const section = document.querySelector(`#${id}`);

  const row = document.querySelector(`#${id}Section`);
  console.log(row);
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
    .then((raw) => {
      return raw.json();
    })
    .then((res) => {
      let music = res.data;
      section.classList.remove("d-none");
      for (let i = 0; i < music.slice(0, 4).length; i++) {
        const element = music[i];
        row.innerHTML += `<div class='col col-3'> <img class='w-100' src='${element.album.cover_xl}'/> </div>`;
      }
    });
};
window.onload = function () {
  fetchMusic("systemofadown", "systemofadown");
  fetchMusic("deftones", "deftones");
  fetchMusic("metallica", "metallica");
};
