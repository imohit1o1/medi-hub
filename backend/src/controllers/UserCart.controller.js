import { ApiResponse } from "../utilis/ApiResponse.js";
import { ApiError } from "../utilis/ApiError.js";
import asyncHandler from "../utilis/asyncHandler.js";
import { UserCart } from "../models/UserCart.model.js";

 
const AddToCart = asyncHandler(async (req, res) => {
    const { userId, medicineId, quantity, totalPrice, status } = req.body;

    if (!userId || !medicineId || !quantity || !totalPrice || !status) {
        throw new ApiError(400, "Please Fill Full Form!");
    }

    let existedCart = await UserCart.findOne({ userId, medicineId });
    if (existedCart) {
        throw new ApiError(400, `Medicine with this Name already exists`);
    }

    const cart = await UserCart.create({
        userId,
        medicineId,
        quantity,
        totalPrice,
        status,
    });

    return res.
        status(201).
        json(new ApiResponse(201, cart, "Medicine Added to Cart Successfully!"));
});

const deleteFromCart = asyncHandler(async (req, res) => {
    const cart = await UserCart.findByIdAndDelete(req.params.id);
    if (!cart) {
        throw new ApiError(404, "Medicine not found");
    }
    return res.json(new ApiResponse(200, {}, "Medicine Deleted from Cart Successfully!"));
});

const getUserCart = asyncHandler(async (req, res) => {
    const cart = await UserCart.find({ userId: req.params.userId });
    if (!cart) {
        throw new ApiError(404, "Cart not found");
    }
    return res.json(new ApiResponse(200, cart, "Cart Fetched Successfully!"));
});

export { AddToCart, deleteFromCart, getUserCart };
