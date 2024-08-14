let database = [
    {
        name: 'Jafar Dahodwala',
        email: 'jafardahod7@gmail.com',
        contact: 7984476688,
        password: 'jafar123'
    },
    {
        name: 'Aliasgar Dahodwala',
        email: 'alidahod7@gmail.com',
        contact: 7045015322,
        password: 'aliasgar123'
    },
]
let btn = document.querySelector('.btn1')
let trigger = true

btn.addEventListener('click', (e) => {
    if(trigger){
        if(e.target){
            document.body.style.background = 'black'
            document.body.style.color = 'white'
            btn.innerHTML = 'Light Mode'

            trigger = false
        }
    }else{
        if(e.target){
            document.body.style.background = 'white'
            document.body.style.color = 'black'
            btn.innerHTML = 'Dark Mode'
            trigger = true

        }

    }
})

let form = document.querySelector('form')


form.addEventListener('submit', (e) => {
    let flag = false
    e.preventDefault()
    if(e.target.pas.value !== e.target.cpas.value){
        alert("Password And Confirm Password Should be Equal")
    }else{
        for (let i = 0; i < database.length; i++){
            if(database[i].name == e.target.name.value || database[i].email == e.target.email.value){
                flag = true
            }
        }
        if(flag){
            alert("User Already Exists")
        }
        else{

            pushdata(e.target.name.value, e.target.email.value, e.target.number.value, e.target.pas.value)
        }
    }
    
})

function pushdata(Name, Email, Number, Password){
    let newobject = {
        name: Name,
        email: Email,
        contact: Number,
        password: Password
    }

    database.push(newobject)

    console.log(database)
}