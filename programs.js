///palindrome....
/* var n = prompt("Enter your number");
var rev = 0;
var num = n;
while(num>0)
{
    var r = num%10;
    var rev = rev*10 + r;
    num = parseInt(num/10);
}

if(rev == n)
{
    alert(rev+" Palindrome");
}
else
{
    alert(rev+" Not palindrome");
} */

/// bubble sort

/*var a =[]
var n = 5;

for(var i=0;i<n;i++){
    a.push( prompt(i+1));
}

for(var i=0;i<n;i++)
{
    for(var j=0;j<n-i-1;j++)
    {
        if(a[j]>a[j+1])
        {
           var temp = a[j];
           a[j] = a[j+1];
           a[j+1] = temp;
        }
    }
}


console.log(a); */

///binary search

/* var ar = []
var n = 6;

for(var i=0;i<n;i++)
{
    ar.push(prompt(i+1));
}

var l = 1,h = ar.length,mid;
var key = prompt();
while(l<=h)
{
    var mid = parseInt((l+h)/2);
if(ar[mid]<key)
{
    l = mid+1;
}
else if(ar[mid]===key)
{
    console.log(ar+" Key found at "+(mid+1))
    break;
}
else{
    h = mid-1;
}

}

if(l>h)
{
    console.log("Element not found");
} */



