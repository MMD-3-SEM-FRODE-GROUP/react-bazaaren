import Link from "next/link";
import Footer from "@/components/Footer";

export default async function Cart() {

  const cartItems = [
    { id: 1, name: "Product 1", price: 20.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 15.49, quantity: 1 },
    { id: 3, name: "Product 3", price: 35.99, quantity: 1 }
  ];


  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveItem = (itemId) => {
    console.log(`Remove item with ID: ${itemId}`);

  };

  return (
    <section className="col-span-full bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center">
      <div className="text-center px-10 md:px-1 text-white flex flex-col place-items-center">
        <h1 className="text-[3.6rem] font-bold mb-[50px]">Your Cart - BAZAAR</h1>
        <p className="text-center max-w-[768px] mb-[20px]">Review your cart before proceeding to payment. You can adjust the quantities or remove items as needed.</p>

        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-bold">{item.name}</span>
                  <span className="text-sm">Price: ${item.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">Qty: {item.quantity}</span>
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6 font-semibold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-center mt-6">
            <button 
              className="bg-[#f5a623] text-white py-3 px-8 rounded-lg font-semibold"
            >
              <Link href="/payment">Proceed to Payment</Link>
            </button>
          </div>
        </div>

      
        <div className="flex gap-[20px] mt-[32px]">
          <button className="bg-white text-black py-[12px] px-[24px]">
            <Link href="/products">Continue Shopping</Link>
          </button>
          <button className="border border-white py-[12px] px-[24px]">
            <Link href="/cancel">Cancel</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
