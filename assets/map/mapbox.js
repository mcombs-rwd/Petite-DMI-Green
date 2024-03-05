document.addEventListener('DOMContentLoaded', function () {
  infoArray = Array.from(
    document.getElementsByClassName('info-container')
  );
  markers = document.querySelectorAll('marker');
});

function openInfo(event) {
  document.getElementById(event.data.id).className = 'info-container';
}

function openAll() {
  infoArray.forEach((container) => {
    container.className = 'info-container';
  });
}

function addOpenFunction() {
  $('#marker-one').on('click', { id: 'info-one' }, openInfo);
}

// ALL FUNCTIONS BELOW ARE REQUIRED BY ORIGINAL AIR APP, MANY ARE NOT IMPLEMENTED
function addMarker(mark, lat, lng) {}

function sendActive() {
  document.location = '?moved=true';
}

function centerToMarker(mLat, mLong) {}

function closeInfo(ev) {
  ev.target.parentElement.parentElement.parentElement.className =
    'info-container hide';
}

function reset() {
  infoArray.forEach((container) => {
    container.className = 'info-container hide';
  });
}

function fixInfoBox(m) {}

function addImage(mark, img) {}

function addTitle(mark, title) {}

function addInfo(mark, inform) {}

function selectMarker() {}

function createObjectURL(object) {}

function loadMap(token, style) {
  document.addEventListener('mousemove', sendActive);
  addOpenFunction();
}

function removeMarker() {}

function getLat() {}

function getLng() {}