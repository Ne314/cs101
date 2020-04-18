function setup() {
  createCanvas(500, 500);
  background(27, 16);
  translate(width/2, height/2);
  
  spiral(10, 0.4, 27, 2, [255, 153, 157], 1.5);
  
}

let a = 0;
let c = 0;


function spiral (e, q, n, r, crl, sw){
  
  for(let i = 0; i < n; i++){   
    e = e + 15;
    q = q * 1.16;
    
      for(let i = 0; i < 5; i++){
        strokeWeight(sw);
        push();   
          stroke(crl[0] - c, crl[1], crl[2]);
          c = c + r;
          rotate(radians(e+a));
          line ((-14.5) * q ,(-20) * q,14.5 * q,(-20) * q);
        pop();
        a = a + 72;
      }
    }
  return q; 
}
