import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";
export const cartData = (data = [], action) => {
  // if (action.type === ADD_TO_CART) {
  //   return {
  //     b: "dmeo",
  //   };
  // }
  // return { a: "d" };

  switch (action.type) {
    case ADD_TO_CART:
      return [...data, action.data];
    case REMOVE_FROM_CART:
      let updatedData = data;

      updatedData.length = updatedData.length ? updatedData.length - 1 : [];
      console.log(".......");
      console.log(updatedData);
      return [...updatedData];
    case EMPTY_CART:
      return [];
    default:
      return data;
  }
};
