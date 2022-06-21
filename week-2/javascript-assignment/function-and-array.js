function max(numbers) {
    // your code here
    //假設第一個為最大
    var max_num = numbers[0];
    //從第二項開始
    for ( var i = 1; i < numbers.length; i++){
        //假設這一樣比原本的還要大
        if ( numbers[i] > max_num) { 
            //這一項為新的最大值
            max_num = numbers[i];
        }
    }
    // 回復最大值
  return max_num;
}

max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7