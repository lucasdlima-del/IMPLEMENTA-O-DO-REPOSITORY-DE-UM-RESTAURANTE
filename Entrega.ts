export class Entrega {
    dataHoraSaida: Date;
    numeroPedido: number;
    endereco: string;

    constructor(
        dataHoraSaida: Date,
        numeroPedido: number,
        endereco: string
    ) {
        this.dataHoraSaida = dataHoraSaida;
        this.numeroPedido = numeroPedido;
        this.endereco = endereco;
    }
}