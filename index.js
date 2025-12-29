
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './db/connection.js';
import authRoutes from './routes/auth.js';
import categoryRoutes from './routes/category.js';
import SupplierRoutes from './routes/supplier.js';
import productRoutes from './routes/product.js';
import userRoutes from './routes/user.js';
import orderRoutes from './routes/order.js';
import dashboardRoutes from './routes/dashboard.js';
import invoiceRoutes from './routes/invoice.js';
import estimateRoutes from "./routes/estimate.js";
import requisitionRoutes from "./routes/requisition.js";

const app = express();
/////////app.use(cors({ origin: "https://vision-project-3ntg.vercel.app", credentials: true }));
//app.use(cors());
 app.use(cors({
  origin: "http://localhost:5173", // your frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"], // important!
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/supplier', SupplierRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/invoice', invoiceRoutes);
app.use("/api/estimate", estimateRoutes);
app.use("/api/requisition", requisitionRoutes);

// Fixed port + DB connection
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();                          
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('MongoDB  Connected!');
});


