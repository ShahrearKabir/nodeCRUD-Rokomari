import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne } from "typeorm";
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

    @Field(() => Category)
    @Column('int', { nullable: true })
    @ManyToOne(() => Category, category => category.products)
    category: number;
}