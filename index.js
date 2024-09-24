

//  noakhali donate button

document.getElementById('noakhali-donate-btn').addEventListener('click', function(){
   const noakhaliAmount = parseFloat(document.getElementById('noakhali-amount').value);

   
   const noakhaliDonateAmount = parseFloat(document.getElementById('noakhali-donate-amount').innerText);

   if(noakhaliAmount < 0 || isNaN(noakhaliAmount) || noakhaliAmount > noakhaliDonateAmount || noakhaliAmount===""){
      alert('Invalid Donation Amount');
      document.getElementById('my_modal_1').close();
      return;
   }
   const title = document.getElementById('noakhali-title').innerText;
   const balance = noakhaliAmount + noakhaliDonateAmount;
    
    
   const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
   const myBalance = mainBalance - noakhaliAmount;


   document.getElementById('main-balance').innerText = myBalance;

   document.getElementById('noakhali-donate-amount').innerText = balance;

   addToHistory(noakhaliAmount, title)
});

// feni donate button

document.getElementById('feni-donate-btn').addEventListener('click', function(){
    const feniAmount = parseFloat(document.getElementById('feni-amount').value);
    
    const feniDonateAmount = parseFloat(document.getElementById('feni-donate-amount').innerText);

    if(feniAmount < 0 || isNaN(feniAmount) || feniAmount > feniDonateAmount || feniAmount===""){
      alert('Invalid Donation Amount');
      document.getElementById('my_modal_2').close();
      return;
   };

    const title = document.getElementById('feni-title').innerText;
    const balance = feniAmount + feniDonateAmount;
     
     
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const myBalance = mainBalance - feniAmount;
 
    
    document.getElementById('main-balance').innerText = myBalance;
 
    document.getElementById('feni-donate-amount').innerText = balance;

    addToHistory(feniAmount, title);
 
});
// quota donate button

 document.getElementById('quota-donate-btn').addEventListener('click', function(){
    const quotaAmount = parseFloat(document.getElementById('quota-amount').value);
    const quotaDonateAmount = parseFloat(document.getElementById('quota-donate-amount').innerText);

    if(quotaAmount < 0 || isNaN(quotaAmount) || quotaAmount > quotaDonateAmount || quotaAmount===""){
        alert('Invalid Donation Amount');
        document.getElementById('my_modal_3').close();
        return;
     };
    const title = document.getElementById('quota-title').innerText;

    const balance = quotaAmount + quotaDonateAmount;
     
     
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const myBalance = mainBalance - quotaAmount;
 
    
    document.getElementById('main-balance').innerText = myBalance;
 
    document.getElementById('quota-donate-amount').innerText = balance;

    addToHistory(quotaAmount, title);
 });


//  toggole features

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

   document.getElementById("card-section").classList.add("hidden");
    document.getElementById("history-list").classList.remove("hidden");
    
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

    document.getElementById("card-section").classList.remove("hidden");
     document.getElementById("history-list").classList.add("hidden");

 }


 function addToHistory(donateAmount, title){
   const historyItem = document.createElement('div');
   historyItem.className = "w-11/12 mx-auto bg-white p-3 border border-solid border-slate-200 rounded-lg space-y-3 mb-5";


   historyItem.innerHTML = `
    <p class="font-bold text-2xl">${(donateAmount)} Taka is ${(title)}</p>
    <p class="text-secondary">Date: ${new Date()}</p>
   `;
   const historyContainer = document.getElementById('history-list');
     historyContainer.insertBefore(historyItem, historyContainer.firstChild);
 }