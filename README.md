# nodeCRUD-Rokomari

> ### Express Js, Graphql

## Getting started

To get the project running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server

Local web server will use port 4000.

### Making requests to the backend 

http://localhost:4000/graphql

## Functionality overview

This is a sample application for product and category

**General functionality:**

**Product**
- Create:
  mutation{
    createCategory(
      category_name: "cat-1"
    )
  }
  
- Update:
  mutation{
    updateCategory(
      id:3,
      category_name: "Test cat-3",
    )
  }
  
- Delete:
  mutation{
    deleteCategory(id: 2)
  }
  
- Get List:
  {
    categories{
      id
      category_name
      products{
        product_name
        brand_name
        product_details
        product_image
        product_price
      }
    }
  }


**Product**
- Create
  {
    createProduct(
      product_name: "Test Name 3", 
      brand_name: "Test Brand 3", 
      product_details: "Test Details 3",
      product_image: "n/a 3",
      product_price: 33,
      category: 2
    )
  }
  
  - Update:
    mutation{
      updateProduct(
        id:2,
        product_name: "Test Name 22", 
        brand_name: "Test Brand 22", 
        product_details: "Test Details 22",
        product_image: "n/a 22",
        product_price: 111,
        category: 3
      )
    }

  - Delete:
    mutation{
      deleteProduct(id: 4)
    }
    
- Get List:
  {
    products{
      id
      product_name
      brand_name
      product_details
      product_image
      product_price,
      category{
        id
        category_name
      }
    }
  }

