export const products__category =
    {
        type: String,
        image_category: Any,
    }

export const product__stock =
    {
        stock_existence: Boolean,
        stock_quantity: Number
    }

export const product_stationery =
    {
        is_stationery: Boolean,
        stationery_months: [Number]
    }

export const products__items =
{
    id: Number,
    category: products__category,
    product: String,
    brand: String,
    image_item: Any,
    image_food_example: Any,
    price: Number,
    stock: product__stock,
    weight_in_gram: Number,
    stationery: product_stationery,
    
}