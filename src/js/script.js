const inputCEP = document.getElementById('cep');
const inputLogradouro = document.getElementById('logradouro');
const inputNumero = document.getElementById('numero');
const inputBairro = document.getElementById('bairro');
const inputCidade = document.getElementById('cidade');
const inputUF = document.getElementById('uf');
const btn = document.getElementById('button');


const buscaEnderecoPorCep = () => {
    let cep =inputCEP.value;
    
    if (!/^\d{8}$/.test(cep)) {
        alert('CEP inválido');
        return;
    }
    

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error ao buscar endereço');
            }  
            return res.json();  
        })
        .then(json => {
            inputLogradouro.value = json.logradouro;
            inputBairro.value = json.bairro;
            inputCidade.value = json.localidade;
            inputUF.value = json.uf;

            inputNumero.focus();

        })
        .catch(err => {
            console.error(err);
            alert('Erro ao buscar o endereço, por favor tente novamente mais tarde');
        });  
}


inputCEP.addEventListener('blur', buscaEnderecoPorCep);
