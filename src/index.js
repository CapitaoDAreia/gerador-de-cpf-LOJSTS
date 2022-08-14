import GeraCPF from './modules/GeraCPF';
import './assets/css/styles.css';

(function(){
    const gerador = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gerador.geraUmCPF();
})();