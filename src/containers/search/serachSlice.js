import { CreateSlice } from "@reduxjs/toolkit";

const initialState = {
    userInput: "",
    displaySearch: false


}

export const searchSlice = CreateSlice({
    initialState,
    reducer:{
        
    }

})

export default searchSlice.reducer;