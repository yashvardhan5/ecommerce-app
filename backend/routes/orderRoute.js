import express from 'express'
import { placeOrder, placeOrderRazorpay, allOrders, useOrders, upateStatus, verifyRazorpay} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'


const orderRouter = express.Router()

//----------------------------------Admin features-------------------------------
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, upateStatus)


//-------------------------Payement features----------------------------------
orderRouter.post('/place', authUser, placeOrder)
//orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)


//--------------------------User features-------------------------
orderRouter.post('/userorders', authUser,useOrders)

//------------------------Verify payments-----------------------
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)


export default orderRouter