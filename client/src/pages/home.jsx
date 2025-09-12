import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/navbar';
import ProductGrid from '../components/productGrid';
import ProductDetail from '../components/ProductDetail';
import Footer from '../components/footer';
import Hero from '../components/hero';
import { products, categories } from '../lib/data';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const featuredProducts = products.filter(product => product.isFeatured);
  const newProducts = products.filter(product => product.isNew);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setDetailOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg"
            >
              SHOPBLEND
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="flex-1">
        <Hero />

        {products.length > 0 && (
          <>
            {/* Featured */}
            <div id="featured">
              <ProductGrid
                products={featuredProducts}
                title=" Featured Products"
                subtitle="Our curated selection of standout styles"
                showFilters={true}
                onViewDetails={handleViewProduct}
              />
            </div>

            {/* Summer Collection Section */}
            <section className="py-12 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      Limited Time Offer
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Summer Collection
                    </h2>
                    <p className="text-gray-600">
                      Discover our new summer styles with breathable materials and vibrant colors.
                    </p>
                    <a
                      href="#collection"
                      className="inline-block mt-2 text-indigo-600 font-medium hover:underline hover:text-indigo-800 transition-colors"
                    >
                      Shop the collection
                    </a>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Summer collection"
                      className="rounded-lg shadow-xl w-full max-w-md mx-auto transform transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg p-3 shadow-lg animate-bounce">
                      <span className="text-sm font-semibold">20% OFF</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* New Arrivals */}
            <div id="new">
              <ProductGrid
                products={newProducts}
                title=" New Arrivals"
                subtitle="The latest additions to our collection"
                onViewDetails={handleViewProduct}
              />
            </div>

            {/* Categories */}
            <section id="collection" className="py-12 md:py-16 bg-gradient-to-br from-purple-50 to-indigo-100">
              <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Shop by Category
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Find the perfect shoes for your needs
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categories.map((category) => {
                    const categoryProduct = products.find(
                      (product) => product.category === category.id && product.isFeatured
                    );

                    return (
                      <div
                        key={category.id}
                        className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500"
                      >
                        <img
                          src={categoryProduct?.images?.[0] || '/fallback-shoe.jpg'}
                          alt={`${category.name} shoes`}
                          className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = '/fallback-shoe.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                          <div className="p-6">
                            <h3 className="text-white text-xl font-bold mb-1">
                              {category.name}
                            </h3>
                            <a
                              href={`#${category.id}`}
                              className="text-pink-400 text-sm font-medium hover:text-pink-300 hover:underline inline-block transition-colors"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductDetail
        product={selectedProduct}
        isOpen={detailOpen}
        onClose={handleCloseDetail}
      />
    </div>
  );
};

export default Home;
