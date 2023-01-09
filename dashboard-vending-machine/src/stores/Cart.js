import { defineStore } from "pinia";
import pocari from "@/assets/images/pocari.png";
import abc_chocomalt from "@/assets/images/abc_chocomalt.png";
import abc_juice from "@/assets/images/abc_juice.png";
import aqua from "@/assets/images/aqua.png";
import bearbrand from "@/assets/images/bearbrand.png";
import cocacola from "@/assets/images/cocacola.png";
import ft_apple from "@/assets/images/ft_apple.png";
import ft_honey from "@/assets/images/ft_honey.png";
import ft_markisa from "@/assets/images/ft_markisa.png";
import ft_original from "@/assets/images/ft_original.png";
import gc_dolcelatte from "@/assets/images/gc_dolcelatte.png";
import gd_avocado from "@/assets/images/gd_avocado.png";
import gd_mocachino from "@/assets/images/gd_mocachino.png";
import kopiko_icedblanca from "@/assets/images/kopiko_icedblanca.png";
import kopiko_icedbrown from "@/assets/images/kopiko_icedbrown.png";
import kopiko_original from "@/assets/images/kopiko_original.png";
import nb_chocolate from "@/assets/images/nb_chocolate.png";
import nb_orange from "@/assets/images/nb_orange.png";
import nb_strawberry from "@/assets/images/nb_strawberry.png";
import nb_vanilla from "@/assets/images/nb_vanilla.png";
import sprite from "@/assets/images/sprite.png";
import yc_apple from "@/assets/images/yc_apple.png";
import yc_lemon from "@/assets/images/yc_lemon.png";
import yc_orange from "@/assets/images/yc_orange.png";

export const useCartStore = defineStore("cart", {
  state: () => ({
    list: [
      {
        images: pocari,
        name: "Pocari",
        liter: "500ml",
        price: 10000,
      },
      {
        images: abc_chocomalt,
        name: "ABC Choco Malt",
        liter: "200ml",
        price: 3000,
      },
      {
        images: abc_juice,
        name: "ABC Juice",
        liter: "500ml",
        price: 10000,
      },
      {
        images: aqua,
        name: "Aquafina",
        liter: "500ml",
        price: 8000,
      },
      {
        images: bearbrand,
        name: "Nestle Bear Brand",
        liter: "189ml",
        price: 12000,
      },
      {
        images: cocacola,
        name: "Coca-Cola",
        liter: "475ml",
        price: 8000,
      },
      {
        images: ft_apple,
        name: "FresTea Apple",
        liter: "500ml",
        price: 7500,
      },
      {
        images: ft_honey,
        name: "FresTea Honey",
        liter: "500ml",
        price: 7500,
      },
      {
        images: ft_markisa,
        name: "FresTea Markisa",
        liter: "500ml",
        price: 7500,
      },
      {
        images: ft_original,
        name: "FresTea Green",
        liter: "500ml",
        price: 7500,
      },
      {
        images: gc_dolcelatte,
        name: "Golda Coffee Dolce Latte",
        liter: "250ml",
        price: 3000,
      },
      {
        images: gd_avocado,
        name: "GoodDay Avocado Delight",
        liter: "250ml",
        price: 8000,
      },
      {
        images: gd_mocachino,
        name: "GoodDay Funtastic Mocacinno",
        liter: "250ml",
        price: 8000,
      },
      {
        images: kopiko_icedblanca,
        name: "KOPIKO Iced Blanca",
        liter: "250ml",
        price: 8000,
      },
      {
        images: kopiko_icedbrown,
        name: "KOPIKO Iced Brown Coffee",
        liter: "250ml",
        price: 8000,
      },
      {
        images: kopiko_original,
        name: "KOPIKO Coffe Latte",
        liter: "250ml",
        price: 8000,
      },
      {
        images: nb_chocolate,
        name: "Nutriboost Chocolate",
        liter: "250ml",
        price: 7000,
      },
      {
        images: nb_orange,
        name: "Nutriboost Orange Flavour",
        liter: "300ml",
        price: 8500,
      },
      {
        images: nb_strawberry,
        name: "Nutriboost Strawberry Flavour",
        liter: "300ml",
        price: 8500,
      },
      {
        images: nb_vanilla,
        name: "Nutriboost Vanilla",
        liter: "300ml",
        price: 8500,
      },
      {
        images: sprite,
        name: "Sprite Lemon-Lime",
        liter: "900ml",
        price: 12000,
      },
      {
        images: yc_apple,
        name: "You C1000 Apple",
        liter: "250ml",
        price: 10000,
      },
      {
        images: yc_lemon,
        name: "You C1000 Lemon",
        liter: "250ml",
        price: 10000,
      },
      {
        images: yc_orange,
        name: "You C1000 Orange Water",
        liter: "300ml",
        price: 10000,
      },
      {
        images: yc_orange,
        name: "You C1000 Orange Water aw",
        liter: "300ml",
        price: 10000,
      },
    ],
    cart: [],
  }),
  getters: {
    groupList: (state) => {
      let newArr = [];

      for (let i = 0; i < Math.ceil(state.list.length / 12); i++) {
        let firstIndex = 0 + i * 12;
        newArr[i] = state.list.slice(firstIndex, firstIndex + 12);
      }
      return newArr;
    },
    cartMergeQuantity: (state) => {
      const oldArr = [...state.cart];

      for (var i = 0; i < oldArr.length; ++i) {
        oldArr[i].quantity = 1
        for (var j = i + 1; j < oldArr.length; ++j) {
          if (oldArr[i] === oldArr[j]) {
            oldArr.splice(j--, 1);
            oldArr[i].quantity += 1
          }
        }
      }

      return oldArr
    },
    cartTotalPrice() {
      let total = 0;

      this.cartMergeQuantity.forEach((item) => {
        total += item.price * item.quantity
      })

      return total
    },
    cartTotalQuantity() {
      let total = 0;

      this.cartMergeQuantity.forEach((item) => {
        total += item.quantity
      })

      return total
    }
  },
  actions: {
    getItemNotif(item) {
      return this.cart.filter((product) => product.name === item.name).length;
    },
    addCart(item) {
      this.cart.push(item);
    },
    removeCart(item) {
      const index = this.cart.indexOf(item)
      this.cart.splice(index, 1)
    },
    removeAllCart() {
      this.cart = []
    },
  },
});
