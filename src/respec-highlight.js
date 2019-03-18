import css from "highlight.js/lib/languages/css";
import hljs from "highlight.js/lib/highlight";
import http from "highlight.js/lib/languages/http";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import xml from "highlight.js/lib/languages/xml";

hljs.configure({
  tabReplace: "  ", // 2 spaces
  languages: ["abnf", "css", "http", "javascript", "json", "xml"]
});

hljs.registerLanguage("css", css);
hljs.registerLanguage("http", http);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("xml", xml);

export const respecHljs = hljs;

// For worker, as we can't import yet
self.respecHljs = hljs;
