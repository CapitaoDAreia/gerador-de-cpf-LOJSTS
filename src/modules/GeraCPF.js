import CPF from './CPF';
export default class GeraCPF{
    rand(min = 100000000, max= 999999999){
        const digitos = String(Math.floor(Math.random()*(max-min)+min));

        const sequencia = Array.from(digitos).filter(numero=>{
            return digitos[0] === numero;
        })

        if(sequencia.length === digitos.length) return this.rand()

        return digitos;
    }

    formatCPF(cpf){
        return(
            cpf.slice(0, 3) + '-' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    geraUmCPF(){
        const cpfSemDigito = this.rand();
        const digito1 = CPF.retornaDigito(cpfSemDigito);
        const digito2 = CPF.retornaDigito(cpfSemDigito + digito1);
        const retorno = this.formatCPF(cpfSemDigito + digito1 + digito2);
        return retorno;
    }
}
