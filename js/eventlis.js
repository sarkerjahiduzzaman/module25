function changetext1(){
    const chageText=document.getElementById('defaulttext');
    chageText.innerText="This work for first button"
    chageText.style.backgroundColor='yellow'

}
function changetext2(){
    const chageText=document.getElementById('defaulttext');
    chageText.innerText="This work for second button";
    chageText.style.backgroundColor='orange'
}


document.getElementById('updatebtn').addEventListener('click',
function(){
    const getInput=document.getElementById('inputid');
    console.log(getInput)
   const getText=getInput.value;
   console.log(getText)
   
    const p=document.getElementById('headtext')
    p.innerText=getText   
})
//comment-box
document.getElementById('submit-id').addEventListener('click',function(){
    //connect comment box
    const commentText=document.getElementById('comment-box');
    //get comment box text
    const getText=commentText.value;
    //console.log(getText)
    //create p tag and set text comment box text
    const p=document.createElement('p');
    p.innerText=getText;
    //connet previous comment
    const addComment=document.getElementById('comment-id');
    addComment.appendChild(p)
    //console.log(addComment.appendChild(p))
    commentText.value='';
})