import { iProductInCart, iUser } from "../code/dataModels";
import products from "../code/products_db";

const G = {
  session: {
    user: {
      id: 1,
      fullName: "Faisal alotaibi",
      firstName: "Faisal",
      lastName: "alotaibi",
      email: "faysl4014@gmail.com",
      phone: "966544114041",
      country: "Qatar",
      createdAt: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    } as iUser,
  },
  standAlonePages:['/sign_in','/sign_up'],
  cartProducts: products.slice(0,4).map(product => ({...product,quantity:1})) as iProductInCart[],
};
export default G;
