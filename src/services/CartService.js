import { BehaviorSubject } from "rxjs";

const placeholder = [];
const cartItems = new BehaviorSubject([]);

function setCartData(data) {
  localStorage.setItem("cart", JSON.stringify(data));
  cartItems.next(getCartData());
}
function getCartData() {
  return JSON.parse(localStorage.getItem("cart"));
}

function addItem(meal) {
  const ls = getCartData();
  let exist;
  if (ls) {
    exist = ls.find((item) => {
      return item.id === meal.id;
    });
  }
  if (exist) {
    exist.quantity++;
    setCartData(ls);
  } else {
    if (ls) {
      const newData = [...ls, meal];
      setCartData(newData);
      cartItems.next(getCartData());
    } else {
      placeholder.push(meal);
      setCartData(placeholder);
      cartItems.next(getCartData());
    }
  }
}
export default {
  placeholder,
  cartItems,
  addItem,
  getCartData,
  setCartData,
};

// export class CartService {
//   placeholder = [];
//   cartItems = new BehaviorSubject([]);
//   constructor() {
//     const ls = this.getCartData();
//     if (ls) {
//       this.cartItems.next(ls);
//     }
//   }
//   addItem(meal) {
//     const ls = this.getCartData();
//     let exist;
//     if (ls) {
//       exist = ls.find((item) => {
//         return item.id === meal.id;
//       });
//     }
//     if (exist) {
//       exist.quantity++;
//       this.setCartData(ls);
//     } else {
//       if (ls) {
//         const newData = [...ls, meal];
//         this.setCartData(newData);
//         this.cartItems.next(this.getCartData());
//       } else {
//         this.placeholder.push(meal);
//         this.setCartData(this.placeholder);
//         this.cartItems.next(this.getCartData());
//       }
//     }
//   }
//   setCartData(data) {
//     localStorage.setItem("cart", JSON.stringify(data));
//     this.cartItems.next(this.getCartData());
//   }
//   getCartData() {
//     return JSON.parse(localStorage.getItem("cart"));
//   }
// }
