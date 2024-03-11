import { useState } from 'react';
import PaymentOptions from './paymentoption';

const PaymentStep = ({ selectpaymentmethod }) => {
    const [selectedPaymentOption, setSelectedPaymentOption] = useState('');

    /* function to handle payment option change */
    const handlePaymentOptionChange = (optionId) => {
        setSelectedPaymentOption(optionId);
        selectpaymentmethod(optionId);
    };

    /* payment options */
    const paymentOptions = [
        { id: 'COD', name: 'Cash on Delivery' },
        { id: 'Card', name: 'Credit/Debit Card' },
    ];

    return (
        /* ui for selecting payment method */
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <PaymentOptions options={paymentOptions} selectedOption={selectedPaymentOption} onChange={handlePaymentOptionChange} />
            {selectedPaymentOption === 'Card' && (
                <div>
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

                        <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm text-blue-300">
                            Dummy Card Is Used On The Backend Side
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentStep;
