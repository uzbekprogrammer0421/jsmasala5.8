const  create =(e)=>{
    e.preventDefault();
    let input = e.target[0].value.split("")
    console.log(input);
    let count = []
    let count2 = []
    let result = "Teng emas"
    for (let i = 0; i < input.length; i++) {
        if (input[i]=='(') {
            count.push(input[i])
        }
        else if (input[i]==')') {
            count2.push(input[i])
        }
    }
    if (count.length == count2.length) {
        result = "Teng"
    }
    document.getElementById('brackets').textContent = `Fayl hajmi: ${result}`;
    
}

