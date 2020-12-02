# React JSX Cheatcheet

## Log something in the JSX:

(omit the last ";")

```jsx
{
  (() => {
    console.log(info);
  })();
}
```

## Simple If:

```jsx
{
  condition && <div>hello 1</div>;
}
```

OR:

```jsx
{
  condition ? <div>hello 1</div> : null;
}
```

## If, else (ternary):

```jsx
{
  condition ? <div>hello 1</div> : <div>hello 2</div>;
}
```

```jsx
{
  condition ? <div>hello 1</div> : null;
}
```

## If, else if, else condition:

```jsx
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
```

## Conditionnally render a property based on condition:

````jsx
<Child
      editable={this.props.editable ?
                  this.props.editableOpts :
                  undefined}
    />
    ```
````
