import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { shuffle } from "../../utils/common";

export const getProducts = createAsyncThunk('products/getProducts',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(`${BASE_URL}/products`);
            return res.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error)
        }
    })

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        filtered: [],
        releted: [],
        isLoading: false,

    },
    reducers: {
        filterByPrice: (state, { payload }) => {
            state.filtered = state.list.filter(({ price }) => price < payload)
        },
        getReletedProducts: (state, { payload }) => {
            const list = state.list.filter(({ category: { id } }) => id === payload)
            state.releted = shuffle(list)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export const { filterByPrice, getReletedProducts } = productsSlice.actions

export default productsSlice.reducer;