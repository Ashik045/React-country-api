import { useEffect, useState } from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const [country, setCountry] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then((res) => res.json())
            // eslint-disable-next-line no-shadow
            .then((country) => {
                setCountry(country);
                console.log(country);
            });
    }, [name]);

    return (
        <>
            <Link to="/">
                <button type="button" className="btn btn-sm btn-outline-warning m-2">
                    <FaAngleDoubleLeft /> back to home
                </button>
            </Link>
            <div className="container">
                {country.map((cou) => {
                    const {
                        flag,
                        // eslint-disable-next-line no-shadow
                        name,
                        nativeName,
                        numericCode,
                        capital,
                        borders,
                    } = cou;

                    return (
                        <article key={numericCode}>
                            <div className="card col-8 mx-auto">
                                <img src={flag} alt={name} className="card-img-top" />
                                <div className="card-body">
                                    <div className="card-text">
                                        <h1>{name}</h1>
                                        <h5>Native name: {nativeName}</h5>
                                        <h5>Capital: {capital}</h5>
                                        <h5>Border Countries: {borders}</h5>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </>
    );
};

export default Details;
