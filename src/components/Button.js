function Button({ children, onClick, color, posittion = '' }) {
  return (
    <button
      onClick={onClick}
      style={{ background: color }}
      className={
        posittion +
        ' ' +
        ` bg-black 
             gap-2 px-3 py-1  rounded w-fit h-fit hover:brightness-110`
      }
    >
        <span className='flex gap-1.5 items-center text-white  mix-blend-overlay'>
      {children}
        </span>
    </button>
  );
}

export default Button;
