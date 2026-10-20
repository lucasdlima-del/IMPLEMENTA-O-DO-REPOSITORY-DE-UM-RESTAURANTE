import { Funcionario } from "./Funcionario";

export class FuncionarioContratado extends Funcionario {
    salarioFixo: number;

    constructor(
        nome: string,
        sexo: string,
        dataContratacao: Date,
        cpf: string,
        rg: string,
        salarioFixo: number
    ) {
        super(nome, sexo, dataContratacao, cpf, rg);
        this.salarioFixo = salarioFixo;
    }

    calcularSalario(horasTrabalhadas: number): number {
        return this.salarioFixo;
    }

    getTipo(): string {
        return "Contratado";
    }
}