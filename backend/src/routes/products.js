import express from 'express';
const router = express.Router();

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
];

router.get('/', (req, res) => {
  res.json(sampleProducts);
});

router.get('/:id', (req, res) => {
  const product = sampleProducts.find((item) => item.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Produk tidak ditemukan.' });
  }
  res.json(product);
});

export default router;
