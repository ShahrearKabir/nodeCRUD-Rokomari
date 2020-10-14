import { Product } from "../entity/Product";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
// import { Category } from "../entity/Category";

@Resolver()
export class ProductResolver {
  
    @Mutation( () => Boolean)
    async createProduct( 
        @Arg("product_name") product_name: string,
        @Arg("brand_name") brand_name: string ,
        @Arg("product_details") product_details: string,
        @Arg("product_image") product_image: string,
        @Arg("product_price") product_price: number,
        @Arg("category" ) category: number,
        
    ){
        await Product.insert({ product_name, brand_name, product_details, product_image, product_price, category })
        return true
    }

    @Query( () => [Product])
    async products(){
        return await Product.find({ relations: ["category"] })     //{ relations: ["categories"] }
    }

    @Query( () => Product)
    async productById(
        @Arg("id", () => Int) id: number,
    ){
        return await Product.findOne( id , { relations: ["category"] })
    }

    @Mutation( () => Boolean)
    async updateProduct(
        @Arg("id", () => Int) id: number,
        @Arg("product_name") product_name: string,
        @Arg("brand_name") brand_name: string,
        @Arg("product_details") product_details: string,
        @Arg("product_image") product_image: string,
        @Arg("product_price") product_price: number,
        @Arg("category") category: number,
    ){
        await Product.update( { id }, { product_name, brand_name, product_details, product_image, product_price, category } )
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
