// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema ({
//     name :{type: String, required: true},
//     description :{type: String, required: true},
//     price :{type: Number, required: true},
//     stock :{type: Number, required: true},
//     isDeleted:{type: Boolean, default: false},
//     categoryId : {type: mongoose.Schema.Types.ObjectId, ref:"Category", required: true},
//     supplierId: {type: mongoose.Schema.Types.ObjectId, ref:"Supplier", required: true},

//     });

// const ProductModel = mongoose.model("Product", productSchema);

// export default ProductModel;    


/////////////////////products date add 18-12-2025////////////////////////////

import mongoose from "mongoose";

const productSchema = new mongoose.Schema ({
    name :{type: String, required: true},
    description :{type: String, required: true},
    price :{type: Number, required: true},
    stock :{type: Number, required: true},
   // stockDate: { type: Date,default: Date.now, },
   stockDate: {type: String,required: true,
  //default: () => new Date().toISOString().split('T')[0]  
},
    isDeleted:{type: Boolean, default: false},
    categoryId : {type: mongoose.Schema.Types.ObjectId, ref:"Category", required: true},
    supplierId: {type: mongoose.Schema.Types.ObjectId, ref:"Supplier", required: true},

    });

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel; 