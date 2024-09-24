document.getElementById('btn-noakhali').addEventListener('click',function(){
    // event.preventDefault();

    const floodNoakhali=getInputValueById('flood-noakhali');
    const accountBalance=getInputValueById('account-balance');
    const noaKhaliCollection=getInputValueById('noakhali-col');

    if (floodNoakhali<accountBalance) {
        const newAccBal= accountBalance-floodNoakhali;
        document.getElementById('account-balance').innerText= newAccBal;

        div.classList.add('my-2');
        div.classList.add('border-2');
        div.classList.add('border-solid');
        div.classList.add('p-4');
        div.innerHTML=`
        <h4> ${donateAmount} Taka has been donated </h4>
        <p> Date: ${new Date().toString()} </p>
    `
    
    document.getElementById('history_transaction').appendChild(div);
    } 
    else {
        alart('Please try again.')
    }

    const totalCollection=floodNoakhali+noaKhaliCollection;
    document.getElementById('noakhali-col').innerText= totalCollection
})