import { Funcionario } from "./Funcionario";

export class Freelancer extends Funcionario {
    salarioHora: number;
    dataFimContrato: Date;

    constructor(
        nome: string,
        sexo: string,
        dataContratacao: Date,
        cpf: string,
        rg: string,
        salarioHora: number,
        dataFimContrato: Date
    ) {
        super(nome, sexo, dataContratacao, cpf, rg);
        this.salarioHora = salarioHora;
        this.dataFimContrato = dataFimContrato;
    }

    calcularSalario(horasTrabalhadas: number): number {
        return this.salarioHora * horasTrabalhadas;
    }

    getTipo(): string {
        return "Freelancer";
    }

    contratoAtivo(): boolean {
        return this.dataFimContrato.getTime() >= Date.now();
    }

    tempoRestanteContrato(): string {
        const diferenca =
            this.dataFimContrato.getTime() - Date.now();

        if (diferenca <= 0) {
            return "Contrato encerrado";
        }

        const dias = Math.ceil(
            diferenca / (1000 * 60 * 60 * 24)
        );

        return `${dias} dias restantes`;
    }
}