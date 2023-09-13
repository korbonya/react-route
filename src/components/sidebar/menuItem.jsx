import { Link } from "react-router-dom";

export default function MenuItem({ title, children, to, currentTo, setCurrentTo }) {
    let isActive =  to === currentTo

  return (
    <Link to={to}>
      <div onClick={() => setCurrentTo(to) } className={`flex my-2 space-x-2 bg-orange-100 rounded-md py-1 px-2 w-full hover:bg-orange-200 ${isActive && 'bg-orange-200'}`}>
        {children}
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
