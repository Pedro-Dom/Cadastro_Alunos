import { Estudante } from './estudante';
import { Professor } from './professor'

export const ESTUDANTES: Estudante[] = [
  { id: 1, name: 'Pedrão', curso: "Análise de Sistemas", idade: 19, semestre: 3},
  { id: 2, name: 'Marcola', curso: "Mecatrônica", idade: 20, semestre: 3},
  { id: 3, name: 'Navano', curso: "Análise de Sistemas", idade: 18, semestre: 4},
  { id: 4, name: 'Ibazel', curso: "Mecatrônica", idade: 20, semestre: 4},
  { id: 5, name: 'Gabe', curso: "Gestão Empresarial", idade: 19, semestre: 5},
  { id: 6, name: 'Limão', curso: "Eventos", idade: 22, semestre: 6},
  { id: 7, name: 'Davanzo', curso: "Análise de Sistemas", idade: 23, semestre: 3},
  { id: 8, name: 'Nicolino', curso: "Gestão Empresarial", idade: 21, semestre: 1},
  { id: 9, name: 'Amate', curso: "Mecatrônica", idade: 19, semestre: 2},
  { id: 10, name: 'Méc', curso: "Análise de Sistemas", idade: 19, semestre: 2}
];

export const PROFESSORES: Professor[] = [
  { id: 11, name: 'Glauquito', class: 'Eletiva' },
  { id: 12, name: 'Celso', class: 'Operações' },
  { id: 13, name: 'Tadeos', class: 'Estruturação' },
  { id: 14, name: 'Angelina', class: 'Engenharia' },
  { id: 15, name: 'Laerti', class: 'Economia' },
  { id: 16, name: 'Margarina', class: 'Cálculo' },
  { id: 17, name: 'Lemes', class: 'Design' },
  { id: 18, name: 'Chicos', class: 'Estatística' },
  { id: 19, name: 'Levis', class: 'Software' },
  { id: 20, name: 'Banqui', class: 'Sistemas' }
];