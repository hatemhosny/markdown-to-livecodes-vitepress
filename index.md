---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MD to LiveCodes"
  text: "A VitePress Site"
  tagline: Markdown to LiveCodes
---

Markdown and MDX code blocks can be easily converted to interactive LiveCodes playgrounds.
See [docs](https://livecodes.io/docs/markdown-to-livecodes) for details.

This code block is rendered as a LiveCodes playground:

```jsx livecodes
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

This code block is appended with a button to a LiveCodes playground:

```python livecodes render=button console=full
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))
```

---

This code block is appended with a link to a LiveCodes playground:

```php livecodes lang=php-wasm render=link
<?php
function isPrime($number) {
    if ($number <= 1) {
        return false;
    }
    for ($i = 2; $i <= sqrt($number); $i++) {
        if ($number % $i == 0) {
            return false;
        }
    }
    return true;
}

echo isPrime(13) ? 'true' : 'false';
```

---

To have similar interactive playgrounds from Markdown code blocks,
go to [docs](https://livecodes.io/docs/markdown-to-livecodes) to get started.
