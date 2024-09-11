
//console.log("boss");

const all_btn=document.getElementsByClassName("allbtn");
let count=0;
let seatcapticity=40;
const ticketClass="Economy";
const seatPrice=550;
for(const btn of all_btn){
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
       
        if(count>6){
            alert("Maximum limit done");
            disablebtn();
            return;
            
        }
        div.appendChild(p3);
        div.appendChild(p1);
        div.appendChild(p2);
        ticket_info.appendChild(div);

        

        //<p>BDT <span id="TOTAL_PRICE">0</span></p>
        const totalprice=document.getElementById("TOTAL_PRICE").innerText;
        const convertedprice=parseInt(totalprice);
        const TOTAL=convertedprice+seatPrice;

        //GRAND_TOTAL
        const grandtotal=document.getElementById("GRAND_TOTAL").innerText;
        const convertedprice1=parseInt(grandtotal);
        const TOTAL1=convertedprice1+seatPrice;
        
        

        



        





        setInnerText("booked_seat",count);
        setInnerText("seat_left",seatleft);
        setInnerText("TOTAL_PRICE",TOTAL);
        setInnerText("GRAND_TOTAL",TOTAL1);


})

}


function disablebtn(){
const all_btn=document.getElementsByClassName("allbtn");
for(const btn of all_btn){
    btn.setAttribute("disabled", true);
}


} 


function setInnerText(id,value){
    document.getElementById(id).innerText=value;
}
