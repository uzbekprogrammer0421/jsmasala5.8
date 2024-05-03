const  create =(e)=>{
    e.preventDefault();
    let textarea = e.target[0].value.split(" ")
    let input = e.target[1].value.split(" ")
    let count = 0
    let result = "Yo'q"
    for (let i = 0; i < input.length; i++) {
        if (textarea.includes(input[i])) {
            count ++
        }
    }
    if (count === input.length) {
        result = "Bor"
    }
    alert(result)
}

