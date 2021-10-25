function multiply(n){ 
    let x = [];
    for (let i = 0; i <= n; i++){
        x[i] = [];
        for (let y = 0; y <= n; y++){
          x[i] [y] = i * y
        }
    }
    console.table (x)
}multiply (15) 
