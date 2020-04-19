
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

class Cadastro{
  //Declaração do atributos e lista.
  private alunos=null;
  private nome=null;
  private dataNascimento=null;
  private sexo=null;
  private cpf=null;
  private email=null;
  private endereco=null;
  private telefone=null;
  private cep=null;
  private cidade=null;
  private uf=[
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
    { uf: 'TO', nome: 'Tocantins' }];
    private turmas=[
    {numero: 14, nome:'LpWeb'}
  ];
  
  constructor (nome: String, data: Date, sexo: boolean, cpf: Number, email: String,
     endereco: String, telefone: Number, cep: String, cidade: String ){
    this.nome = this.nome;
    this.dataNascimento = this.dataNascimento;
    this.sexo = this.sexo;
    this.cpf = this.cpf;
    this.email = this.email;
    this.endereco = this.endereco;
    this.telefone = this.telefone;
    this.cep = this.cep;
    this.cidade = this.cidade;
  }
  
  //Método salvar, adicionar os alunos na lista
  //atributos null, limpar os campos de input.
    salvar(){
      this.alunos.push({
        nome: this.nome,
        dataNascimento: this.dataNascimento,
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
      this.dataNascimento = null;
      this.sexo = null;
      this.cpf = null;
      this.email = null;
      this.telefone = null;
      this.endereco = null;
      this.cep = null;
      this.cidade = null;
      this.uf = null;
    } 
  
  }