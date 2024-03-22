import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { faker } from "@faker-js/faker"

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001"
  }),
  endpoints(builder){
    return{
      fetchPhotos: builder.query({
        query: (album) => {
          return{
            url:"/photos",
            params:{
              albumId: album.id,
            },
            method:"GET"
          }
        },
        providesTags: (result, error, album) => {
          const tags = result.map(photo => {
            return{type:"Photo", id: photo.id}
          })
          tags.push({type: "albumsPhoto", id: album.id});
          return tags;
        }
      }),
      addPhotos: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return[{type:"albumsPhoto", id: album.id}]
        },
        query:(album) => {
          return{
            url:'/photos',
            body: {
              albumId: album.id,
              url: faker.image.abstract(150,150,true)
            },
            method:'POST'
          }
        }
      }),
      deletePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) =>{
          return[{type: 'Photo', id: photo.id}]
        },
        query:(photo) => {
          console.log(photo.id);
          return{
            url:`/photos/${photo.id}`,
            method:'DELETE'
          }
        }
      })
    }
  },
})
export const {useFetchPhotosQuery, useAddPhotosMutation, useDeletePhotoMutation} = photosApi;
export {photosApi};