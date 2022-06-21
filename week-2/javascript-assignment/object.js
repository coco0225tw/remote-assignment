function calculate(args) {
    // your code here
    if ( args.op != "+" && args.op != "-" ) {
        return "Not supported"
    }
      //eval的參數須為string
    return eval(`${args.n1} ${args.op} ${args.n2}`);
}

calculate({ n1: 2, n2: 3, op: '+' }); // result to 5
calculate({ n1: 5, n2: 2, op: '-' }); // result to 3
calculate({ n1: 1, n2: 6, op: 'x' }); // result to 'Not supported'