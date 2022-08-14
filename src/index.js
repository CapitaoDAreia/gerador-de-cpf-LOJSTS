import GeraCPF from './modules/GeraCPF';
import './assets/css/styles.css';

const array = [];
const gerador = new GeraCPF();
const cpfGerado = document.querySelector('.cpf-gerado');
const historico = document.querySelector('.historico');
let count = 0;

function salvaItens(item){
    array.push(item)
    count ++;
    if(count > 100) return
    historico.innerHTML += `${count}: ${item} </br>`;
}

document.querySelector('.gerar').addEventListener('click', ()=>{
    let newCPF = gerador.geraUmCPF();
    cpfGerado.innerHTML = "CPF gerado: "+newCPF;
    salvaItens(newCPF);
})
