/**
 *  partition原则
 *  分区
 *  
    1.先从数组中选择一个中间项作为主元
    2.创建两个指针，左边一个指向数组第一个项，右边一个指向数组最后一个项。移动左指针直到我们找到一个比主元大的元素，接着移动右指针直到找到一个比主元小的元素，然后交换他们，重复这个过程，直到左指针超过了右指针便停止。这个过程使得比主元小的值都排在主元左边，比主元大的值都排在主元右边，这一步就做划分操作
    3.接着继续划分数组，制定主元
 *
 */

function swap(array, left, right) {
    let mid
    mid = array[right]
    array[right] = array[left]
    array[left] = mid
}

function partition(arry, L, R) {
    const pointer = arry[Math.floor((L + R) / 2)]
    let left = L
    let right = R


    while (left <= right) {
        while (array[left] < pointer) {
            left++
        }
        while (array[right] > pointer) {
            right--
        }
        if (left <= right) {
            swap(array, left, right)
            left++
            right--
        }
    }
    return left
}

function quick(arry, left, right) {
    let index
    if (arry.length > 1) {
        index = partition(arry, left, right)
        if (left < index - 1) {
            quick(array, left, index - 1)
        }
        if (index < right) {
            quick(array, index, right)
        }
    }
    return array
}

function quickSort(array) {
    return quick(array, 0, array.length - 1)
}

const array = [1, 9, 5, 8, 8, 456, 55, 13, 13, 2, 32, 131, 56, 48, 6, 32, 68444, 43]

quickSort(array)