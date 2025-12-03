export default function Modal({ children }) {
  return (
    <>
      <div className="fixed inset-0 w-full h-screen bg-black/60 z-10"></div>
      <div
        className="fixed 
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          border-0 
          rounded-[6px] 
          shadow-[0_2px_8px_rgba(0,0,0,0.2)] 
          p-0 
          overflow-hidden 
          bg-white 
          z-20"
      >
        {children}
      </div>
    </>
  );
}
