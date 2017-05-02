function drag () {
    seahorse = document.getElementById("seahorse");
    leftbox = document.getElementById("leftBox");

    seahorse.addEventListener("dragstart", startDrag, false);
    seahorse.addEventListener("dragend", endDrag, false);

    leftbox.addEventListener("dragenter", dragEnter, false);
    leftbox.addEventListener("dragleave", dragLeave, false);
    leftbox.addEventListener("dragover", function(e){e.preventDefault()}, false);
    leftbox.addEventListener("drop", drop, false);
}

function startDrag(e) {
    var pic = '<img id = "seahorse" src = "http://875357559f655c0fd9842374.eventingnation.netdna-cdn.com/wp-content/uploads/2012/11/seahorse-seahorses-30701586-333-500.jpg">';
    e.dataTransfer.setData('Picture', pic);

}

function dragEnter(e) {
    e.preventDefault();
    leftbox.style.background = "#AC87D3";
    leftbox.style.border = "3px solid pink";
}

function dragLeave(e) {
    e.preventDefault();
    leftbox.style.background = "white";
    leftbox.style.border = "3px solid purple";
}


function drop(e) {
    e.preventDefault();
    leftBox.innerHTML  = e.dataTransfer.getData('Picture');
}

function endDrag(e) {
    pic = e.target
    pic.style.visibility = "hidden";
}


window.addEventListener("load", drag, false)