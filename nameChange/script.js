let intervalId;

const changeText = function () {
  document.querySelector('#nameParagraph').innerHTML =
    'Hello, my name is Mubasheer!';
};

const start = document.querySelector('#changeBtn');
const end = document.querySelector('#resetBtn');

start.addEventListener('click', function () {
  if (!intervalId) {
    intervalId = setInterval(changeText, 1000);
  }
});

end.addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null;
  document.querySelector('#nameParagraph').innerHTML =
    'Hello, my name is Default User!';
});
