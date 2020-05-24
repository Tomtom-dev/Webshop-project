import Axios from "axios"

// 2actions
// 1 simple action creator PRODUCT_FETCH
// 1 thunk action that will make the API call

// this action is created after the api call

export const productsFetched = (products)=>{
    return {
        type: "PRODUCT_FETCH",
        payload : products,
    }
};

export const fetchProducts = () => async (dispatch, getState) => {
    try{
        const data = await Axios.get(
            "https://my-json-server.typicode.com/Tomtom-dev/JsonFileWebShop/db"
          );
          dispatch(productsFetched(data.data))
    } catch (error) {
        console.log(error);
    }
}

// async function fetchClothesOld () {
//     const data = await Axios.get(
//       "https://my-json-server.typicode.com/Tomtom-dev/JsonFileWebShop/db"
//     );
//     setClothesMan(data.data.manClothing);
//     setClothesWoman(data.data.womanClothing);
//   }

// dispatch (fetchProducts ())