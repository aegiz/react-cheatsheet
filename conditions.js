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
