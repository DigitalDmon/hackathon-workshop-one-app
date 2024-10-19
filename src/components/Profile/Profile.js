export default function Profile({name, age, country}) {
    return (
        <div>
            <h1>Mi nombre es: {name}</h1>
            <p>Edad: {age}</p>
            <p>Vendo de: {country}</p>
        </div>
    )
}