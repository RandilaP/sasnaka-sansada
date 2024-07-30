const Button = ({ label, icon, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center text-center w-full mb-6 px-10 py-4 border border-transparent text-xl font-medium rounded-xl shadow-sm ${className}`}
    >
      {label}
      {icon && <img src={icon} alt="icon" className="h-6 w-6 ml-3" />}
    </button>
  );
};

export default Button;
