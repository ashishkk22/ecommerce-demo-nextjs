export default function Home() {
  return (
    <div className="bg-background font-sans text-textPrimary">
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-h1 font-bold">E-commerce Store</h1>
          <nav>
            <a href="#" className="text-white hover:text-secondary ml-4">
              Home
            </a>
            <a href="#" className="text-white hover:text-secondary ml-4">
              Shop
            </a>
            <a href="#" className="text-white hover:text-secondary ml-4">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <h2 className="text-h2 font-bold mb-8">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-surface shadow-lg rounded-lg overflow-hidden transition duration-200 ease-in-out hover:shadow-xl">
            <img src="https://via.placeholder.com/300x200" alt="Product 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-h3 font-medium text-primary">Product 1</h3>
              <p className="text-textSecondary mt-2">$49.99</p>
              <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="bg-surface shadow-lg rounded-lg overflow-hidden transition duration-200 ease-in-out hover:shadow-xl">
            <img src="https://via.placeholder.com/300x200" alt="Product 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-h3 font-medium text-primary">Product 2</h3>
              <p className="text-textSecondary mt-2">$69.99</p>
              <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="bg-surface shadow-lg rounded-lg overflow-hidden transition duration-200 ease-in-out hover:shadow-xl">
            <img src="https://via.placeholder.com/300x200" alt="Product 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-h3 font-medium text-primary">Product 3</h3>
              <p className="text-textSecondary mt-2">$89.99</p>
              <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="bg-surface shadow-lg rounded-lg overflow-hidden transition duration-200 ease-in-out hover:shadow-xl">
            <img src="https://via.placeholder.com/300x200" alt="Product 4" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-h3 font-medium text-primary">Product 4</h3>
              <p className="text-textSecondary mt-2">$29.99</p>
              <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-primary text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 E-commerce Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
