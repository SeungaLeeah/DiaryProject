import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';

const API_URL = 'http://localhost:3001/data';

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk("EmotionDiarySlice/getList", async(payload,{rejectWithValue})=>{
    let result = null;

    const params = {};

    if(payload?.postId){
        params.postId = payload.postId;  
    } 

    try{
        result = await axios.get('');
    }catch(err) {
        result = rejectWithValue(err.response);
    }
    return result;
    });

/** 단일행 데이터 조회를 위한 비동기 함수 */
    export const getItem = createAsyncThunk("EmotionDiarySlice/getItem", async(payload,{rejectWithValue})=>{
        let result = null;

        try{
          result = await axios.get(`${API_URL}/${payload.id}`);
        }catch(err) {
          result = rejectWithValue(err.response);
        }
        return result;
      });

/** 데이터 저장을 위한 비동기 함수 */
    export const postItem = createAsyncThunk("EmotionDiarySlice/postItem", async(payload,{rejectWithValue})=>{
        let result = null;

        try{
          result = await axios.get(API_URL,{
            id : payload.id,
            content : payload.content,
            emotion : payload.emotion,
            date : new Date(result).getTime()
          });
        }catch(err) {
          result = rejectWithValue(err.response);
        }
        return result;
      });

/** 데이터 수정을 위한 비동기 함수 */
    export const putItem = createAsyncThunk("EmotionDiarySlice/putItem", async(payload,{rejectWithValue})=>{
        let result = null;

        try{
          result = await axios.get(`${API_URL}/${payload.id}`,{
            content : payload.content,
            emotion : payload.emotion,
            date : new Date(result).getTime()
          });
        }catch(err) {
          result = rejectWithValue(err.response);
        }
        return result;
      });
      
/** 데이터 삭제를 위한 비동기 함수 */
    export const deleteItem = createAsyncThunk("EmotionDiarySlice/deleteItem", async(payload,{rejectWithValue})=>{
        let result = null;

        try{
          result = await axios.get(`${API_URL}/${payload.id}`,{
            content : payload.content,
            emotion : payload.emotion,
            date : new Date(result).getTime()
          });
        }catch(err) {
          result = rejectWithValue(err.response);
        }
        return result;
      });


const EmotionDiarySlice = createSlice({
    name: 'EmotionDiary',
    initialState: {
        data: null,       
        loading: false, 
        error:null        
    },
    reducers: {},
    extraReducers: {
    [getList.pending]: (state, {payload})=>{
      return{ ...state, loading: true}
    },
    [getList.fulfilled]: (state,{payload})=>{
      return{
        data: payload?.data,
        loading: false,
        error: null
      }
    },
    [getList.rejected]: (state,{payload})=>{
      return{
        ...state,
        loading:false,
        error:{
          code: payload?.status ? payload.status:500,
          message: payload?.statusText ? payload.statusText:'Server Error'
        }
      }
    },

    /** 단일행 데이터 조회를 위한 액션함수 */
    [getItem.pending]: (state, {payload})=>{
      return{ ...state, loading: true}
    },
    [getItem.fulfilled]: (state,{payload})=>{
      return{
        data: payload?.data,
        loading: false,
        error: null
      }
    },
    [getItem.rejected]: (state,{payload})=>{
      return{
        ...state,
        loading:false,
        error:{
          code: payload?.status ? payload.status:500,
          message: payload?.statusText ? payload.statusText:'Server Error'
        }
      }
    },

    /** 데이터 저장을 위한 액션함수 */
    [postItem.pending]: (state, {payload})=>{
      return{ ...state, loading: true}
    },
    [postItem.fulfilled]: (state,{payload})=>{
      let data = null;

      if(Array.isArray(state.data)){
        data = [...state.data];
        data.push(payload.data);
      }else{
        data = payload.data;
      }

      return{
        data: payload?.data,
        loading: false,
        error: null
      }
    },
    [postItem.rejected]: (state,{payload})=>{
      return{
        ...state,
        loading:false,
        error:{
          code: payload?.status ? payload.status:500,
          message: payload?.statusText ? payload.statusText:'Server Error'
        }
      }
    },

    /** 데이터 수정을 위한 액션함수 */
    [putItem.pending]: (state, {payload})=>{
      return{ ...state, loading: true}
    },
    [putItem.fulfilled]: (state,{meta, payload})=>{
      let data = null;

      if(Array.isArray(state.data)){
        data = [...state.data];

        const index = data.findIndex(element => element.id === parseInt(meta.arg.id));

        if(index !== undefined){
          data.splice(index, 1, payload.data);
        }
      }else{
        data = payload.data;
      }

      return{
        data: payload?.data,
        loading: false,
        error: null
      }
    },
    [putItem.rejected]: (state,{payload})=>{
      return{
        ...state,
        loading:false,
        error:{
          code: payload?.status ? payload.status:500,
          message: payload?.statusText ? payload.statusText:'Server Error'
        }
      }
    },

  /** 데이터 삭제를 위한 액션함수 */
  [deleteItem.pending]: (state, {payload})=>{
    return{ ...state, loading: true}
  },
  [deleteItem.fulfilled]: (state,{meta, payload})=>{
    let data = null;

    if(Array.isArray(state.data)){
      data = [...state.data];

      const index = data.findIndex(element => element.id === parseInt(meta.arg.id));
      console.log('index' + index);

      if(index !== undefined){
        data.splice(index,1);
      }
    }
    return{
      data: payload?.data,
      loading: false,
      error: null
    }
  },
  [deleteItem.rejected]: (state,{payload})=>{
    return{
      ...state,
      loading:false,
      error:{
        code: payload?.status ? payload.status:500,
        message: payload?.statusText ? payload.statusText:'Server Error'
      }
    }
  },
  },
});

export default EmotionDiarySlice.reducer;
