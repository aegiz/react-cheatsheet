/* ********************************************* */
// Simple If:

{
  condition && <div>hello 1</div>;
}

// ... Or

{
  condition ? <div>hello 1</div> : null;
}
/* ********************************************* */

/* ********************************************* */
// If, else (ternary):

{
  condition ? <div>hello 1</div> : <div>hello 2</div>;
}

{
  condition ? <div>hello 1</div> : null;
}
/* ********************************************* */

/* ********************************************* */
// If, else if, else condition:

{
  (() => {
    if (condition1) {
      return <div>hello 1</div>;
    } else if (condition2) {
      return <div>hello 2</div>;
    } else {
      return <div>hello 3</div>;
    }
  })();
}
/* ********************************************* */

// If, else if, else if ternary:

const conditions = { c1: false, c2: false, c3: true };
const { c1, c2, c3 } = conditions;

```js
const c1 = false; const c2 = false; const c3 = false; 
c1 ? "condition 1 is true"
  : c2 ? "condition 2 is true"
  : c3 ? "condition 3 is true"
  : "None of these conditions are true";
```;
