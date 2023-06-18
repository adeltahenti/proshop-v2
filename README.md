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

### Rating

Create a Rating component and bring in it into Product component

> If the name of product change we use product-title class (in index.css) to get the same Card height (add className in Card.Title in Product component)

### Product details

- Create ProductScreen.js file
- Create a route in index.js file

![image10](utils/img10.png)

# Create Server Side

In the root

```javascript
npm init
```

Use ES6 modules, in package.json file in the root add type module

![image11](utils/img11.png)

Create server.js file in backend folder

> To run server, in package.json file
> ![image12](utils/img12.png)

Install express & colors packages and test connection
![image13](utils/img13.png)

For data, create a data folder in backend and paste in it a copy of products.js file

Install nodemon and concurrently like devdependencies

```javascript
npm i -D nodemon concurrently
```

and in package.json file
![image14](utils/img14.png)

#### Environment variables

Install dotenv as devdependency

```javascript
npm i -D dotenv
```

Add .env file in the root

> Install axios like frontend dependency

In frontend/package.json file add after private line
![image15](utils/img15.png)

Fetch data from backend, use axios in frontend/screens/HomeScreen.js file, and use useSate and useEffect
![image16](utils/img16.png)

> Do same thing in ProductScreen.js file
