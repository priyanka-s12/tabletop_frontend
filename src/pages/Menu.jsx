import { useState } from 'react';
import Header from '../components/Header';
import useMenu from '../context/MenuContext';

function Menu() {
  const { menuItems, menuLoading, menuError, addToCart } = useMenu();

  const [menuFilter, setMenuFilter] = useState('');

  const filteredMenu =
    menuFilter === ''
      ? menuItems
      : menuItems.filter((menu) => menu.category === menuFilter);

  return (
    <>
      <Header />
      <main className="container py-3">
        <h2 className="mb-3">Menu</h2>
        {menuLoading && <p>Loading...</p>}
        {menuError && <p>Error: {menuError}</p>}
        <section className="mb-3">
          <h5 className="mb-3">Filter by Category: </h5>

          <select
            className="mb-5 form-select w-50"
            onChange={(e) => setMenuFilter(e.target.value)}
          >
            <option value="">Select Category</option>
            {menuItems.map((menu, index) => (
              <option value={menu.category} key={index}>
                {menu.category}
              </option>
            ))}
          </select>
        </section>
        <section>
          {menuItems && menuItems.length > 0 ? (
            <div className="row">
              {filteredMenu.map((menu) => (
                <div className="col-md-4 mb-3" key={menu._id}>
                  <div className="card">
                    <img
                      src={menu.image}
                      alt={`${menu.name} cover image`}
                      className="img-fluid rounded-start object-fit-cover"
                      style={{ height: '250px' }}
                    ></img>
                    <div className="card-body">
                      <h4 className="mb-3">{menu.name}</h4>
                      <p>
                        <span className="fw-medium">Category: </span>
                        {menu.category}
                      </p>
                      <p>
                        <span className="fw-medium">Price: </span>₹ {menu.price}
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() => addToCart(menu._id)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No menu found</p>
          )}
        </section>
      </main>
    </>
  );
}

export default Menu;
