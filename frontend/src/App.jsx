import Card from "./components/Card"


function App() {

  const data = [
    {
      "id": "p1",
      "name": "Wireless Bluetooth Earbuds",
      "price": 79.99,
      "category": "Electronics",
      "inStock": true,
      "rating": 4.5,
      "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df"
    },
    {
      "id": "p2",
      "name": "Stainless Steel Water Bottle",
      "price": 24.95,
      "category": "Home",
      "inStock": true,
      "rating": 4.8,
      "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8"
    },
    {
      "id": "p3",
      "name": "Organic Cotton T-Shirt",
      "price": 29.99,
      "category": "Clothing",
      "inStock": false,
      "rating": 4.2,
      "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      "id": "p4",
      "name": "Smart LED TV 55-inch",
      "price": 599.99,
      "category": "Electronics",
      "inStock": true,
      "rating": 4.7,
      "image": "https://images.unsplash.com/photo-1593784991095-a205069470b6"
    },
    {
      "id": "p5",
      "name": "Yoga Mat",
      "price": 34.50,
      "category": "Fitness",
      "inStock": true,
      "rating": 4.3,
      "image": "https://images.unsplash.com/photo-1545389336-cf090694435e"
    },
    {
      "id": "p6",
      "name": "Electric Toothbrush",
      "price": 49.99,
      "category": "Health",
      "inStock": false,
      "rating": 4.6,
      "image": "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137"
    },
    {
      "id": "p7",
      "name": "Hardcover Notebook",
      "price": 12.99,
      "category": "Office",
      "inStock": true,
      "rating": 4.4,
      "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
    },
    {
      "id": "p8",
      "name": "Portable Bluetooth Speaker",
      "price": 89.99,
      "category": "Electronics",
      "inStock": true,
      "rating": 4.1,
      "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb"
    },
    {
      "id": "p9",
      "name": "Non-Stick Cooking Pan Set",
      "price": 129.99,
      "category": "Kitchen",
      "inStock": true,
      "rating": 4.9,
      "image": "https://images.unsplash.com/photo-1583778176476-4a8b02b64b1b"
    },
    {
      "id": "p10",
      "name": "Fitness Tracker Watch",
      "price": 59.95,
      "category": "Fitness",
      "inStock": false,
      "rating": 4.0,
      "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    }
  ]

  return (
    <div>
      <div className="flex flex-row justify-center text-orange-400 font-semibold">Our beginning</div>
      <div className="flex flex-wrap align-middle justify-center">
        {data.map((item) =>
          <Card key={item.id} name={item.name} image={item.image} rating={item.rating} price={item.price} category={item.category} inStock={item.inStock} />
        )}
      </div>
    </div>
  )
}

export default App
