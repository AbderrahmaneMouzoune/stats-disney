import classNames from "classnames";

interface IButton {
    text: string;
    type?: "primary" | "secondary";
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

function Button({text, type, onClick} : IButton) {
    return (
        <button className={classNames("btn", { "btn-primary": type === "primary" }, { "btn-secondary": type === "secondary" })} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;