const initialState = {
  manClothing: [
    {
      id: 1,
      name: "Simple shirt",
      category: "shirt",
      color: ["Black", "White", "Grey"],
      price: 15,
      bought: 88,
      imageUrl:
        "https://m.media-amazon.com/images/I/61DpD9hTcmL._AC_UL320_.jpg",
    },
    {
      id: 2,
      name: "Straight jeans",
      category: "jeans",
      color: ["Blue", "Black", "Grey"],
      price: 50,
      bought: 15,
      imageUrl:
        "https://img1.g-star.com/product/c_fill,f_auto,h_620,q_80/v1526025363/D01159-8968-6028-Z01W/g-star-raw-3301-deconstructed-skinny-jeans-midden-blauw.jpg",
    },
  ],

  womanClothing: [
    {
      id: 1,
      name: "Simple shirt",
      category: "shirt",
      color: ["Blue", "Black", "Grey"],
      price: 15,
      bought: 32,
      imageUrl:
        "https://img1.g-star.com/product/c_fill,f_auto,h_620,q_80/v1586506206/D05175-8968-6028-Z01W/g-star-raw-3301-high-waist-skinny-jeans-midden-blauw.jpg",
    },
    {
      id: 2,
      name: "Long dress",
      category: "dress",
      color: ["White", "Black", "Grey"],
      price: 65,
      bought: 12,
      imageUrl:
        "https://img1.g-star.com/product/c_fill,f_auto,h_620,q_80/v1581435726/D17459-5864-8121-Z01W/g-star-raw-cergy-zip-slim-jurk-midden-blauw.jpg",
    },
    {
      id: 3,
      name: "Mini skirt",
      category: "skirt",
      color: ["Grey", "Red"],
      price: 45,
      bought: 22,
      imageUrl:
        "https://img1.g-star.com/product/c_fill,f_auto,h_620,q_80/v1583925174/D17055-C322-B575-Z01W/g-star-raw-utility-wrap-mini-rok-grijs.jpg",
    },
  ],
  shoppingCart: {
    totalPrice: 0,
    quantity: 0,
  },
};

//ADD_ARTICLE REMOVE_ARTICLE

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ARTICLE": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        clothe: [
          ...state.man.id,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            bought: 0,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
}
