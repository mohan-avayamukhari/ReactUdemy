import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { faker } from "@faker-js/faker"

const albumApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001"
  }),
  endpoints(builder){
    return{
      fetchAlbums: builder.query({
        query: (user) => {
          return{
            url:"/albums",
            params:{
              userId: user.id
            },
            method:"GET"
          }
        },
        providesTags: (result, error, user) => {
          const tags = result.map(album => {
            return{type:"Album", id: album.id}
          })
          tags.push({type: "userAlbums", id: user.id});
          return tags;
        }
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return[{type:"userAlbums", id: user.id}]
        },
        query:(user) => {
          return{
            url:'/albums',
            body: {
              userId: user.id,
              title: faker.commerce.productName()
            },
            method:'POST'
          }
        }
      }),
      deleteAlbum: builder.mutation({
        invalidatesTags: (result, error, album) =>{
          return[{type: 'Album', id: album.id}]
        },
        query:(album) => {
          return{
            url:`/albums/${album.id}`,
            method:'DELETE'
          }
        }
      })
    }
  },
})
export const {useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation} = albumApi;
export {albumApi};