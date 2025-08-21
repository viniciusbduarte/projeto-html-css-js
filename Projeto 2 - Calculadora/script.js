function insertToDisplay(value){
    document.getElementById('display').value += value

}
    
function clearToDisplay(){
    document.getElementById('display').value = ''
}

function result(){
    const display = document.getElementById('display')

try {
    display.value = eval(display.value)
} catch (error) {
    display.value = 'Erro'
}
}


function back(){
    const display = document.getElementById('display')
    display.value = display.value.slice(0, -1)
}
