import express from 'express';
import Product from '../models/Product.ts';
import Category from '../models/Category.ts';
import Banner from '../models/Banner.ts';
import HomepageSection from '../models/HomepageSection.ts';

const router = express.Router();

// GET produse publice (active)
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({ active: true });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// GET produs după ID (public)
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product || !product.active) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// GET categorii publice
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching categories' });
  }
});

// GET bannere active
router.get('/banners', async (req, res) => {
  try {
    const banners = await Banner.find({ active: true }).sort({ order: 1 });
    res.json(banners);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching banners' });
  }
});

// GET configurare homepage publică
router.get('/homepage', async (req, res) => {
  try {
    const sections = await HomepageSection.find({ active: true }).sort({ order: 1 });
    res.json(sections);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching homepage configuration' });
  }
});

export default router;
