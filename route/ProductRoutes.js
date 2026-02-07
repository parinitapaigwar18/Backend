import express from 'express';
import { protect } from '../midleware/authMidleware.js';
import { Products ,getProducts} from '../controller/ProductController.js';
import { adminOnly } from '../midleware/productMidleware.js';
import upload from '../midleware/upload.js';

const router = express.Router();
// router.post('/addproduct', protect, adminOnly ,upload.single("image"),Products);
router.post(
  '/addproduct',
  upload.single("image"),   // ✅ FIRST
  protect,                  // ✅ AFTER multer
  adminOnly,
  Products
);

router.get('/products',protect,adminOnly, getProducts);
export default router;