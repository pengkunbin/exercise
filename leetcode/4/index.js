/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var number = nums1.concat(nums2);
    number.sort(function (a, b) { return a - b });
    return number.length % 2 === 0 ? (number[number.length / 2] + number[(number.length / 2) - 1]) / 2 : number[Math.floor(number.length / 2)];
};
var number1 = [3]
var number2 = [-1, -2]
console.log(findMedianSortedArrays(number1, number2));