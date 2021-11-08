import { TemaModel } from "./Tema"
import { Usuario } from "./Usuario"

export class PostagemModel {
    public idPostagem: number
    public titulo: string
    public texto: string
    public data: Date
    public tema: TemaModel
    public usuario: Usuario
}