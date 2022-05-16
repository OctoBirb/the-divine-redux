var ud=(x,y)=>{document.getElementById(x).innerText=y}

/////////////////////////////////////////////////////////////////

var units = {
    u: 0,
    ps: 0
}

function getUnit(x) {
    units.u = units.u + x
}

/////////////////////////////////////////////////////////////////

function update() {
    ud("uunits-a", `${units.u} units`)
    ud("uunits-b", `${units.ps} units/s`)
}

window.setInterval(function() {
    update()
}, 50)