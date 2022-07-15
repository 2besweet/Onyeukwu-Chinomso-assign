/**Given an array of integers nums and an integer target, create a function that returns the two
numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the
same element twice.
Example:
Input: nums = [2,7,11,15], target = 9
Output: [2,7]
Explanation: Because 2 + 7 == 9, we return [2, 7]
Constraints:
You can return the answer in any order
Only one valid answer exists
Please create a public repository on GitHub containing your source code, and submit the
GitHub link. We would like to ask you to strictly avoid mentioning paradigm initiative in
your GitHub repository. Feel free to add comments and more information in your
README file as desired
PS: The solution to this algorithm challenge must be written in either Javascript or PHP.**/


function twoSum(arr, target) {
    for(let i=0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == target) {
                return[i,j]
            }
        }
    }
}


const nums1 =[2,7,11,15]

console.log(twoSum(nums1, 9)) //[0,1]