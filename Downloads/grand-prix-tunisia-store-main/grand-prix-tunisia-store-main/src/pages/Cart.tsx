
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Minus, Plus, ShoppingCart, Trash2, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    locationDescription: '',
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.address.trim()) errors.address = 'Address is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add some products to your cart before checking out.",
        variant: "destructive"
      });
      return;
    }
    
    if (validateForm()) {
      // In a real app, this would submit the order to the backend
      // and generate the PDF order summary
      toast({
        title: "Order Placed Successfully!",
        description: "We've sent you an email with your order details.",
      });
      
      // Clear cart and redirect to success page
      clearCart();
      navigate('/checkout-success');
    } else {
      toast({
        title: "Please check your information",
        description: "Some required fields are missing or invalid.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-f1-black">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Your Cart</h1>
            <Link 
              to="/products" 
              className="text-f1-gray hover:text-f1-red flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Link>
          </div>
          
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-f1-carbon rounded-md overflow-hidden">
                  {/* Cart Header */}
                  <div className="p-4 bg-black/50 grid grid-cols-12 gap-4 text-f1-gray text-sm font-orbitron hidden md:grid">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-center">Total</div>
                  </div>
                  
                  {/* Cart Items */}
                  <div className="divide-y divide-f1-gray/10">
                    {cart.map(item => (
                      <div key={item.product.id} className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        {/* Product Info */}
                        <div className="md:col-span-6 flex items-center space-x-4">
                          <div className="w-20 h-20 bg-f1-black rounded-md overflow-hidden">
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-white line-clamp-1">
                              {item.product.name}
                            </h3>
                            <button 
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-f1-red text-sm flex items-center mt-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-3 w-3 mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                        
                        {/* Price */}
                        <div className="md:col-span-2 text-center flex md:block items-center justify-between">
                          <span className="md:hidden text-f1-gray">Price:</span>
                          <span>${item.product.price.toFixed(2)}</span>
                        </div>
                        
                        {/* Quantity */}
                        <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                          <span className="md:hidden text-f1-gray">Quantity:</span>
                          <div className="flex items-center">
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="text-f1-gray hover:text-white p-1"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="text-f1-gray hover:text-white p-1"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Total */}
                        <div className="md:col-span-2 text-center flex md:block items-center justify-between">
                          <span className="md:hidden text-f1-gray">Total:</span>
                          <span className="font-bold text-f1-red">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary & Checkout */}
              <div>
                <div className="bg-f1-carbon rounded-md p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-f1-gray">Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-f1-gray">Shipping</span>
                      <span>Cash on Delivery</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-f1-gray/10 pt-4 mb-6">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-f1-red">${totalPrice.toFixed(2)}</span>
                    </div>
                    <p className="text-f1-gray text-sm mt-1">
                      * Payment will be made on delivery
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Delivery Information Form */}
                    <form onSubmit={handleCheckout}>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="text-sm text-f1-gray block mb-1">
                              First Name *
                            </label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className={formErrors.firstName ? "border-red-500" : ""}
                            />
                            {formErrors.firstName && (
                              <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>
                            )}
                          </div>
                          <div>
                            <label htmlFor="lastName" className="text-sm text-f1-gray block mb-1">
                              Last Name *
                            </label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className={formErrors.lastName ? "border-red-500" : ""}
                            />
                            {formErrors.lastName && (
                              <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="text-sm text-f1-gray block mb-1">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={formErrors.email ? "border-red-500" : ""}
                          />
                          {formErrors.email && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="text-sm text-f1-gray block mb-1">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={formErrors.phone ? "border-red-500" : ""}
                          />
                          {formErrors.phone && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="address" className="text-sm text-f1-gray block mb-1">
                            Delivery Address *
                          </label>
                          <Textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className={formErrors.address ? "border-red-500" : ""}
                          />
                          {formErrors.address && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="locationDescription" className="text-sm text-f1-gray block mb-1">
                            Location Description (Optional)
                          </label>
                          <Textarea
                            id="locationDescription"
                            name="locationDescription"
                            value={formData.locationDescription}
                            onChange={handleInputChange}
                            placeholder="E.g., Landmark, building color, floor number..."
                          />
                        </div>
                        
                        <Button
                          type="submit"
                          className="w-full bg-f1-red hover:bg-white hover:text-f1-red text-white py-6 font-orbitron"
                        >
                          <ShoppingCart className="mr-2 h-5 w-5" />
                          Complete Order
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-f1-carbon rounded-md">
              <div className="inline-flex justify-center items-center w-20 h-20 bg-f1-black rounded-full mb-4">
                <ShoppingCart className="h-10 w-10 text-f1-gray" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-f1-gray mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/products" className="btn-f1">
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
