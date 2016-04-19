export function es5() {
  return {
    i: 0,
    next: function() {
      return this.i += 1
    }
  }
}
const i = 0;
export function es6() {
  return {
    i,
    next() {
      return this.i += 1
    }
  }
}
