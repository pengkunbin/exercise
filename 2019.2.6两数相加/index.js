function ListNode(val)
{
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1,l2){
    var mylist1 = l1;
    var mylist2 = l2;
    var c3;
    var l3;
    var carry = 0;
    while(mylist1 || mylist2|| carry){
        var value1 = 0;
        var value2 = 0;
        var sum = 0;
        if(mylist1)
        {
            value1 = mylist1.val;
            mylist1 = mylist1.next;            
        }
        if(mylist2)
        {
            value2 = mylist2.val;
            mylist2 = mylist2.next;
        }
        sum = value1 + value2 + carry;
        carry = Math.floor(sum / 10);
        // console.log('value1:'+value1,'value2:'+value2);
        console.log(sum);
        if (!c3) {
            l3 = new ListNode(sum % 10);
            c3 = l3;
          } else {
            c3.next = new ListNode(sum % 10);
            c3 = c3.next;
          }
        console.log(l3)
    }
    return l3;
}

var list1 = {
    val:2,
    next:{
        val:4,
        next:{
            val:3,
            next:null
        }
    }
}

var list2 = {
    val:5,
    next:{
        val:6,
        next:{
            val:4,
            next:null
        }
    }
}

var a = addTwoNumbers(list1,list2)
console.log(a);