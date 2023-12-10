import "reflect-metadata";
import { Client_Systems } from './Client_systems';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    tipo:  string

    @Column({ type: "bigint" })
    cpf:  number

    @Column({ type: "bigint" })
    cnpj:  number

    @Column({ type: "varchar" })
    nome_razao:  string

    @Column({ type: "varchar" })
    email:  string
    
    @Column({ type: "int" })
    cep:  number

    @Column({ type: "varchar" })
    logradouro:  string

    @Column({ type: "int" })
    numero:  number

    @Column({ type: "varchar" })
    complemento:  string

    @Column({ type: "varchar" })
    bairro:  string

    @Column({ type: "varchar" })
    cidade:  string

    @Column({ type: "varchar" })
    uf:  string

    @Column({ type: "varchar" })
    nome_responsavel:  string

    @Column({ type: "varchar" })
    fone_responsavel:  string

    @Column({ type: "varchar" })
    nome_contato_1:  string

    @Column({ type: "varchar" })
    fone_contato_1:  string

    @Column({ type: "varchar" })
    nome_contato_2:  string

    @Column({ type: "varchar" })
    fone_contato_2:  string

    @OneToMany(() => Client_Systems, (clisystem) => clisystem. client, { eager: true})
    clisystem: Client_Systems[]

}
