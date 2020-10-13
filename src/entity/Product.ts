import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@ObjectType()
@Entity()
export class Product extends BaseEntity{
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    product_name: string

    @Field()
    @Column()
    brand_name: string

    @Field()
    @Column()
    product_details: string

    @Field()
    @Column()
    product_image: string

    @Field(() => Int)
    @Column()
    product_price: number

    // @Field()
    // @Column()
    // category: string

    @ManyToOne(() => Category, category => category.id)
    @JoinColumn()
    category: number
}