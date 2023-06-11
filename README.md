# MERN Project

3 folders are created:

- frontend
- backend
- uploads

On the root

```javascript
npx create-react-app frontend
```

Clean the frontend folder, move .gitignore and README files to the root, remove the .git file on frontend folder and create a one in the root folder.

Create a new repo on github and

```javascript
git add .
```

```javascript
git commit -m 'your commit'
```

```javascript
git remote add origin https://github.com/<gituser>/<your-repo>.git
```

In frontend folder, install

```javascript
npm i react-bootstrap bootstrap react-icons
```

Import in the index.js file
![image1](utils/img1.png)

In frontend/src folder, create components folder and create Header.jsx file in it

In App.js file, import
![image2](utils/img2.png)

In components folder, create Footer.jsx file in it. Import in the App.js file
![image3](utils/img3.png)

Custom bootstrap with adding assets folder

#### To get a static list of products

- Download the products-and-images folder
- Put an images folder in the public one
- Insert the products.js file in src folder

In the scr folder, create a screens folder with <ins>HomeScreen.js </ins> file

Import HomeScreen.js in App.js file
![image4](utils/img4.png)

Create Product component => /src/components/Product.jsx & import it in HomeScreen.js
![image5](utils/img5.png)

Install React Router Dom

```javascript
npm i react-router-dom
```

To have routes, a lot of changes in index.js file
![image6](utils/img6.png)

We no longer need to import HomeScreen.js in App.js file, use Outlet from react-router-dom
![image7](utils/img7.png)

> Use Link in Product.js file, replace <ins>a</ins> tag with Link and change <ins>href</ins> attribute with <ins>to</ins> attribute

Install React Router Bootstrap

```javascript
npm i react-router-bootstrap
```

And use LinkContianer from react-router-bootstrap like this
before
![image8](utils/img8.png)
alter
![image9](utils/img9.png)
