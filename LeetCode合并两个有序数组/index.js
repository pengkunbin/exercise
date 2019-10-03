const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n = 3

const merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i]
    }
    nums1 = nums1.sort(sortNum)
    while (nums1[0] == 0 && nums1.length > m + n) {
        nums1.shift()
    }
    return nums1
}
console.log(merge(nums1, m, nums2, n))


var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length-m)
    nums2.slice(0, n).forEach(value => {
        const index = nums1.findIndex(num => num > value)
        if(index < 0){
          nums1.splice(nums1.length, 0, value)
        } else {
          nums1.splice(index, 0, value)
        }
    })
}
