import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Declaração do atributos e lista.

  nome=null;
  dataDeNasciemnto=null;
  sexo=null;
  cpf=null;
  email=null;
  telefone=null;
  endereco=null;
  cep=null;
  cidade=null;
  uf=[
    { uf: 'AC', nome: 'Acre' },
    { uf: 'AL', nome: 'Alagoas' },
    { uf: 'AP', nome: 'Amapá' },
    { uf: 'AM', nome: 'Amazonas' },
    { uf: 'BA', nome: 'Bahia' },
    { uf: 'CE', nome: 'Ceará' },
    { uf: 'DF', nome: 'Distrito Federal' },
    { uf: 'ES', nome: 'Espirito Santo' },
    { uf: 'GO', nome: 'Goiás' },
    { uf: 'MA', nome: 'Maranhão' },
    { uf: 'MS', nome: 'Mato Grosso do Sul' },
    { uf: 'MT', nome: 'Mato Grosso' },
    { uf: 'MG', nome: 'Minas Gerais' },
    { uf: 'PA', nome: 'Pará' },
    { uf: 'PB', nome: 'Paraíba' },
    { uf: 'PR', nome: 'Paraná' },
    { uf: 'PE', nome: 'Pernambuco' },
    { uf: 'PI', nome: 'Piauí' },
    { uf: 'RJ', nome: 'Rio de Janeiro' },
    { uf: 'RN', nome: 'Rio Grande do Norte' },
    { uf: 'RS', nome: 'Rio Grande do Sul' },
    { uf: 'RO', nome: 'Rondônia' },
    { uf: 'RR', nome: 'Roraima' },
    { uf: 'SC', nome: 'Santa Catarina' },
    { uf: 'SP', nome: 'São Paulo' },
    { uf: 'SE', nome: 'Sergipe' },
    { uf: 'TO', nome: 'Tocantins' }
];

  turmas=[];
  alunos=[];

//Método salvar, adicionar os alunos na lista
//atributos null, limpar os campos de input.
salvar(){
  this.alunos.push({
    nome: this.nome,
    dataDeNasciemnto: this.dataDeNasciemnto,
    sexo: this.sexo,
    cpf: this.cpf,
    email: this.email,
    telefone: this.telefone,
    endereco: this.endereco,
    cep: this.cep,
    uf: this.uf,
    cidade: this.cidade

  });
  this.nome = null;
  this.dataDeNasciemnto = null;
  this.sexo = null;
  this.cpf = null;
  this.email = null;
  this.telefone = null;
  this.endereco = null;
  this.cep = null;
  this.cidade = null;
  this.uf = null;
} 



//Método splice, trata a exclusão a partir do
//índice do aray do objeto e segundo parâmetro indica a qtd de elementos excluído é 1.
//limpar(pessoa){
 //  const i = this.pessoas.indexOf(pessoa);
  // this.pessoas.splice(i, 1);
  // this.atualizarEstatisticas();
//}  

}
