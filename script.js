let btn = document.querySelector('.btn1')
let trigger = true

btn.addEventListener('click', (e) => {
    if(trigger){
        if(e.target){
            document.body.style.background = 'white'
            document.body.style.color = 'black'

            trigger = false
        }
    }else{
        if(e.target){
            document.body.style.background = 'black'
            document.body.style.color = 'white'
            trigger = true

        }

    }
})