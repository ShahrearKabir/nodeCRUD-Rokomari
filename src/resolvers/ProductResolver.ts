import { Product } from "../entity/Product";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class ProductResolver {
  
    @Mutation( () => Boolean)
    async createProduct( 
        @Arg("product_name") product_name: string,
        @Arg("brand_name") brand_name: string ,
        @Arg("product_details") product_details: string,
        @Arg("product_image") product_image: string,
        @Arg("product_price") product_price: number,
        @Arg("product_category") product_category: string,
        
    ){
        await Product.insert({ product_name, brand_name, product_details, product_image, product_price, product_category })
        return true
    }

    @Query( () => [Product])
    async products(){
        return await Product.find()
    }

    @Mutation( () => Boolean)
    async updateProduct(
        @Arg("id", () => Int) id: number,
        @Arg("product_name") product_name: string,
        @Arg("brand_name") brand_name: string ,
        @Arg("product_details") product_details: string,
        @Arg("product_image") product_image: string,
        @Arg("product_price") product_price: number,
        @Arg("product_category") product_category: string,
    ){
        await Product.update( { id }, { product_name, brand_name, product_details, product_image, product_price, product_category } )
        return true
    }

    @Mutation( () => Boolean)
    async deleteProduct(
        @Arg("id", () => Int) id: number,
    ){
        await Product.delete( { id } )
        return true
    }

    
}
