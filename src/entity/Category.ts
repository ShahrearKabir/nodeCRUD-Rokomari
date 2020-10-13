import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Category extends BaseEntity{
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    category_name: string

}