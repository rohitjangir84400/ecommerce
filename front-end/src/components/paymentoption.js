import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTrendUp, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const PaymentOptions = ({ options, selectedOption, onChange }) => {
    return (
        /* ui for slecting payment method */
        <div className='mt-5 grid gap-6'>
            {options.map((option) => (
                <div key={option.id} className="relative sm:mx-auto sm:w-[50%] border border-slate-400 py-10 rounded-2xl">
                    <input className="peer hidden" type="radio" id={option.id} value={option.id} checked={selectedOption === option.id} onChange={() => onChange(option.id)} />
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label htmlFor={option.id}>
                        <div className="ml-5">
                            <span className="mt-2 font-semibold">{option.id === 'COD' ?
                                <FontAwesomeIcon className='h-8 w-8' icon={faMoneyBillTrendUp} style={{ color: "#000000", }} />
                                :
                                <FontAwesomeIcon className='h-8 w-8' icon={faCreditCard} style={{ color: "#000000", }} />
                            }</span>
                            <p className="text-slate-500 text-sm leading-6">{option.name}</p>
                        </div>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default PaymentOptions;

