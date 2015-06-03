var Euler004 = {

    isPalindrome: function(num) {
        var bool=true;
        if (num===undefined) {return false;}
        var num_arr = num.toString().split('');         //console.log(num_arr);
        for (var i=0,l=num_arr.length; i<(l-i); i++) {  //console.log(i, num_arr[i], num_arr[l-1-i]);
            if (num_arr[i] !== num_arr[l-1-i]) {
                bool=false; break;
            }
        }
        return bool;
    },
    getSeed: function(digits) {
        var numstr = '';
        for (var i=0; i<digits; i++) {
            numstr+='9';
        }
        return Number(numstr);
    },
    getLargestPalindrome: function(num) {    //Find the largest palindrome made from the product of two 3-digit numbers
        var pal_arr = [];
        var ii = Euler004.getSeed(num);
        var jj = Euler004.getSeed(num);
        for (var i=ii; i>=1; i--) {
            for (var j=jj; j>=1; j--) {                //
                //console.log(i, j, i*j); 
                //if (pal_arr.length>0) {break;}
                if (Euler004.isPalindrome(i*j)) {
                    pal_arr.push(i*j);
                    //if (pal_arr.length>0) {break;}
                }
            }
        }
        //document.querySelector('input[name=answer]').value = sum;  
        pal_arr.sort(function(a, b){return b-a;});  // numeric sort

        //console.log(pal_arr);
        return pal_arr[0];
    }
    
};
console.log("FOOBAR!!!!!!!!!!!!!!!!!!!!!");
//console.log(Euler004.isPalindrome());
console.log(Euler004.getLargestPalindrome(3));   //906609 = 993 * 913
