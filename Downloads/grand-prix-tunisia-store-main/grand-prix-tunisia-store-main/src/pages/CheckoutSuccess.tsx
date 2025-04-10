
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, ChevronRight, ShoppingCart } from 'lucide-react';

const CheckoutSuccess = () => {
  return (
    <div className="min-h-screen bg-f1-black">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-f1-carbon rounded-md p-8 text-center">
            <div className="inline-flex justify-center items-center w-20 h-20 bg-green-900/30 rounded-full mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-500" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
            
            <p className="text-f1-gray mb-6">
              Thank you for your order. We have sent the order confirmation to your email.
              Our team will contact you shortly to confirm delivery details.
            </p>
            
            <div className="bg-f1-black/50 p-6 rounded-md mb-8">
              <h3 className="font-bold mb-2">Order Details</h3>
              <p className="text-f1-gray">
                Your order details and summary have been sent to your email.
                Payment will be collected upon delivery.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-f1">
                <span className="flex items-center">
                  Return Home
                  <ChevronRight className="ml-1 h-5 w-5" />
                </span>
              </Link>
              <Link to="/products" className="btn-outline">
                <span className="flex items-center">
                  <ShoppingCart className="mr-1 h-5 w-5" />
                  Continue Shopping
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
