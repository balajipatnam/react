# Module Federation

## How to use

In App 2 Expososing the component and filename as a remoteEntry

```javascript
new ModuleFederationPlugin({
  name: "app2",
  filename: "remoteEntry.js",
  exposes: {
    "./Posts": "./src/Posts", // Exposing component name(./ must be included)
  },
  shared: { react: { singleton: true }, "react-dom": { singleton: true } },
});
```
