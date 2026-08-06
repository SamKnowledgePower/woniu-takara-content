import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the proposal with the confirmed annual volume", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /窩牛 × Takara/);
  assert.match(html, /全年共 96 支短影音/);
  assert.match(html, /以 96 支為限/);
  assert.match(html, /一個月準備期/);
  assert.doesNotMatch(html, /每週一支窩牛本業內容、一支 Takara/);
});

test("keeps contract, service guide, and progress terms aligned", async () => {
  const [contract, service, progress] = await Promise.all([
    render("/contract").then((r) => r.text()),
    render("/service").then((r) => r.text()),
    render("/progress").then((r) => r.text()),
  ]);

  for (const html of [contract, service]) {
    assert.match(html, /發布協作由引弘企業社主導執行/);
    assert.match(html, /臨時取消、改期、遲到或超時不計入 24 次到場額度/);
    assert.match(html, /花蓮市及花蓮縣吉安鄉、壽豐鄉、新城鄉不另計交通費/);
    assert.match(html, /保存 5 年/);
    assert.match(html, /次月月費仍應支付/);
  }

  assert.match(contract, /1 個月準備期/);
  assert.match(progress, /每 3 個月進行一次季度檢核/);
  assert.match(progress, /全年共\s*(?:<!-- -->)?4(?:<!-- -->)?\s*次/);
  assert.doesNotMatch(contract, /達氏占星|不另送律師審閱/);
});
