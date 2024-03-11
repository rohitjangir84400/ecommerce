const Steps = ({ steps, currentStep }) => {
  return (
    /* steps ui */
    <div className="flex items-center justify-around">
      {steps.map((step, index) => (
        <div key={index} className={`flex items-center space-x-2 ${index === currentStep ? 'text-blue-500 font-bold' : 'text-gray-500'}`}>
          <a className={`flex h-6 w-6 items-center justify-center rounded-full ${index <= currentStep ? 'bg-emerald-200 text-emerald-700' : 'bg-gray-600 ring ring-gray-600 ring-offset-2'}  text-xs font-semibold text-white `} href="#">{index}</a>
          <span className="mr-2">{step}</span>
        </div>
      ))}
    </div>
  );
};
export default Steps;