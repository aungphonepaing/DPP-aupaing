document.getElementById("try").onclick = function () {
    const a= document.getElementById("left").value;
    const b = document.getElementById("right").value;
    const op = document.getElementById("operator").value;

    if(!/^[0-9]+$/.test(a) || !/^[0-9]+$/.test(b)) {
        alert("Error :(");
        return;
    }

    const x = Number(a);
    const y = Number(b);

    if (y === 0 && (op === "/" || op === "%")) {
        alert("It's over 9000!");
        return;
    }


    let result;
    if (op === "+") result = x + y ;
    else if ( op === "-") result = x - y ;
    else if ( op === "*") result = x * y ;
    else if ( op === "/") result = x / y ;
    else result = x % y ;

    console.log(result);
    alert(result);
};