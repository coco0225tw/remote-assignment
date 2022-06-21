function twoSum(nums, target) {
    //每一項和它後面的項相加, 就不會重複了

    //第0項
    for ( i = 0; i < nums.length; i++) {
        //和第1, 2, 3 相加
        for ( j = i + 1; j< nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                return [nums[i], nums[j]]
            }
        }
    }
}

twoSum([2, 7, 11, 15], 9);