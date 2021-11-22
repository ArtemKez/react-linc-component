export function Link(props){
    return (
        <a className={props.class} href={props.href}>
            {props.text}
        </a>
    )
}