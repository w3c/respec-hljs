## ReSpec custom highlighter

The highlighter bundle used by ReSpec.

The bundle is build as a Commonjs module ("dist/respec-highlight.js").
It exports a single object `respecHljs`, which is just `hljs`, but
already initialized with the default languages.

```JS
import respecHljs from "path/to/respec-highlight";
```

In the worker, it shows up as

```JS
self.respecHljs;
```
