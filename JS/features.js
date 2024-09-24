function showSectionById(id){
    document.getElementById('donate-frm').classList.add('hidden');
    document.getElementById('history-frm').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');

}
document.getElementById('donate-btn').addEventListener('click',function(){
    showSectionById('donate-frm');
})
document.getElementById('history-btn').addEventListener('click',function(){
    showSectionById('history-frm');
})