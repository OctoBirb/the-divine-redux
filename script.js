var ud=(x,y)=>{document.getElementById(x).innerText=y}

////////////////////////////////////////////////////////////UNITS

var units = 0

function getUnit(x) {
    units = units + x
}

/////////////////////////////////////////////GENERATORS FOR UNITS

var UG1 = {
    cost: 10,
    bups: 1.1,
    mult: 1,
    have: 0
}

var UG2 = {
    cost: 100,
    bups: 12.1,
    mult: 1,
    have: 0
}

var KG1 = {
    cost: 11,
    bups: 1.2,
    mult: 1,
    have: 0
}

var KG2 = {
    cost: 121,
    bups: 14.4,
    mult: 1,
    have: 0
}

var MG1 = {
    cost: 12,
    bups: 1.3,
    mult: 1,
    have: 0
}

var MG2 = {
    cost: 144,
    bups: 16.9,
    mult: 1,
    have: 0
}

///////////////////////////////////////////////////////////BUYING

function buyUG1() {
    if (units >= UG1.cost) {
        units -= UG1.cost
        UG1.have += 1
        UG1.cost *= costscaling
    } else {
        console.log("bruh");
    }
}

function buyUG2() {
    if (units >= UG2.cost) {
        units -= UG2.cost
        UG2.have += 1
        UG2.cost *= costscaling
    } else {
        console.log("bruh");
    }
}

function buyKG1() {
    if (units >= KG1.cost) {
        units -= KG1.cost
        KG1.have += 1
        KG1.cost *= costscaling
    } else {
        console.log("bruh");
    }
}

function buyKG2() {
    if (units >= UG2.cost) {
        units -= KG2.cost
        KG2.have += 1
        KG2.cost *= costscaling
    } else {
        console.log("bruh");
    }
}

function buyMG1() {
    if (units >= MG1.cost) {
        units -= MG1.cost
        MG1.have += 1
        MG1.cost *= costscaling
    } else {
        console.log("bruh");
    }
}

function buyMG2() {
    if (units >= MG2.cost) {
        units -= MG2.cost
        MG2.have += 1
        MG2.cost *= costscaling
    } else {
        console.log("bruh");
    }
}

//////////////////////////////////////////////////OTHER VARIABLES

var costscaling = 1.15

/////////////////////////////////////////////////////////UPDATING

function update() {
    var cps = (UG1.have * UG1.bups * UG1.mult) + (0)
    units = units + (cps / 20)
    ud("uunits-a", `${Math.trunc(units)} units`)
    ud("uunits-b", `${Math.trunc(cps * 10) / 10} units/s`)
    ud("uunits-cb", `Buy unit generator 1 (Cost: ${Math.trunc(UG1.cost)})`)
    ud("kunits-cb", `Buy kilounit generator 1 (Cost: ${Math.trunc(KG1.cost)})`)
    ud("munits-cb", `Buy megaunit generator 1 (Cost: ${Math.trunc(MG1.cost)})`)
}

window.setInterval(function() {
    update()
}, 50)
