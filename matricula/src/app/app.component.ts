
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Declaração do atributos e listas.
   nome=null;
   dataNascimento=null;
   sexo=null;
   cpf=null;
   email=null;
   endereco=null;
   telefone=null;
   cep=null;
   cidade=null;
   uf=null;
   numeroTurma=null;
   nomeTurma=null;
   turmas=[];
   alunos=[];
  
  constructor (){
      this.nome = this.nome;
      this.dataNascimento = this.dataNascimento;
      this.sexo = this.sexo;
      this.cpf = this.cpf;
      this.email = this.email;
      this.endereco = this.endereco;
      this.telefone = this.telefone;
      this.cep = this.cep;
      this.cidade = this.cidade;
      this.uf = this.uf;
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
    } 

}


 

 