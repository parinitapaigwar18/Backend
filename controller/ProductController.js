// // import Product from "../model/Product.js";

// // export const Products = async (req,res)=>{
// //     try{
// //       const {productName,productDetail,productPrice} = req.body ;
// //       if (!req.file) {
// //       return res.status(400).json({ message: "Image required" });
// //     }
// //         const product = await Product.create({ productName,
// //       productPrice,
// //       productDetail,
// //       image: {
// //         url: req.file.path,
// //         public_id: req.file.filename,}})
        
// //         res.status(201).json({success: true,
// //           message: "Product added successfully",
// //           product: product})

// //     }catch (error){
// //         res.json({error: error.message})
// //     }
// // }

// // export const getProducts = async (req,res)=>{
// //     try{
// //         const products = await Product.find({});    
// //         res.json({products});
// //     }catch (error){
// //         res.json({error: error.message})
// //     }
// // }



// // 



// import Product from "../model/Product.js";

// export const Products = async (req, res) => {
//   try {
//     const { productName,  productPrice ,productDetail} = req.body;

//     if (!productName || !productPrice) {
//       return res.status(400).json({
//         success: false,
//         message: "Product name and price are required",
//       });
//     }

//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "Image is required",
//       });
//     }
//     console.log("REQ.FILE:", req.file);
//     // 🔍 DEBUG (remove later)
//     console.log("FILE DATA:", req.file);

//     const product = await Product.create({
//       productName,
//       productPrice,
//       productDetail,
//       image: {
//         url: req.file.path,        // ✅ Cloudinary URL
//         // public_id: req.file.public_id, // ✅ Cloudinary public_id
//         public_id: req.file.filename

//       },
//     });

//     res.status(201).json({
//       success: true,
//       message: "Product added successfully",
//       product,
//     });

//   } catch (error) {
//     console.error("ADD PRODUCT ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };




// // export const Products = async (req, res) => {
// //   try {
// //     console.log("REQ.USER:", req.user);
// //     console.log("REQ.BODY:", req.body);
// //     console.log("REQ.FILE:", req.file);

// //     const { productName, productDetail, productPrice } = req.body;

// //     if (!productName || !productPrice) {
// //       return res.status(400).json({ message: "Product name and price required" });
// //     }

// //     if (!req.file) {
// //       return res.status(400).json({ message: "Image required" });
// //     }

// //     const product = await Product.create({
// //       productName,
// //       productDetail,
// //       productPrice,
// //       image: {
// //         url: req.file.path,
// //         public_id: req.file.filename,
// //       },
// //     });

// //     // ✅ MUST USE json()
// //     return res.status(201).json({
// //       success: true,
// //       product,
// //     });

// //   } catch (error) {
// //     console.error("PRODUCT ERROR:", error);

// //     // ✅ NEVER send raw object
// //     return res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };



// // export const Products = async (req, res) => {
// //   try {
// //     const { productName, productDetail, productPrice } = req.body;

// //     // Validation
// //     if (!productName || !productPrice) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Product name and price are required",
// //       });
// //     }

// //     if (!req.file) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Image is required",
// //       });
// //     }

// //     const product = await Product.create({
// //       name: productName,
// //       price: productPrice,
// //       description: productDetail,
// //       image: {
// //         url: req.file.path,
// //         public_id: req.file.filename,
// //       },
// //       createdBy: req.user.id, // from JWT middleware
// //     });

// //     res.status(201).json({
// //       success: true,
// //       message: "Product added successfully",
// //       product,
// //     });
// //   } catch (error) {
// //     console.error("ADD PRODUCT ERROR:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: err.message,
// //       error: err
// //     });
// //   }
// // };

// // export const getProducts = async (req, res) => {
// //   try {
// //     const products = await Product.find({});
// //     res.status(200).json({
// //       success: true,
// //       products,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       error: error.message,
// //     });
// //   }
// // };



// export const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json({
//       success: true,
//       products,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };






// import Product from "../model/Product.js";
import cloudinary from "../cloudinary.js";

// /**
//  * @desc    Add new product
//  * @route   POST /addproduct
//  * @access  Admin
//  */
// export const Products = async (req, res) => {
//   console.log("BODY:", req.body);
// console.log("FILE:", req.file);

//   try {
//     const { productName, productPrice, productDetail } = req.body;

//     // 🔐 Validation
//     if (!productName || !productPrice) {
//       return res.status(400).json({
//         success: false,
//         message: "Product name and price are required",
//       });
//     }

//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "Image is required",
//       });
//     }

//     // ☁️ Upload image buffer to Cloudinary
//     const uploadResult = await new Promise((resolve, reject) => {
//       cloudinary.uploader.upload_stream(
//         {
//           folder: "products",
//           resource_type: "image",
//         },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       ).end(req.file.buffer);
//     });

//     // 🗄️ Save product in DB
//     const product = await Product.create({
//       productName,
//       productPrice,
//       productDetail,
//       image: {
//         url: req.file.path, 
//         public_id: req.file.filename,
//       },
//     });

//     // ✅ Success response
//     res.status(201).json({
//       success: true,
//       message: "Product added successfully",
//       product,
//     });

//   } catch (error) {
//     console.error("ADD PRODUCT ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * @desc    Get all products
//  * @route   GET /products
//  * @access  Admin
//  */


import Product from "../model/Product.js";

export const Products = async (req, res) => {
  try {
    const { productName, productPrice, productDetail } = req.body;

    if (!productName || !productPrice) {
      return res.status(400).json({
        success: false,
        message: "Product name and price are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    // ✅ Cloudinary upload already done by multer-storage-cloudinary
    const product = await Product.create({
      productName,
      productPrice,
      productDetail,
      image: {
        url: req.file.path,        // ✅ Cloudinary URL
        public_id: req.file.filename, // ✅ Cloudinary public_id
      },
    });

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });

  } catch (error) {
    console.error("ADD PRODUCT ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};






export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json({
      success: true,
      products,
    });

  } catch (error) {
    console.error("GET PRODUCTS ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
