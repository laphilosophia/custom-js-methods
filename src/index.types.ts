declare const global: {
  [x: string]: any;
  hasOwnProperty: (arg0: string) => any;
}

interface Function {
  cagir(
    that: {
      [x: string]: any;
      hasOwnProperty: (arg0: string) => any;
    }
  ): void;
  uygula(
    that: {
      [x: string]: any;
      hasOwnProperty: any;
    },
    arr: string | any[]
  ): void;
  bagla(that: any): void
}
