// https://github.com/MusiurAlamOpu/Assignment3ProgrammingHero
// this is the first function
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        return "\nWarning: Please Enter a positive number on next time. Because Distance can not be negetive!";
    }else{
        return kilometer*1000;
    }
}
//This is the second function
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop){
    if(numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0){
        return "\nWarning: Number of gadgets(Phone, Watch, Laptop) can not be negetive!";
    }else{
        return ((numberOfWatch*50)+(numberOfPhone*100)+(numberOfLaptop*500));
    }
}
//This is the third fucntion
function hotelCost(stayingDays){
    if(stayingDays < 0){
        return "\nWarning: Number of days cannot be less than zero or negetive at all. Please enter a valid days number on next time!";
    }else if(stayingDays < 11){
        return stayingDays * 100;
    }else if(stayingDays < 18){
        afterTenDays = stayingDays - 10;
        return (1000 + (afterTenDays * 80));
    }else{
        afterSeventeenDays = stayingDays - 17;
        return (1560 + (afterSeventeenDays * 50));
    }
}
//This is the fourth and last function
function megaFriend(friendsNames){
    if(friendsNames.length < 2){
        return "\nWarning: Please Enter at least two friends names on next time!"
    }
    let largestNameLength = 0;
    var largestNameIndexInArray;
    for(var i = 0; i < friendsNames.length; i++){
        if(friendsNames[i].length > largestNameLength){
            largestNameLength = friendsNames[i].length;
            largestNameIndexInArray = i;
        }
    }
    return friendsNames[largestNameIndexInArray];
}
// ///////////////////////////////////////////////////////////////////
// // Driver section for testing the functions
// //case:1 with invalid input parameters expecting for error messages.
// console.log(kilometerToMeter(-1));
// console.log(budgetCalculator(-4, 3, 4));
// console.log(hotelCost(-12));
// let myFriendsNameArray = ["Tamim Iqbal"];
// console.log(megaFriend(myFriendsNameArray));
// // //case:2 with valid input parameters expecting return values for
// // 7000 from kilometerToMeter
// // 2400 from budgetCalculator
// // 1710 from HotelCost
// // Musiur Alam Opu from megaFriend
// console.log(kilometerToMeter(7));
// console.log(budgetCalculator(2, 3, 4));
// console.log(hotelCost(20));
// let myFriendsNameArray1 = ["Tamim Iqbal", "Musiur Alam Opu", "Sakib-Al-Hasan"];
// console.log(megaFriend(myFriendsNameArray1));
// // Here is the ending of the code