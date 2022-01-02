import React from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  
  function handleCartAddClick() {
    setInCart((inCart) => !inCart);
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={inCart ? "remove" : "add"}
        onClick={handleCartAddClick}
      >
        {inCart ? " remove from " : " add to "} Cart
      </button>
    </li>
  );
}

export default Item;
