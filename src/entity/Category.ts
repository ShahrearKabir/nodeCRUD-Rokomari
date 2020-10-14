import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
// import { Product } from "./Product";

@ObjectType()
@Entity()
export class Category extends BaseEntity{
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    // @OneToMany(() => Product, product => product.category)
    id: number

    @Field()
    @Column()
    category_name: string

    // @OneToMany(() => Product, product => product.category)
    // product: Product[];

    @Field(() => [Product])
    @Column('int', { nullable: true })
    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
    

}