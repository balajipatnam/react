# Module Federation

## How to use

In App 1 we have to declare the remote path app (appname@remotePath)

```javascript
new ModuleFederationPlugin({
  name: "app1",
  remotes: {
    app2: "app2@http://localhost:3002/remoteEntry.js",
  },
  shared: { react: { singleton: true }, "react-dom": { singleton: true } },
}),
  new ExternalTemplateRemotesPlugin();
```
