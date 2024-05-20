import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const placeOrder = createAsyncThunk(
  'order/placeOrder',
  async (orderData, thunkAPI) => {
    const response = await fetch('http://localhost:3000/api/v1/order', {
      method: 'POST',
      body: JSON.stringify(orderData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to place order');
    }

    const data = await response.json();
    return data;
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderDetails: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orderDetails = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
