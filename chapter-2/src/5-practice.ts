type Shoe = {
  purpose: string;
};

class BalletFlat implements Shoe {
  purpose = "dancing";
}

class Boot implements Shoe {
  purpose = "woodcutting";
}

class Sneaker implements Shoe {
  purpose = "walking";
}

type ShoeCreator = {
  create(type: "balletFlat"): BalletFlat;
  create(type: "boot"): Boot;
  create(type: "sneaker"): Sneaker;
};

let Shoe: ShoeCreator = {
  create(type: "balletFlat" | "boot" | "sneaker"): Shoe {
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "sneaker":
        return new Sneaker();
    }
  },
};

class RequestBuilder {
  protected data: object | null = null;
  protected method: "get" | "post" | null = null;
  protected url: string | null = null;

  setMethod(method: "get" | "post"): RequestBuilderWithMethod {
    return new RequestBuilderWithMethod().setMethod(method).setData(this.data);
  }

  setData(data: object | null): this {
    this.data = data;
    return this;
  }
}

class RequestBuilderWithMethod extends RequestBuilder {
  setMethod(method: "get" | "post" | null): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): RequestBuilderWithMethodAndUrl {
    return new RequestBuilderWithMethodAndUrl()
      .setMethod(this.method)
      .setUrl(url)
      .setData(this.data);
  }
}

class RequestBuilderWithMethodAndUrl extends RequestBuilderWithMethod {
  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send() {}
}

interface BuildableRequest {
  data?: object;
  method: "get" | "post";
  url: string;
}

class RequestBuilder2 {
  data?: object;
  method?: "get" | "post";
  url?: string;

  setData(data: object): this & Pick<BuildableRequest, "data"> {
    return Object.assign(this, { data });
  }

  setMethod(method: "get" | "post"): this & Pick<BuildableRequest, "method"> {
    return Object.assign(this, { method });
  }

  setUrl(url: string): this & Pick<BuildableRequest, "url"> {
    return Object.assign(this, { url });
  }

  build(this: BuildableRequest) {
    return this;
  }
}

new RequestBuilder2().setData({}).setMethod("post").setUrl("bar").build();
