// @ts-nocheck 
export class Node2 {
  a = 1;
  c = {};
  constructor() {
    const b = { x: { y: 2 } };
    const c: number = 2;
    this.a = b?.x?.y;
  }
}