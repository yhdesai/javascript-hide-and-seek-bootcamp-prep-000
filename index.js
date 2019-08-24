
function getFirstSelector(name) {
return document.querySelector(name)
}

function nestedTarget() {
return document.querySelector("#nested .target")
}



function increaseRankBy(n) {
  const a = document.getElementById('app').querySelectorAll('ul.ranked-list li');
   for (let i = 0; i < a.length; i++) {
    a[i].innerHTML = parseInt(a[i].innerHTML) + n;
}

 }


 function deepestChild() {
  const picard = document.getElementById('grand-node').querySelectorAll('div');
    var last = picard.length -1;
        return picard[last];

 }
