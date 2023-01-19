interface LabelProps {
    text: string;
    color: string;
}

export default function Label(props: LabelProps) {
    return (
        <div className={`text-${props.color}-500`}>{props.text}</div>
    );
}