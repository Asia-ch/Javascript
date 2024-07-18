"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("first");
// const url = "https://simple-books-api.glitch.me/orders"
// const getData = async() => {
//   const response = await fetch(url);
//   const res = await response.json()
//   console.log(res[1]);
// };
// getData()
//Order Get Method
// const getOrder = async() => {
//     const Orderresponse = await fetch(url, {
//         headers:{
//             Authorization: `Bearer e8fb6c5c24c03804bd8a33c55cfdd45094b8e8ca04f58cb28d8757773bb686b4`
//         }
//     });
//     const Orderres = await Orderresponse.json()
//     console.log(Orderres)
// }
// getOrder()
//Post Method create
const createTokenUrl = "https://simple-books-api.glitch.me/api-clients";
const getCreatData = () => __awaiter(void 0, void 0, void 0, function* () {
    const Createresponse = yield fetch(createTokenUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify({
            clientName: "ashiii",
            clientEmail: "ashii@gmail.com"
        })
    });
    console.log(Createresponse.status);
    const Createres = yield Createresponse.json();
    console.log(Createres);
});
getCreatData();
// const getData = async () => {
//     try {
//       const response = await fetch("https://simple-books-api.glitch.me/books");
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const res = await response.json();
//       console.log(res);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   getData()
