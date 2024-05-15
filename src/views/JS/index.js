document.addEventListener("DOMContentLoaded", async function(e) {

    await ValidaToken();
    
    
    const saldo = await  GetAPI('/api/transacao/ObterSaldo')
    const despesa = await  GetAPI('/api/transacao/ObterDespesa')
    const receita = await  GetAPI('/api/transacao/ObterReceita')

    document.getElementById('saldo').innerHTML = 'R$ ' + saldo.valor;
    document.getElementById('despesa').innerHTML = 'R$ ' + despesa.valor;
    document.getElementById('receita').innerHTML = 'R$ ' + receita.valor;

    const agenda = await  GetAPI('/api/agenda')


    agenda.forEach(async element => {
        
        await CriarListaAgenda(element);
    });


    

});


async function CriarListaAgenda(item){

    const newItem = document.createElement('li');

    newItem.innerHTML =` 
    <h4>`+ item.titulo + `</h4>
    <p>`+ item.hora + ` - duração: ` +item.duracao + ` minutos </p>`

    document.getElementById('listaAgenda').appendChild(newItem)

}

