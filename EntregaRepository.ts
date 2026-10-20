import { Entrega } from "../Models/Entrega";

export class EntregaRepository {
    private entregas: Entrega[] = [];

    salvar(entrega: Entrega): void {
        this.entregas.push(entrega);
    }

    consultarEntregas(): Entrega[] {
        return [...this.entregas];
    }

    relatorio(): void {
        console.log("\n=== RELATÓRIO DE ENTREGAS ===");

        console.table(
            this.entregas.map(entrega => ({
                dataHoraSaida:
                    entrega.dataHoraSaida.toLocaleString("pt-BR"),
                numeroPedido: entrega.numeroPedido,
                endereco: entrega.endereco
            }))
        );
    }
}