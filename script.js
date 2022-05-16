var ud=(x,y)=>{document.getElementById(x).innerText=y}

////////////////////////////////////////////////////////////UNITS

var units = {
    u: 0,
}

function getUnit(x) {
    units.u = units.u + x
}

/////////////////////////////////////////////GENERATORS FOR UNITS

var UG1 = {
    cost: 10,
    bups: 1,
    mult: 1,
    have: 0
}

///////////////////////////////////////////////////////////BUYING

function buyUG1() {
    if (units.u >= UG1.cost) {
        units.u -= UG1.cost
        UG1.have += 1
        UG1.cost *= costscaling
    } else {
        console.log("bruh");
    }
}

//////////////////////////////////////////////////OTHER VARIABLES

var costscaling = 1.15

/////////////////////////////////////////////////////////UPDATING

function update() {
    var cps = (UG1.have * UG1.bups) + (0)
    ud("uunits-a", `${Math.trunc(units.u)} units`)
    ud("uunits-b", `${Math.trunc(cps * 10) / 10} units/s`)
}

window.setInterval(function() {
    update()
    units.u += (cps / 50)
}, 50)
