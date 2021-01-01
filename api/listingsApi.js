import clientApi from './clientApi'

const endPoint='/listings'

const getListings=()=>clientApi.get(endPoint)

const addListing=async (listing)=>{
    const formData=new FormData();
 
    formData.append("title", listing.title);
    listing.images.forEach((img,index)=>{
        formData.append("images",{
            name:'image'+index,
            type:'image/jpeg',
            url:img.url
        });
    })
    formData.append("price", listing.price);
    formData.append("details", listing.details);
    formData.append("category", listing.category);

    // if(listing.location){

    // }
  
    return clientApi.post(endPoint,formData,{
        onUploadProgress: progressEvent => {
          let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
          console.log(percentCompleted)
          // do whatever you like with the percentage complete
          // maybe dispatch an action that will update a progress bar or something
        }
      })
}

export default {
    getListings,
    addListing
}