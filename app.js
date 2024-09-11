
//console.log("boss");

const all_btn=document.getElementsByClassName("allbtn");
let count=0;
let seatcapticity=40;
for(const btn of all_btn){
    //seat_left
    btn.addEventListener("click",function(e){
        count=count+1;
        const seatleft=seatcapticity-count;





        setInnerText("booked_seat",count);
        setInnerText("seat_left",seatleft);

})

}


    


function setInnerText(id,value){
    document.getElementById(id).innerText=value;
}
