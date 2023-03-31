// type Shoe = {
//   purpose: string;
// };

// class BalletFlat implements Shoe {
//   purpose = "dancing";
// }

// class Boot implements Shoe {
//   purpose = "woodcutting";
// }

// class Sneaker implements Shoe {
//   purpose = "walking";
// }

// let Shoe = {
//   create(type: "balletFlat" | "boot" | "sneaker"): Shoe {
//     switch (type) {
//       case "balletFlat":
//         return new BalletFlat();
//       case "boot":
//         return new Boot();
//       case "sneaker":
//         return new Sneaker();
//     }
//   },
// };

// Shoe.create("balletFlat");

// class RequestBuilder {
//   private data: object | null = null;
//   private url: string | null = null;
//   private method: "get" | "post" | null = null;

//   setMethod(method: "get" | "post"): this {
//     this.method = method;
//     return this;
//   }

//   setData(data: object): this {
//     this.data = data;
//     return this;
//   }

//   setUrl(url: string): this {
//     this.url = url;
//     return this;
//   }

//   send() {}
// }
