const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Plain text — для AI которые не умеют выполнять JS
app.get("/", (req, res) => {
  const now = new Date();

  const formatted = now.toLocaleString("ru-RU", {
    timeZone: "UTC",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.send(
    [
      `Текущее время (UTC): ${formatted}`,
      `ISO 8601:            ${now.toISOString()}`,
      `Unix timestamp:      ${Math.floor(now.getTime() / 1000)}`,
    ].join("\n")
  );
});

// JSON-вариант для программного использования
app.get("/json", (req, res) => {
  const now = new Date();
  res.json({
    utc: now.toISOString(),
    unix: Math.floor(now.getTime() / 1000),
    timezone: "UTC",
  });
});

app.listen(PORT, () => {
  console.log(`Time server running on port ${PORT}`);
});
