# TableTop

It's an Restaurant Menu Web App where you can cache the menu data and place an order via QR <br/>
Built with React, Node.js, Express.js, Context api, Bootstrap 5.

## Backend Repo Link

[Github](https://github.com/priyanka-s12/tabletop_backend) <br/>
[Deployement Vercel Link](https://tabletop-backend.vercel.app)

## Demo Link

[Live Demo]()

## Login

For Customer, you can use any email and password <br/>
For Admin <br/>
| Email | Password |
| --- | ---- |
|admin@test.com | pass123 or anything|

## Quick Start

```
git clone https://github.com/priyanka-s12/c.git
cd https://github.com/priyanka-s12/tabletop_frontend.git
npm install
npm run dev
```

## Technologies

- React.js
- React Router
- Node.js
- Express.js
- MongoDB
- Bootstrap 5
- Context API

## Features

**Offline Support**

- View menu data in offline mode

**QR-Based Placing Order**

- Simulation like customer placing order via QR
- can pass urlparams as table?number

**Admin Dashboard**

- Display list of received orders

## API Reference

### **GET /api/menu**

List of menu<br/>
Sample Response:

```
[{_id, name, image, category, price}, ...]
```

### **POST /api/order**

Place an order <br/>
Sample Response:

```
{tableNumber, selectedItems:[{menuId, quantity}, ...], totalAmount, status }
```

### **GET /api/order**

View received orders <br/>
Sample Response:

```
[{_id, tableNumber, selectedItems:[{menuId, quantity}, ...], totalAmount, status}, ...]
```

## Contact

For bugs or feature requests, please reach out to priyanka.sarode057@gmail.com
