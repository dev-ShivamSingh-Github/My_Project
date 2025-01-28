document.getElementById("submit").onclick = function() {
    let a11 = Number(document.getElementById("a11").value);
    let a12 = Number(document.getElementById("a12").value);
    let a13 = Number(document.getElementById("a13").value);
    let b1 = Number(document.getElementById("b1").value);
    let a21 = Number(document.getElementById("a21").value);
    let a22 = Number(document.getElementById("a22").value);
    let a23 = Number(document.getElementById("a23").value);
    let b2 = Number(document.getElementById("b2").value);
    let a31 = Number(document.getElementById("a31").value);
    let a32 = Number(document.getElementById("a32").value);
    let a33 = Number(document.getElementById("a33").value);
    let b3 = Number(document.getElementById("b3").value);
    
    if(document.getElementById("method").value == "gauss"){
        window.alert("You selected Gauss Elimination Method");
        
        let r2 = a21/a11;
        let r3_1 = a31/a11;
        a21 = a21-(r2*a11);
        a22 = a22-(r2*a12);
        a23 = a23-(r2*a13);
        b2 = b2-(r2*b1);
        a31 = a31-(r3_1*a11);
        a32 = a32-(r3_1*a12);
        a33 = a33-(r3_1*a13);
        b3 = b3-(r3_1*b1);
        let r3_2 = a32/a22;
        a32 = a32-(r3_2*a22);
        a33 = a33-(r3_2*a23);
        b3 = b3-(r3_2*b2);
        let Z = b3/a33;
        let Y = (b2-(a23*Z))/a22;
        let X = (b1-(a13*Z)-(a12*Y))/a11;
        
        document.getElementById("X").textContent = `${X}`;
        document.getElementById("Y").textContent = `${Y}`;
        document.getElementById("Z").textContent = `${Z}`;
    }
    
    else if(document.getElementById("method").value == "jordan"){
        window.alert("You selected Gauss-Jordan Elimination Method");
        let r2_1 = a21/a11;
        let r3_1 = a31/a11;
        a21 = a21-(r2_1*a11);
        a22 = a22-(r2_1*a12);
        a23 = a23-(r2_1*a13);
        b2 = b2-(r2_1*b1);
        a31 = a31-(r3_1*a11);
        a32 = a32-(r3_1*a12);
        a33 = a33-(r3_1*a13);
        b3 = b3-(r3_1*b1);
        let r3_2 = a32/a22;
        a32 = a32-(r3_2*a22);
        a33 = a33-(r3_2*a23);
        b3 = b3-(r3_2*b2);
        let r1_1 = a13/a33;
        let r2_2 = a23/a33;
        a11 = a11-(r1_1*a31);
        a12 = a12-(r1_1*a32);
        a13 = a13-(r1_1*a33);
        b1 = b1-(r1_1*b3);
        a21 = a21-(r2_2*a31);
        a22 = a22-(r2_2*a32);
        a23 = a23-(r2_2*a33);
        b2 = b2-(r2_2*b3);
        let r1_2 = a12/a22;
        a11 = a11-(r1_2*a21);
        a12 = a12-(r1_2*a22);
        a13 = a13-(r1_2*a23);
        b1 = b1-(r1_2*b2);
        let X = b1/a11;
        let Y = b2/a22;
        let Z = b3/a33;

        document.getElementById("X").textContent = `${X}`;
        document.getElementById("Y").textContent = `${Y}`;
        document.getElementById("Z").textContent = `${Z}`;
    }
    
    else if(document.getElementById("method").value == "jacobi"){
        window.alert("You selected Gauss-Jacobi Method");
        let i = Number(window.prompt(`Please enter the number of iteration`));
        let x = Number(window.prompt(`Please enter initial approximation of X`));
        let y = Number(window.prompt(`Please enter initial approximation of Y`));
        let z = Number(window.prompt(`Please enter initial approximation of Z`));
        let x_new=0,y_new=0,z_new=0;
        if (i == 0){
            window.alert(`Iteration size can not be negative/empty/zero`)
        }
        else{
            for (i; i >= 0; i--) {
                x_new = (-1/a11)*(a12*y+a13*z-b1);
                y_new = (-1/a22)*(a21*x+a23*z-b2);
                z_new = (-1/a33)*(a31*x+a32*y-b3);
                x = x_new;
                y = y_new;
                z = z_new;
            }
            document.getElementById("X").textContent = `${x_new}`;
            document.getElementById("Y").textContent = `${y_new}`;
            document.getElementById("Z").textContent = `${z_new}`;
        }
        
    }
    
    else if(document.getElementById("method").value == "seidel"){
        window.alert("You selected Gauss-Seidel Method");
        let iteration = Number(window.prompt(`Please enter the number of iteration`));
        let x = Number(window.prompt(`Please enter initial approximation of X`));
        let y = Number(window.prompt(`Please enter initial approximation of Y`));
        let z = Number(window.prompt(`Please enter initial approximation of Z`));
        if (iteration == 0){
            window.alert(`Iteration size can not be negative/empty/zero`)
        }
        else{
            for (iteration; iteration >= 0; iteration--) {
                x = (-1/a11)*(a12*y+a13*z-b1);
                y = (-1/a22)*(a21*x+a23*z-b2);
                z = (-1/a33)*(a31*x+a32*y-b3);
            }
            document.getElementById("X").textContent = `${x}`;
            document.getElementById("Y").textContent = `${y}`;
            document.getElementById("Z").textContent = `${z}`;
        }
    }

    else if(document.getElementById("method").value == "lud"){
		window.alert("CURRENTLY UNDER DEVELOPMENT");
    }
    
    else{
        window.alert("Please select a method");
    }
}

document.getElementById("reset").onclick = function() {
    window.location.reload();
}