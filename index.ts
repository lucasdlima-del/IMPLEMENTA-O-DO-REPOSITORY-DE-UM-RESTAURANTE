import { Prato } from "./models/Prato";
import { FuncionarioContratado } from "./models/FuncionarioContratado";
import { Freelancer } from "./models/Freelancer";
import { Entrega } from "./models/Entrega";

import { PratoRepository } from "./repositories/PratoRepository";
import { FuncionarioRepository } from "./repositories/FuncionarioRepository";
import { EntregaRepository } from "./repositories/EntregaRepository";

// Repositories
const pratoRepository = new PratoRepository();
const funcionarioRepository = new FuncionarioRepository();
const entregaRepository = new EntregaRepository();

// Pratos
const prato1 = new Prato(
    "Feijoada",
    new Date("2026-10-25"),
    "Brasileira"
);

const prato2 = new Prato(
    "Pizza Margherita",
    new Date("2026-10-28"),
    "Italiana"
);

pratoRepository.salvar(prato1);
pratoRepository.salvar(prato2);

// Funcionários contratados
const funcionario1 = new FuncionarioContratado(
    "Carlos Silva",
    "Masculino",
    new Date("2024-03-10"),
    "123.456.789-00",
    "12.345.678-9",
    3000
);

// Freelancer com contrato futuro
const funcionario2 = new Freelancer(
    "Ana Souza",
    "Feminino",
    new Date("2026-08-01"),
    "987.654.321-00",
    "98.765.432-1",
    30,
    new Date("2026-12-31")
);

funcionarioRepository.salvar(funcionario1);
funcionarioRepository.salvar(funcionario2);

// Registro de horas trabalhadas
funcionarioRepository.registrarHoras(funcionario1, 160);
funcionarioRepository.registrarHoras(funcionario2, 120);

// Entregas
const entrega1 = new Entrega(
    new Date("2026-10-20T11:30:00"),
    101,
    "Rua das Flores, 123"
);

const entrega2 = new Entrega(
    new Date("2026-10-20T12:15:00"),
    102,
    "Avenida Brasil, 500"
);

entregaRepository.salvar(entrega1);
entregaRepository.salvar(entrega2);

// Executando relatórios
pratoRepository.relatorio();

funcionarioRepository.relatorioFuncionarios();

funcionarioRepository.relatorioFuncionariosTrabalhando();

funcionarioRepository.relatorioSalarios();

funcionarioRepository.relatorioContratosFreelancers();

entregaRepository.relatorio();