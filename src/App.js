import logo from './logo.svg';
import './App.scss';
import {Link} from "./components/Link";

function App() {
    const linksList = [
        {
            href: "https://google.com",
            class: 'btn',
            text: 'GOOGLE'
        },
        {
            href: "https://facebook.com",
            class: 'btn red',
            text: 'FACEBOOK'
        },
        {
            href: "https://www.linkedin.com/",
            class: 'btn white',
            text: 'LINKEDIN'
        },
    ];

    return (
        <div className={'links_wrapper'}>
            {linksList.map(data => Link(data))}

            <Link href={"https://google.com"} class={'btn'} text={'Google'}/>
        </div>
    );
}


export default App;
