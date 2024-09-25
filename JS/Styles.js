document.getElementById('btn-noakhali'),addEventListener('click',function () {
    const floodNoakhali=getInputValueById('flood-noakhali');
    const accountBalance=getTextValueById('account-balance');
    const noakhaliCollection=getTextValueById('noakhali-col');
    if (isNaN(floodNoakhali)) {
        alert('Please enter amounts only');
        return;
    }

    if (floodNoakhali<accountBalance) {
        const newAccBal=accountBalance-floodNoakhali;
        document.getElementById('account-balance').innerText=newAccBal;

        const totalCollection=floodNoakhali+noakhaliCollection;
        document.getElementById('noakhali-col').innerText= totalCollection;

        const donateText=getTextById('donation-title');
        const div=document.createElement('div');
        div.classList.add('my-2');
        div.classList.add('border-2');
        div.classList.add('border-solid');
        div.classList.add('p-4');
        div.innerHTML=`<h4> ${floodNoakhali} Taka donated for ${donateText} </h4>
        <p> Date:${new Date().toString()} </p>`

        document.getElementById('history-trans').appendChild(div);

    } else {
        alert('Please try again.')        
    }

    
})

// Feni

document.getElementById('btn-feni').addEventListener('click',function () {
    const floodFeni=getInputValueById('flood-feni');
    const accountBalance=getTextValueById('account-balance');
    const feniCollection=getTextValueById('feni-col');

    if (isNaN(floodFeni)) {
        alert('Please enter amounts only.')
        return;
    }

    if (floodFeni<accountBalance) {
        
        const newAccBal=accountBalance-floodFeni;
        document.getElementById('account-balance').innerText= newAccBal;

        const totalCollection=floodFeni+feniCollection;
        document.getElementById('feni-col').innerText=totalCollection;

        const donateText=getTextById('feni-title');
        const div=document.createElement('div');
        div.classList.add('py-2');
        div.classList.add('border-2')
        div.classList.add('boder-solid')
        div.classList.add('p-4')
        div.innerHTML=`<h4> ${floodFeni} Taka donated for ${donateText} </h4>
        <p> Date: ${new Date().toString()} </p>`

        document.getElementById('history-trans').appendChild(div);

    } else {
        alert('PLease try again.')
    }

})


// Quota Movement


document.getElementById('btn-quota').addEventListener('click',function () {
    const quotaMovement=getInputValueById('protest-quota');
    const accountBalance=getTextValueById('account-balance');
    const quotaCollection=getTextValueById('ququota-protest-col');

    if (isNaN(quotaMovement)) {
        alert('Please enter amounts only.');
        return;
    }

    if (quotaMovement<accountBalance) {
        const newAccBal=accountBalance-quotaMovement;
        document.getElementById('account-balance').innerText= newAccBal;

        const quotaAid=quotaMovement+quotaCollection;
        document.getElementById('quota-protest-col').innerText=quotaAid;

        const donateText=getTextById('quota-aidititle');
        const div= document.createElement('div');
        div.classList.add('py-2');
        div.classList.add('border-2');
        div.classList.add('border-solid');
        div.classList.add('p-4');
        div.innerHTML=`<h4> ${quotaMovement} Taka donated for ${donateText} </h4>
        <p> Date: ${new Date().toString()} </p>`

        document.getElementById('history-trans').appendChild(div);

    } else {
        alert('Please try again.')
    }


})