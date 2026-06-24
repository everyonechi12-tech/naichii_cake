import { useEffect, useMemo, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const heroSlides = [
  {
    title: 'Roti Segar dan Lezat, Dibuat dengan Cinta Setiap Hari.',
    subtitle: 'Bakery Naichii hadirkan varian premium untuk momen spesialmu.',
    cta: 'Jelajahi Produk',
    image: 'https://images.unsplash.com/photo-1600788899288-dda067a46c2d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Croissant Butter Asli Mewah',
    subtitle: 'Lapisan renyah, lembut, dan beraroma mentega premium.',
    cta: 'Belanja Croissant',
    image: 'https://images.unsplash.com/photo-1542828639-16560091a66d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Donat Coklat Manis & Empuk',
    subtitle: 'Klasik favorit dengan topping cokelat dan kacang panggang.',
    cta: 'Lihat Donat',
    image: 'https://images.unsplash.com/photo-1542444459-db1c60fa5851?auto=format&fit=crop&w=1400&q=80',
  },
];

const categories = [
  'Roti',
  'Croissant',
  'Donat',
  'Cake',
  'Pastry',
  'Cookies',
  'Dessert',
  'Minuman',
  'Paket Hampers',
];

const sampleProducts = [
  {
    id: 1,
    name: 'Croissant Butter',
    category: 'Croissant',
    price: 42000,
    discount: 0.12,
    stock: 16,
    tags: ['Terlaris', 'Baru'],
    rating: 4.9,
    reviews: 124,
    description: 'Croissant buttery renyah dengan lapisan lembut dan isi krim vanila.',
    images: [
      'https://images.unsplash.com/photo-1534951001996-5d5dfeda84ad?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1510626176961-4b273fa7d43d?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['Original', 'Almond', 'Coklat'],
  },
  {
    id: 2,
    name: 'Donat Coklat',
    category: 'Donat',
    price: 24000,
    discount: 0.1,
    stock: 9,
    tags: ['Diskon'],
    rating: 4.8,
    reviews: 88,
    description: 'Donat lembut dengan glasir coklat kental dan taburan kacang renyah.',
    images: [
      'https://images.unsplash.com/photo-1599785209707-ec1ff385c82b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['Original', 'Biskuit Oreo', 'Nutella'],
  },
  {
    id: 3,
    name: 'Cake Red Velvet',
    category: 'Cake',
    price: 320000,
    discount: 0.2,
    stock: 5,
    tags: ['Promo'],
    rating: 4.7,
    reviews: 42,
    description: 'Cake red velvet premium dengan krim keju lembut dan dekorasi elegan.',
    images: [
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1550966871-343d8ba34c0c?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['6 Potong', '8 Potong', '10 Potong'],
  },
  {
    id: 4,
    name: 'Pastry Apple Cinnamon',
    category: 'Pastry',
    price: 28000,
    discount: 0,
    stock: 12,
    tags: ['Baru'],
    rating: 4.6,
    reviews: 31,
    description: 'Pastry isi apel panggang, kayu manis, dan lapisan gula manis.',
    images: [
      'https://images.unsplash.com/photo-1510081886060-c7930a0a0f0a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['Single', 'Duo', 'Family'],
  },
  {
    id: 5,
    name: 'Coffee Latte',
    category: 'Minuman',
    price: 26000,
    discount: 0,
    stock: 22,
    tags: ['Minuman'],
    rating: 4.9,
    reviews: 65,
    description: 'Kopi latte hangat dengan foam lembut dan aroma kacang panggang.',
    images: [
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['Regular', 'Large'],
  },
];

const promoBanners = [
  { title: 'Diskon 20% untuk Paket Hampers', subtitle: 'Pilihan premium untuk hadiah dan momen spesial.', icon: '🎁' },
  { title: 'Gratis Ongkir Min. Rp 150.000', subtitle: 'Nikmati roti segar tanpa biaya antar.', icon: '🚚' },
  { title: 'Voucher Eksklusif untuk Member Baru', subtitle: 'Daftar sekarang dan dapatkan diskon khusus.', icon: '✨' },
];

const testimonials = [
  {
    name: 'Alya Putri',
    comment: 'Sangat puas! Croissantnya lembut dan harum, packaging mewah cocok untuk kado.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    name: 'Rian Prasetyo',
    comment: 'Pelayanan cepat dan rasa cake red velvetnya luar biasa sekali.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
  },
];

const loadingSkeleton = Array.from({ length: 6 }, (_, index) => index);

const formatCurrency = (value) => new Intl.NumberFormat('id-ID', {
  style: 'currency', currency: 'IDR', minimumFractionDigits: 0,
}).format(value);

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [toast, setToast] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newsletter, setNewsletter] = useState('');

  useEffect(() => {
    Aos.init({ duration: 900, once: true, easing: 'ease-in-out' });
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(sampleProducts);
      setLoading(false);
    }, 700);
  }, []);

  const featured = useMemo(
    () => products.filter((item) => item.tags.includes('Terlaris') || item.tags.includes('Promo')).slice(0, 4),
    [products]
  );

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = cart.reduce((sum, item) => sum + (item.discount || 0) * item.price * item.quantity, 0);
  const shipping = cart.length ? 18000 : 0;

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2800);
  };

  const addToCart = (product) => {
    setCart((current) => {
      const exists = current.find((item) => item.id === product.id);
      if (exists) {
        return current.map((item) => item.id === product.id ? { ...item, quantity: Math.min(item.quantity + 1, 10) } : item);
      }
      return [...current, { ...product, quantity: 1, selectedVariant: product.variants[0] }];
    });
    showToast(`${product.name} ditambahkan ke keranjang`);
  };

  const toggleWishlist = (product) => {
    setWishlist((current) => {
      const isSaved = current.some((item) => item.id === product.id);
      if (isSaved) {
        showToast(`${product.name} dihapus dari wishlist`);
        return current.filter((item) => item.id !== product.id);
      }
      showToast(`${product.name} disimpan ke wishlist`);
      return [...current, product];
    });
  };

  const updateQuantity = (productId, value) => {
    setCart((current) => current.map((item) => item.id === productId ? { ...item, quantity: Math.max(1, Math.min(value, 20)) } : item));
  };

  const removeFromCart = (productId) => {
    setCart((current) => current.filter((item) => item.id !== productId));
    showToast('Produk dihapus dari keranjang');
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletter.trim()) {
      showToast('Masukkan email untuk berlangganan');
      return;
    }
    showToast('Terima kasih! Email berhasil didaftarkan.');
    setNewsletter('');
  };

  const stockLabel = (stock) => {
    if (stock === 0) return 'Habis';
    if (stock < 10) return 'Terbatas';
    return 'Tersedia';
  };

  return (
    <div className="app-shell">
      <div className="page-transition" />
      <nav className="navbar glass-card">
        <div className="brand">
          <span className="brand-mark">N</span>
          <div>
            <h1>Bakery Naichii</h1>
            <p>Premium Bakery Shop</p>
          </div>
        </div>
        <ul className="nav-links">
          {['Beranda', 'Produk', 'Kategori', 'Promo', 'Tentang Kami', 'Kontak'].map((item) => (
            <li key={item}><a href={`#${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</a></li>
          ))}
          <li><button className="ghost-btn">Admin</button></li>
        </ul>
        <div className="nav-actions">
          <button className="icon-btn">❤️ {wishlist.length}</button>
          <button className="icon-btn" onClick={() => setOpenCart(true)}>🛒 {cart.length}</button>
          <button className="primary-btn">Login / Register</button>
        </div>
      </nav>

      <header className="hero-section" style={{ backgroundImage: `url(${heroSlides[activeSlide].image})` }}>
        <div className="hero-overlay" />
        <div className="hero-content" data-aos="fade-up">
          <p className="eyebrow">Promo Spesial Hari Ini</p>
          <h2>{heroSlides[activeSlide].title}</h2>
          <p>{heroSlides[activeSlide].subtitle}</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => document.getElementById('produk').scrollIntoView({ behavior: 'smooth' })}>{heroSlides[activeSlide].cta}</button>
            <button className="ghost-btn">Lihat Kategori</button>
          </div>
        </div>
        <div className="hero-indicators">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.title}
              className={idx === activeSlide ? 'active' : ''}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </header>

      <section className="highlight-grid" data-aos="fade-up" id="produk">
        {promoBanners.map((promo) => (
          <article key={promo.title} className="promo-card glass-card">
            <div className="promo-emoji">{promo.icon}</div>
            <div>
              <h3>{promo.title}</h3>
              <p>{promo.subtitle}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section" data-aos="fade-up" id="kategori">
        <div className="section-header">
          <div>
            <span className="section-label">Kategori Populer</span>
            <h2>Kategori Bakery Naichii</h2>
          </div>
          <button className="secondary-btn">Lihat Semua Kategori</button>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <div key={category} className="category-card glass-card" data-aos="fade-up">
              <h3>{category}</h3>
              <p>Produk premium untuk pilihan terbaikmu.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" data-aos="fade-up" id="terlaris">
        <div className="section-header">
          <div>
            <span className="section-label">Pilihan Populer</span>
            <h2>Produk Terlaris</h2>
          </div>
          <button className="secondary-btn">Lihat Semua</button>
        </div>
        <div className="products-grid">
          {loading ? loadingSkeleton.map((index) => (
            <div key={index} className="product-card skeleton-card" />
          )) : featured.map((product) => (
            <article key={product.id} className="product-card glass-card" data-aos="zoom-in">
              <div className="product-media">
                <img src={product.images[0]} alt={product.name} />
                <div className="product-badge">{product.tags[0]}</div>
                <button className="wishlist-btn" onClick={() => toggleWishlist(product)}>{wishlist.some((item) => item.id === product.id) ? '♥' : '♡'}</button>
              </div>
              <div className="product-body">
                <div className="product-meta">
                  <span>{product.category}</span>
                  <span>{stockLabel(product.stock)}</span>
                </div>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <div>
                    <span className="price">{formatCurrency(product.price * (1 - product.discount))}</span>
                    {product.discount > 0 && <span className="price-old">{formatCurrency(product.price)}</span>}
                  </div>
                  <button className="small-btn" onClick={() => { addToCart(product); setSelectedProduct(product); }}>Tambah</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt" data-aos="fade-up" id="testimoni">
        <div className="section-header">
          <div>
            <span className="section-label">Testimoni</span>
            <h2>Pelanggan Kami</h2>
          </div>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card glass-card" data-aos="fade-right">
              <p>“{item.comment}”</p>
              <div className="testimonial-author">
                <img src={item.image} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.rating} / 5.0</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section newsletter-section" data-aos="fade-up" id="kontak">
        <div className="newsletter-card glass-card">
          <div>
            <span className="section-label">Newsletter</span>
            <h2>Dapatkan promo eksklusif setiap minggu.</h2>
            <p>Masukkan email dan dapatkan diskon langsung ke inbox.</p>
          </div>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input type="email" placeholder="Emailmu" value={newsletter} onChange={(e) => setNewsletter(e.target.value)} />
            <button className="primary-btn" type="submit">Berlangganan</button>
          </form>
        </div>
      </section>

      <footer className="footer-section glass-card">
        <div>
          <h3>Bakery Naichii</h3>
          <p>Premium bakery dengan kualitas rasa dan pelayanan profesional.</p>
        </div>
        <div className="footer-links">
          <a href="#">Tentang Kami</a>
          <a href="#">Kontak</a>
          <a href="#">Kategori</a>
          <a href="#">FAQ</a>
        </div>
        <div className="footer-meta">
          <p>Jam Operasional: Senin–Minggu 07.00–22.00</p>
          <p>© 2026 Bakery Naichii</p>
        </div>
      </footer>

      {openCart && (
        <div className="cart-drawer" data-aos="fade-left">
          <div className="drawer-header">
            <div>
              <h3>Keranjang Belanja</h3>
              <p>{cart.length} produk dalam keranjang</p>
            </div>
            <button className="icon-btn" onClick={() => setOpenCart(false)}>×</button>
          </div>
          <div className="drawer-content">
            {cart.length === 0 ? (
              <div className="empty-cart">Keranjang kamu masih kosong.</div>
            ) : cart.map((item) => (
              <div key={item.id} className="drawer-item">
                <img src={item.images[0]} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{formatCurrency(item.price * (1 - item.discount))}</p>
                  <div className="cart-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Hapus</button>
              </div>
            ))}
          </div>
          <div className="drawer-footer glass-card">
            <div>
              <p>Subtotal</p>
              <strong>{formatCurrency(totalAmount - discountAmount)}</strong>
            </div>
            <div>
              <p>Ongkir</p>
              <strong>{formatCurrency(shipping)}</strong>
            </div>
            <div className="drawer-total">
              <p>Total</p>
              <strong>{formatCurrency(totalAmount - discountAmount + shipping)}</strong>
            </div>
            <button className="primary-btn">Lanjutkan ke Checkout</button>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="product-modal glass-card" data-aos="zoom-in">
          <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
          <div className="modal-grid">
            <div className="modal-gallery">
              {selectedProduct.images.map((src) => (
                <img key={src} src={src} alt={selectedProduct.name} />
              ))}
            </div>
            <div>
              <span className="section-label">Detail Produk</span>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <div className="product-meta">
                <span>{selectedProduct.category}</span>
                <span>{selectedProduct.rating} ★</span>
              </div>
              <div className="variant-list">
                <label>Varian:</label>
                {selectedProduct.variants.map((variant) => (
                  <button key={variant} className="variant-pill">{variant}</button>
                ))}
              </div>
              <div className="product-price">
                <strong>{formatCurrency(selectedProduct.price * (1 - selectedProduct.discount))}</strong>
                {selectedProduct.discount > 0 && <span>{formatCurrency(selectedProduct.price)}</span>}
              </div>
              <button className="primary-btn" onClick={() => addToCart(selectedProduct)}>Tambah ke Keranjang</button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast-notification">{toast}</div>}
    </div>
  );
}

export default App;
