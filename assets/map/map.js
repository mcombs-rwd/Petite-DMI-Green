document.addEventListener('DOMContentLoaded', loadMap);

function loadMap() {
  /**
   * Hides info-containers and makes markers clickable.
   */
  popups = document.querySelectorAll('.info-container')
  markers = document.querySelectorAll('.marker');
  // Hide info-containers, give unique ID based on title
  var title = "";
  var titles = [];
  popups.forEach((popup) => {
    popup.className = "info-container hide";
    title = popup.querySelector("h3").innerHTML;
    title = title.toLowerCase()
      .replace(/[\'\’]/g, "").replace(/[^\w]|_/g, "-").replace(/\s+/g, " ");
    popup.id = title;
    titles.push(title);
  })
  console.log("Popups: ", titles);
  // Give markers click function to corresponding info-container
  var n = 0;
  markers.forEach((marker) => {
    marker.id = "click-" + titles[n];
    functionCall = "toggleInfo('" + titles[n] + "')";
    marker.setAttribute("onClick", functionCall);
    console.log("Marker call: %s", functionCall);
    n++;
  })
}

function toggleInfo(event) {
  console.log("Toggling %s", event);
  if (document.getElementById(event).className.includes("hide")) {
    document.getElementById(event).className = "info-container";
  } else {
    document.getElementById(event).className = "info-container hide";
  };
  popups = document.querySelectorAll('.info-container')
  popups.forEach((popup) => {
    if(popup.id !== event) { closeInfo(popup); }
  })
}

function closeAll() {
  // Called when close is clicked on any popup
  popups = document.querySelectorAll('.info-container')
  popups.forEach((popup) => {
    closeInfo(popup);
  })
}

function closeInfo(popup) {
  // Possibly called by SWF app
  console.log("Closing %s", popup.id);
  popup.className = "info-container hide";
}

// // Unused
// function openInfo(event) {
//   console.log("opening %s", event);
//   document.getElementById(event).className = "info-container";
// }

// function addOpenFunction() {
//   $('#marker-one').on('click', { id: 'info-one' }, openInfo);
// }

// function openAll() {
//   popups.forEach((container) => {
//     container.className = 'info-container';
//   });
// }


// ALL FUNCTIONS BELOW ARE REQUIRED BY ORIGINAL AIR APP, MANY ARE NOT IMPLEMENTED
// function addMarker(mark, lat, lng) {}

// function sendActive() {
//   document.location = '?moved=true';
// }

// function centerToMarker(mLat, mLong) {}

// function closeInfo(ev) {
//   ev.target.parentElement.parentElement.parentElement.className =
//     'info-container hide';
// }

// function reset() {
//   popups.forEach((container) => {
//     container.className = 'info-container hide';
//   });
// }

// function fixInfoBox(m) {}

// function addImage(mark, img) {}

// function addTitle(mark, title) {}

// function addInfo(mark, inform) {}

// function selectMarker() {}

// function createObjectURL(object) {}

// // function loadMap(token, style) {
// //   document.addEventListener('mousemove', sendActive);
// //   addOpenFunction();
// // }

// function removeMarker() {}

// function getLat() {}

// function getLng() {}