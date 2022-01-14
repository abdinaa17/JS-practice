
function twoSum(nums, target) {

   let hashMap = {};

   for (let i = 0; i < nums.length; i++) {

    hashMap[nums[i]] = i;

   }
   
   for (let i = 0; i < nums.length; i++) {

        let compliment = target - nums[i];

        if(hashMap[compliment] && hashMap[compliment] !== i ) {
            return [i, hashMap[compliment]]
        }

   }

}
