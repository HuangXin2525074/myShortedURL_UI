import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClose: ()=>void;
    color?: "primary" | "secondary" | "success" |"danger";
}

const Alert = ({children, onClose, color = "primary"}:Props) => {
  return (
    <div className={"alert alert-" + color + " alert-dismissible"}>
    {children}
    <button onClick= {onClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert