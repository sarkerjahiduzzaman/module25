console.log('This is an event litchener');
//second method 
function method2()
{
    document.body.style.backgroundColor='blue'
}
function makered()
{
    document.body.style.backgroundColor='red'
}
//Third method
const redButton=document.getElementById('redbtn')
redButton.onclick=makered;
//fourth method
const yollowButton=document.getElementById('ybtn')
yollowButton.onclick=function(){
    document.body.style.backgroundColor='yellow'
}
//Add Event litchener
const another=document.getElementById('anothercolor').addEventListener('click',function(){
    document.body.style.backgroundColor='blue'
})