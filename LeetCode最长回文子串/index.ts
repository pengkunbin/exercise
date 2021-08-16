function longestPalindrome(s: string): string {
    if (s === null || s.length < 2) return s;

    let result = 0;
    const sArry = s.split('');
    sArry.forEach((orderString, orderIndex) => {
        sArry.reverse().forEach((reverseString, reverseIndex) => {
            if(orderString === reverseString){

            }
        });
    })
};

