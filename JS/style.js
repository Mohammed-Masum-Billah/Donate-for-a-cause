document.getElementById('btn-noakhali').addEventListener('click',function(){
    // event.preventDefault();

    const floodNoakhali=getInputValueById('flood-noakhali');
    const accountBalance=getTextValueById('account-balance');
    const noaKhaliCollection=getTextValueById('noakhali-col');  
    if(isNaN(donateAmount)){
        alert('Please Enter valid number')
        return;  

    }
    if (floodNoakhali<accountBalance) {
        const newAccBal= accountBalance-floodNoakhali;
        document.getElementById('account-balance').innerText= newAccBal;

        // div.classList.add('my-2');
        // div.classList.add('border-2');
        // div.classList.add('border-solid');
        // div.classList.add('p-4');
        // div.innerHTML=`
        // <h4> ${donateAmount} Taka is donated for ${donateText} </h4>
        // <p> Date: ${new Date().toString()} </p>
        // `
        
        // document.getElementById('history_trans').appendChild(div);
    } 
    else {
        alert('Please try again.')
    }

    const totalCollection=floodNoakhali+noaKhaliCollection;
    document.getElementById('noakhali-col').innerText= totalCollection;

})

// Feni Flood

document.getElementById('btn-feni').addEventListener('click',function(){
    // event.preventDefault();

    const floodFeni=getInputValueById('flood-feni');
    const accountBalance=getTextValueById('account-balance');
    const feniCollection=getTextValueById('feni-col');   
    if(isNaN(donateAmount)){
        alert('Please Enter valid number')
        return; 

    }
    if (floodFeni<accountBalance) {
        const newAccBal= accountBalance-floodFeni;
        document.getElementById('account-balance').innerText= newAccBal;

    //     div.classList.add('my-2');
    //     div.classList.add('border-2');
    //     div.classList.add('border-solid');
    //     div.classList.add('p-4');
    //     div.innerHTML=`
    //     <h4> ${donateAmount} Taka is donated for ${donateText} </h4>
    //     <p> Date: ${new Date().toString()} </p>
    //     `
        
    //     document.getElementById('history_trans').appendChild(div);
    } 
    else {
        alert('Please try again.')
    }

    const totalCollection=floodFeni+feniCollection;
    document.getElementById('feni-col').innerText= totalCollection;

})

// Quota-movement

document.getElementById('btn-quota').addEventListener('click',function(){
    // event.preventDefault();

    const quotaMovement=getInputValueById('protest-quota');
    const accountBalance=getTextValueById('account-balance');
    const quotaMovementCollection=getTextValueById('quota-protest-col');   
    if(isNaN(donateAmount)){
        alert('Please Enter valid number')
        return;
    } 

    if (quotaMovement<accountBalance) {
        const newAccBal= accountBalance-quotaMovement;
        document.getElementById('account-balance').innerText= newAccBal;

    // div.classList.add('my-2');
    // div.classList.add('border-2');
    // div.classList.add('border-solid');
    // div.classList.add('p-4');
    // div.innerHTML=`
    // <h4> ${donateAmount} Taka is donated for ${donateText} </h4>
    // <p> Date: ${new Date().toString()} </p>
    // `
    
    // document.getElementById('history_trans').appendChild(div);
    } 
    else {
        alert('Please try again.')
    }

    const totalCollection=quotaMovement+quotaMovementCollection;
    document.getElementById('quota-protest-col').innerText= totalCollection;

})