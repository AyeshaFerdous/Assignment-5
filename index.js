
function blogBtnClick(){
   let url = "http://127.0.0.1:5500/blog.html";
   window.location.assign(url);
}

function homeBtnClick(){
    let url = "http://127.0.0.1:5500/index.html";
    window.location.assign(url);
 }

//  noakhali donate button

document.getElementById('noakhali-donate-btn').addEventListener('click', function(){
   const noakhaliAmount = parseFloat(document.getElementById('noakhali-amount').value);
   
   const noakhaliDonateAmount = parseFloat(document.getElementById('noakhali-donate-amount').innerText);

   const balance = noakhaliAmount + noakhaliDonateAmount;
    
    
   const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
   const myBalance = mainBalance - noakhaliAmount;


   document.getElementById('main-balance').innerText = myBalance;

   document.getElementById('noakhali-donate-amount').innerText = balance;
});

// feni donate button

document.getElementById('feni-donate-btn').addEventListener('click', function(){
    const feniAmount = parseFloat(document.getElementById('feni-amount').value);
    
    const feniDonateAmount = parseFloat(document.getElementById('feni-donate-amount').innerText);
 
    const balance = feniAmount + feniDonateAmount;
     
     
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const myBalance = mainBalance - feniAmount;
 
    
    document.getElementById('main-balance').innerText = myBalance;
 
    document.getElementById('feni-donate-amount').innerText = balance;
 });

// quota donate button

 document.getElementById('quota-donate-btn').addEventListener('click', function(){
    const quotaAmount = parseFloat(document.getElementById('quota-amount').value);
    
    const quotaDonateAmount = parseFloat(document.getElementById('quota-donate-amount').innerText);
 
    const balance = quotaAmount + quotaDonateAmount;
     
     
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const myBalance = mainBalance - quotaAmount;
 
    
    document.getElementById('main-balance').innerText = myBalance;
 
    document.getElementById('quota-donate-amount').innerText = balance;
 });

const historyTab = document.getElementById('history-btn');
const donationTab = document.getElementById('donation-btn');

historyTab.addEventListener('click', function(){
    tabSwitchHistory(historyTab, donationTab);
})
donationTab.addEventListener('click', function(){
    tabSwitchDonation(historyTab, donationTab)
})
function  tabSwitchHistory(id, donationId){
   id.classList.add(
    "bg-primary", 
   )
   id.classList.remove(
   "text-secondary",
    "border",
    "border-solid" ,
   "border-slate-200",
   )
   donationId.classList.remove(
    "bg-primary",
   )

   donationId.classList.add(
         
    "text-secondary",
    "border",
    "border-solid" ,
   "border-slate-200",
   )
}

function  tabSwitchDonation(donationId, id){
    donationId.classList.remove(
     "bg-primary", 
    )
    donationId.classList.add(
    "text-secondary",
     "border",
     "border-solid" ,
    "border-slate-200",
    )
    id.classList.add(
     "bg-primary",
    )
 
    id.classList.remove(
          
     "text-secondary",
     "border",
     "border-solid" ,
    "border-slate-200",
    )
 }
