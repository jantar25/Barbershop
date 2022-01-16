const amount = document.getElementById('Amount')
const tel = document.getElementById('Telephone')
const form = document.getElementById('form')
const errorText = document.getElementById('error')


form.addEventListener('submit',(e)=>{
    let messages=[];

    if (tel.value.length !== 10 ){
        messages.push('A telephone number must have only 10 digits')
    }

    if (amount.value === "" || amount.value === null){
        messages.push('Please Enter the Amount paid Clearly')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorText.innerText = messages.join(",")
    }
})