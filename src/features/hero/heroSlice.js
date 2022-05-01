import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heroes: [
        {
            name : "Benny Dayal",
            type : "Folk",
            img : "/images/Img7.png",
        },{
            name : "Vijay Yesudas",
            type : "Bollywood",
            img : "/images/Img5.png",
        },{
            name : "Andrea Jeremiah",
            type : "Folk",
            img : "/images/Img4.png",
        },{
            name : "Shilpa Rao",
            type : "Folk",
            img : "/images/Img6.png",
        }
    ]
}

const heroSlice = createSlice({
    name: "hero",
    initialState,
    reducers: {}
    
})

export const { setSaveimg } = heroSlice.actions;
export const selectHeroes = state => state.hero.heroes

export default heroSlice.reducer
