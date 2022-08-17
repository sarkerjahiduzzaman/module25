document.getElementById('submit-btn').addEventListener('click',function(){
    const text=document.getElementById('input-text')
    const getText=text.value;
    console.log(getText)
    const btn=document.getElementById('submit-btn')
    if(getText=='delete')
    {
        console.log('jahid')

        btn.removeAttribute('disabled')
    }

})