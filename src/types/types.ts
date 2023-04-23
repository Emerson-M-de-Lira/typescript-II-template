export enum CoresCroche {
    VERMELHO = "vermelho",
    ROSA = "rosa",
    LARANJA = "laranja",
    AMARELO = "amarelho",
  }
  
export type Person = {
    name: string;
    phone: number;
    preco: number;
    corCroche: string;
  };
  
  
export type Posts ={
    autor: string,
    texto:string
  }