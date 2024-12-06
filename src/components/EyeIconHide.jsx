const EyeIconHide = ({ size = 24, color = "currentColor", className = "" }) => (
    <svg
      className={`eye ${className}`}  
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1"  
      strokeLinecap="round"  
      strokeLinejoin="round"  
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  );

  export default EyeIconHide
