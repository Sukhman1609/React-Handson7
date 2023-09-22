import {createSlice} from '@reduxjs/toolkit'

const initialState=[
    {id:0,Name:'Ritik',Age:22,Course:'MERN',Batch:'Dec'},
          {id:1,Name:'Saman',Age:21,Course:'MERN',Batch:'Jan'},
          {id:2,Name:'Anu',Age:24,Course:'MEAN',Batch:'April'},
          {id:3,Name:'Sanket',Age:23,Course:'JAVA',Batch:'Jan'},
          {id:3,Name:'Maya',Age:27,Course:'JAVA',Batch:'Dec'},
]


const StudentSlice= createSlice({
    name:"Stu_Data",
    initialState,
    reducers:{
        editStudent:(state,action)=>{
            state[action.payload.indexData]=action.payload.info;
         
        },
        addStudent:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {editStudent,addStudent}= StudentSlice.actions;
export default StudentSlice.reducer