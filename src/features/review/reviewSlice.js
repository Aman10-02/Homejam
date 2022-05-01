import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviews:[
        {
            img:"/images/Img1.png",
            name:"Hellen Jummy",
            flag:"/images/icons/us.png",
            place:"PALO ALTO, CA",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. ",
        },
        {
            img:"/images/Img2.png",
            name:"Isaac Oluwatemilorun",
            flag:"/images/icons/IT.png",
            place:"PALO ALTO, CA",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. ",
        },
        {
            img:"/images/Img1.png",
            name:"Hellen Jummy",
            flag:"/images/icons/us.png",
            place:"PALO ALTO, CA",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. ",
        },
    ]
}

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {}
})

export const selectReviews = state => state.review.reviews

export default reviewSlice.reducer