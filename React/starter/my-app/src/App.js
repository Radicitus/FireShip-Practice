import React from 'react';

function Card(props) {
    return (
        <section>
            <h2>{props.icon} Title</h2>
            {props.children}
        </section>
    );
}

function MyIcon() {
    return <i>🔥</i>
}

export default function App() {
    return (
        <div>
            <Card icon={<MyIcon/>}>
                <p>The body of the card</p>
            </Card>
        </div>
    );
}