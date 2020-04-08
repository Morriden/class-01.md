# Local Storage for web Applications
What we really want is
1. A lot of storage space
1. on the client
1. that persists beyond a simple page refresh
1. isnt transmitted to the server

# HTML5 Storage

```js
try {
    return 'localStorage' in window && window['localStorage'] !== null;
} catch (e) {
    return false;
    }
}
```

# Using HTML5 Storage

```js
interface Storage {
    getter any getItem(in DOMString);
    setter creator void setItem(in DOMString key, in any data);
};
```
