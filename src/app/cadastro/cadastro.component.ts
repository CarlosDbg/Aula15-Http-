import { Component, OnInit } from '@angular/core';
import { Postagem } from '../models/postagem.model';
import { HttpClient } from '@angular/common/http';
import { PostagemService } from '../Dados/postagens.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private postagensService: PostagemService ) { }

  ngOnInit(): void {
  }

  CadastrarPost(){
    const Postagem: Postagem = {
      conteudo: 'teste',
      data: new Date(),
      likes: 1,
      dislikes: 0,
    };

    this.postagensService.salvar(Postagem);
  }
}
