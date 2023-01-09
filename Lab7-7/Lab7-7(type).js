// <!-- In the following lab, you will use the Date object to access and use date information in your scripts. Suppose you work on the Web team for a retail site that offers several different coupon codes at any given time. Each coupon offers a different discount on different items, and they all have different expiration dates — always expiring at midnight Pacific Time, your headquarters' time zone. Because the coupons are available on the home page and are so frequently used, your customer service desk says they sometimes get complaints when customers try to use coupons that have already expired. Although checking the expiration is the customer's responsibility, you think it might help to provide a reminder of the date and the site's local time upfront, so customers can check it against the coupons and avoid any frustration. You use JavaScript to post this information on the site's home page, right above the link to the coupons, with the message: "When does your coupon expire?" -->

var monthName = new Array();
monthName[0] = "January";
monthName[1] = "February";
monthName[2] = "March";
monthName[3] = "April";
monthName[4] = "May";
monthName[5] = "June";
monthName[6] = "July";
monthName[7] = "August";
monthName[8] = "September";
monthName[9] = "October";
monthName[10] = "November";
monthName[11] = "December";
var date = new Date();
var myDay = date.getDate();
var myYear = date.getFullYear();

if(myDay == 1 || myDay == 21 || myDay == 31)
{
    myDay += "st";
}
 else if(myDay == 2 || myDay == 22)
{
    myDay += "nd";
}
 else if(myDay == 3 || myDay == 23)
{
    myDay += "rd";
}
else{
    myDay += "th"
}

console.log(`Good morning! This is the ${myDay} of the month of ${monthName[date.getMonth()]} in the year of ${myYear}`);
console.log(`The month number is: ${(date.getMonth()) + 1}`);
console.log(`The date number is: ${myDay}`);
console.log(`The year number is: ${myYear}`);

