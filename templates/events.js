function mouse_event(){
    var b1= document.querySelector('#box1')
    var b2= document.querySelector('#box2')
    b1.addEventListener('mouseover', ()=> {
        b1.style.backgroundColor = 'green'
        b2.style.backgroundColor = 'red'
    })
    b1.addEventListener('mouseout', ()=> {
        b1.style.backgroundColor = '#f9f6f6'
        b1.style.backgroundColor = 'f9f6f6'
    })
}

function keybord_event(){
    var body= document.querySelector('body')
    var b2 =document.querySelector('#box2')
    body.addEventListener('keydown',(event)=>{
        b2.innerHTML = event.key
        b2.style.backgroundColor='#ff5489'
        b2.style.color ='white'
        b2.style.fontSize ='1.5rem';
    })
    body.addEventListener('keyup',()=>{
        b2.innerHTML = '👍'
        b2.style.backgroundColor='#f9f6f6'
        b2.style.color ='black'
        b2.style.fontSize ='4rem';
    })
}

function input_events(){
    //focus and blur event
    var inputs = document.querySelectorAll('.form-control')
    var b4 = document.querySelector('#box4')
    inputs.forEach((input) => {
        input.addEventListener('focus', () =>{
            input.style.backgroundColor='#ff8442'
        })
        input.addEventListener('blur', () =>{
            input.style.backgroundColor='white'
            b4.innerHTML=input.value
        })
    })
}

    function form_events()
    {
        var form= document.querySelector('form')
        form.addEventListener(('submit'), (event)=>{
            event.preventDefault()
        })
    }

// calling the  function
mouse_event()
keybord_event()
input_events()
