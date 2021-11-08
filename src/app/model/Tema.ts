import { PostagemModel } from "./Postagem"

export class TemaModel {
    public idTema: number
    public descricao: string
    public postagem: PostagemModel
}