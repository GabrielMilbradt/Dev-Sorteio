function generateNumber() {

    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)


        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        document.getElementById('result').innerHTML = '00'
    
    if (!min || !max) {
        if (!min && !max) {
            alert('Digite valor MÍNIMO e MÁXIMO!')
        } else if (!min) {
            alert('Digite valor MÍNIMO!')
        } else if (!max) {
            alert('Digite valor MÁXIMO!')
        }
    } else if (min > max || max < min) {
        alert('Valor máximo precisa ser MAIOR!')
    } else {
        document.getElementById('result').innerHTML = result;
    }
}

