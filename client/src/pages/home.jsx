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
    <div className="min-h-screen flex flex-col">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-background z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold tracking-tight"
            >
              SHOPBLEND
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <main className="flex-1">
        <Hero />

        {products.length > 0 && (
          <>
            <div id="featured">
              <ProductGrid
                products={featuredProducts}
                title="Featured Products"
                subtitle="Our curated selection of standout styles"
                showFilters={true}
                onViewDetails={handleViewProduct}
              />
            </div>

            <section className="py-12 bg-primary/5">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Limited Time Offer
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Summer Collection</h2>
                    <p className="text-muted-foreground">
                      Discover our new summer styles with breathable materials and vibrant colors.
                    </p>
                    <a href="#collection" className="inline-block mt-2 text-primary font-medium hover:underline">
                      Shop the collection
                    </a>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Summer collection"
                      className="rounded-lg shadow-lg w-full max-w-md mx-auto hover-scale"
                    />
                    <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-md animate-float">
                      <span className="text-sm font-medium text-primary">20% OFF</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div id="new">
              <ProductGrid
                products={newProducts}
                title="New Arrivals"
                subtitle="The latest additions to our collection"
                onViewDetails={handleViewProduct}
              />
            </div>

            <section id="collection" className="py-12 md:py-16">
              <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
                  <p className="text-muted-foreground text-lg">Find the perfect shoes for your needs</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categories.map((category) => {
                    const categoryProduct = products.find(
                      (product) => product.category === category.id && product.isFeatured
                    );

                    return (
                      <div key={category.id} className="relative group overflow-hidden rounded-lg">
                        <img
                          src={categoryProduct?.images?.[0] || '/fallback-shoe.jpg'}
                          alt={`${category.name} shoes`}
                          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            (e.target).src = '/fallback-shoe.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent flex items-end">
                          <div className="p-6">
                            <h3 className="text-white text-xl font-bold mb-1">
                              {category.name}
                            </h3>
                            <a
                              href={`#${category.id}`}
                              className="text-blue-500 text-sm font-medium hover:underline inline-block"
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

      <Footer />

      <ProductDetail
        product={selectedProduct}
        isOpen={detailOpen}
        onClose={handleCloseDetail}
      />
    </div>
  );
};

export default Home;
