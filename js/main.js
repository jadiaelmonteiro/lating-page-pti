function send()
{  
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;

    if (name != '' && phone != '') {
        alert('Dados enviados com sucesso!');
    } else {
        alert('Por favor, preencha os campos com *');
    }
}