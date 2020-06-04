const { hljs } = require("../dist/respec-highlight");

describe("respec-highlight bundle", () => {
  it("highlights abnf", () => {
    const input = `email-address = local-part "@" domain-part`;
    const { value, language } = hljs.highlightAuto(input, ["abnf"]);
    expect(language).toBe("abnf");
    expect(value).toContain(
      '<span class="hljs-attribute">email-address</span>'
    );
  });
  it("highlights css", () => {
    const { value, language } = hljs.highlightAuto(`@import url(some.css);`, [
      "css",
    ]);
    expect(language).toBe("css");
    expect(value).toContain('<span class="hljs-keyword">@import</span>');
  });
  it("highlights http", () => {
    const { value, language } = hljs.highlightAuto(`Referer: me`, ["http"]);
    expect(language).toBe("http");
    expect(value).toContain('<span class="hljs-attribute">Referer</span>');
  });
  it("highlights javascript", () => {
    const { value, language } = hljs.highlightAuto(`function test(){}`, [
      "javascript",
    ]);
    expect(language).toBe("javascript");
    expect(value).toContain('<span class="hljs-keyword">function</span>');
  });
  it("highlights json", () => {
    const { value, language } = hljs.highlightAuto(`{"prop": "value"}`);
    expect(language).toBe("json");
    expect(value).toContain('<span class="hljs-attr">"prop"</span>:');
  });
  it("highlights xml/html", () => {
    const {
      value,
      language,
    } = hljs.highlightAuto(`<script type="application/javascript">`, ["html"]);
    expect(language).toBe("html");
    expect(value).toContain('<span class="hljs-name">script</span>');
  });
});
