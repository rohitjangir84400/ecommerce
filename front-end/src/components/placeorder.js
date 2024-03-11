import { useState } from 'react';
import Steps from './steps';
import ShippingForm from './shippinginfo';
import PaymentStep from './paymentdetails';
import Placeorder from './ordersummry';

const PlaceOrder = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = ['Shipping', 'Payment', 'Confirm'];
    const [Address, setAddress] = useState('');
    const [paymentmethod, setPaymentMethod] = useState('');

    /* function to set shipping address */
    function handleaddress(addr) {
        setAddress(addr);
        alert('Address Saved');
    }
    /* function to set selected payment method */
    function handlepaymentmethod(payment) {
        setPaymentMethod(payment);
    }

    /* function to handle next button action to go to next step */


    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    /* function to handle previous button action to go back previous step */

    const handlePrev = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    return (
        /* stepper for place order */
        <div className="container mx-auto mt-8">
            <Steps steps={steps} currentStep={currentStep} />
            {currentStep === 0 && (
                <div className='py-5'>
                    <ShippingForm addaddress={handleaddress} />
                    <div className='flex justify-around items-center'>
                        <button className='py-2 px-5 bg-indigo-600 text-white' onClick={handleNext}>Next</button>
                    </div>
                </div>
            )}
            {currentStep === 1 && (
                <div className='py-5'>
                    <PaymentStep selectpaymentmethod={handlepaymentmethod} />
                    <div className='flex justify-around items-center'>
                        <button className='py-2 px-5 bg-indigo-600 text-white' onClick={handleNext}>Next</button>
                        <button className='py-2 px-5 bg-indigo-600 text-white' onClick={handlePrev}>Previous</button>
                    </div>
                </div>
            )}
            {currentStep === 2 && (
                <div className='py-5'>
                    <Placeorder deliveryaddress={Address} payment={paymentmethod} />
                    <div className='flex justify-around items-center'>
                        <button className='py-2 px-5 bg-indigo-600 text-white' onClick={handlePrev}>Previous</button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default PlaceOrder;
