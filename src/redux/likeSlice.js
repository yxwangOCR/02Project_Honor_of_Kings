import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    likedItems: [],
    totalQuantity: 0,
}

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addLike: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.likedItems.find(item => item.id === newItem.id);
            

            if (!existingItem) {
                state.likedItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    price: newItem.price,
                    imgUrl: newItem.imgUrl,
                });
                state.totalQuantity++;
            } 
        },
        deleteLike: (state, action) => {
            const id = action.payload;
            const existingItem = state.likedItems.find(item => item.id === id);
            if (existingItem) {
                state.likedItems = state.likedItems.filter(item => item.id !== id);
                state.totalQuantity--;
            }
        }
    }
});
export const likeActions = likeSlice.actions;
export default likeSlice.reducer;