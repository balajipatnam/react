# Next js React project


To start or run the next js project

```bash
npm run dev
```

(or)
```bash
yarn dev
```


When you're going to add images from your local directory then you should include your image files inside public directory example **.png or .jpg**

Below example for to display images from local directory

 ```html
<Image
  alt="Mountains"
  src="./public/logo.png"
  layout="fixed"
  objectFit="cover"
  quality={100}
  height={50}
  width={50} />
 ```

When you're going to add any external images into next js project you must have to provide the domain name in **next.config.js** file

Create **next.config.js** and provide image domain names as an array of strings

 ```js
 module.exports = {
  images: {
    domains: ["cdn.pixabay.com"],
  },
  webpack: (config, { webpack }) => {
    // process.exit();
    // Important: return the modified config
    return config;
  },
};
 ```

Below example for to display images from external link

 ```html
<Image
  alt="Mountains"
  src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg"
  layout="fixed"
  objectFit="cover"
  quality={100}
  height={50}
  width={50} />
 ```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate .

## License

[MIT](https://choosealicense.com/licenses/mit/)
