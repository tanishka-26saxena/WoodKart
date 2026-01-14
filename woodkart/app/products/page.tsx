const products = [
  {
    id: "1",
    name: "Wooden Chair",
    price: 2999,
  },
  {
    id: "2",
    name: "Wooden Table",
    price: 5999,
  },
];

export default function ProductsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">₹{product.price}</p>
            <button className="mt-3 w-full bg-black text-white py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
