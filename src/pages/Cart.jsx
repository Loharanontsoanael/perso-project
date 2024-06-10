import React, { useEffect, useState } from 'react';
import HorizontalCard from '../components/Cards/HorizontalCard';
import { Button } from '@nextui-org/react';
import { MainData } from '../context/MainContext';

function Cart() {
  const { CurrentPage, CurrentUser, cartItems } = MainData();

  const totalItems = cartItems.reduce((total, item) => total + parseInt(item.quantity, 10), 0);
  const totalPrice = cartItems.reduce((total, item) => total + parseInt(item.price), 0);

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 bg-gray-900 text-white">
      <div className="lg:w-2/3">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {cartItems.length > 0 ? (
            cartItems.map((item, i) => (
              <div className="CartItems" key={i}>
                <HorizontalCard CurrentPage={CurrentPage} CurrentUser={CurrentUser} item={item} />
              </div>
            ))
          ) : (
            <p>No item Yet</p>
          )}
        </div>
      </div>

      <div className="lg:w-1/3">
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <div className="text-xl font-semibold mb-4">Summary</div>
          <div className="flex flex-col">
            <div className="flex justify-between mb-2">
              <p>Renter</p>
              <p className="font-semibold">{CurrentUser.UserName || '---'}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Items</p>
              <p className="font-semibold">{totalItems}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Total</p>
              <p className="font-semibold">{totalPrice} AR</p>
            </div>
            <Button className="mt-4 w-full" color="primary">
              Purchase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
