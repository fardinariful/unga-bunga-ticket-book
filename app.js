
//console.log("boss");

const all_btn=document.getElementsByClassName("allbtn");
let count=0;
let seatcapticity=40;
const ticketClass="Economy";
const seatPrice=550;
for(const btn of all_btn){
    //seat_left
    btn.addEventListener("click",function(e){
        const seatname=e.target.innerText;
        count=count+1;
        const seatleft=seatcapticity-count;
        
        const ticket_info=document.getElementById("ticket_info");
        const div=document.createElement("div");
        div.classList.add("flex","justify-evenly","w-full")
        const p3=document.createElement("p");
        p3.innerText=seatname;
        const p1=document.createElement("p");
        p1.innerText=ticketClass;
        const p2=document.createElement("p");
        p2.innerText=seatPrice;
        
        div.appendChild(p3);
        div.appendChild(p1);
        div.appendChild(p2);
       

        ticket_info.appendChild(div);

        





        setInnerText("booked_seat",count);
        setInnerText("seat_left",seatleft);

})

}


    


function setInnerText(id,value){
    document.getElementById(id).innerText=value;
}
