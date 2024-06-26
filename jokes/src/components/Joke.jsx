import React, { useEffect, useRef } from "react";
import Button from "../Button";

const stats = [
    { id: 1, name: 'Joke', value: '44 million' },
    { id: 2, name: 'Numbers of Api user', value: '10 CR' },
    { id: 3, name: 'New Joke added annually', value: '46,000' },
];

const Joke = () => {
    const [joke, setJoke] = React.useState("");
    const bgRef = useRef(null);

    useEffect(() => {
        const rotateBackground = () => {
            if (bgRef.current) {
                bgRef.current.style.transform = `rotate(${Date.now() / 1000}deg)`;
            }
            requestAnimationFrame(rotateBackground);
        };

        rotateBackground();

        return () => cancelAnimationFrame(rotateBackground);
    }, []);

    const fetchApi = () => {
        fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    return (
        <div style={styles.jokeContainer}>
            <div ref={bgRef} className="bg-rotate" />

            <h1>Joke Generator Using React and Joke API</h1>
            <Button callApi={fetchApi} />
            <p style={styles.jokeText}>{joke}</p>            <div className="bg-white py-24 sm:py-32 z-10 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

        </div>
    );
}

const styles = {
    jokeContainer: {
        position: 'relative',
        backgroundColor: 'lightgreen',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'darkgreen',
        padding: '20px',
        boxSizing: 'border-box',
    },
    jokeText: {
        margin: '20px',
        fontSize: '1.5rem',
        textAlign: 'center',
    },
};

export default Joke;
