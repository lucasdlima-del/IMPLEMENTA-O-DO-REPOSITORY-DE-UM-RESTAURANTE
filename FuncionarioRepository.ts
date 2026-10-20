import { Funcionario } from "../Models/Funcionario";
import { Freelancer } from "../Models/Freelancer";

export class FuncionarioRepository {
    private funcionarios: Funcionario[] = [];

    private horasTrabalhadas: Map<Funcionario, number> = new Map();

    salvar(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    consultarFuncionarios(): Funcionario[] {
        return [...this.funcionarios];
    }

    registrarHoras(
        funcionario: Funcionario,
        horas: number
    ): void {
        if (!this.funcionarios.includes(funcionario)) {
            throw new Error("Funcionário não cadastrado.");
        }

        if (!Number.isFinite(horas) || horas < 0) {
            throw new Error("Informe uma quantidade de horas válida.");
        }

        this.horasTrabalhadas.set(funcionario, horas);
    }

    relatorioFuncionarios(): void {
        console.log("\n=== RELATÓRIO DE FUNCIONÁRIOS ===");

        console.table(
            this.funcionarios.map(funcionario => ({
                nome: funcionario.nome,
                tipo: funcionario.getTipo(),
                sexo: funcionario.sexo,
                contratacao:
                    funcionario.dataContratacao.toLocaleDateString("pt-BR"),
                cpf: funcionario.cpf,
                rg: funcionario.rg
            }))
        );
    }

    relatorioFuncionariosTrabalhando(): void {
        console.log("\n=== FUNCIONÁRIOS COM CONTRATO ATIVO ===");

        const ativos = this.funcionarios.filter(funcionario => {
            if (funcionario instanceof Freelancer) {
                return funcionario.contratoAtivo();
            }

            return true;
        });

        console.table(
            ativos.map(funcionario => ({
                nome: funcionario.nome,
                tipo: funcionario.getTipo()
            }))
        );
    }

    relatorioSalarios(): void {
        console.log("\n=== RELATÓRIO DE SALÁRIOS ===");

        console.table(
            this.funcionarios.map(funcionario => {
                const horas =
                    this.horasTrabalhadas.get(funcionario) ?? 0;

                return {
                    nome: funcionario.nome,
                    tipo: funcionario.getTipo(),
                    horasTrabalhadas: horas,
                    salario: funcionario.calcularSalario(horas)
                        .toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })
                };
            })
        );
    }

    relatorioContratosFreelancers(): void {
        console.log("\n=== CONTRATOS DOS FREELANCERS ===");

        const freelancers = this.funcionarios.filter(
            (funcionario): funcionario is Freelancer =>
                funcionario instanceof Freelancer
        );

        console.table(
            freelancers.map(freelancer => ({
                nome: freelancer.nome,
                dataFim:
                    freelancer.dataFimContrato.toLocaleDateString("pt-BR"),
                ativo: freelancer.contratoAtivo() ? "Sim" : "Não",
                tempoRestante: freelancer.tempoRestanteContrato()
            }))
        );
    }
}