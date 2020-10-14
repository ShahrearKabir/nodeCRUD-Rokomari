import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "../entity/Category";

@Resolver()
export class CategoryResolver {
  
    @Mutation( () => Boolean)
    async createCategory( 
        @Arg("category_name") category_name: string,
        
    ){
        await Category.insert({ category_name })
        return true
    }

    @Mutation( () => Boolean)
    async updateCategory(
        @Arg("id", () => Int) id: number,
        @Arg("category_name") category_name: string,
    ){
        await Category.update( id, { category_name } )
        return true
    }

    @Query( () => [Category])
    async categories(){
        return await Category.find({ relations: ["products"] })
    }

    @Query( () => Category)
    async categoryById(
        @Arg("id", () => Int) id: number,
    ){
        return await Category.findOne( id ,{ relations: ["products"] })       //, { relations: ["product"] }
    }

    @Mutation( () => Boolean)
    async deleteCategory(
        @Arg("id", () => Int) id: number,
    ){
        await Category.delete( id )
        return true
    }
}
