import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((res) => res.json())
            // eslint-disable-next-line no-shadow
            .then((countries) => {
                setCountries(countries);
                console.log(countries);
            });
    }, []);

    return (
        <div className="container">
            <section className="my-2 grid">
                {countries.map((country) => {
                    const { name, population, region, capital, flag } = country;

                    return (
                        <article key={country.numericCode}>
                            <div className="my-3 mx-3 card text-center">
                                <img src={flag} alt={name} className="card-img-top" />
                                <div className="card-body">
                                    <h3 className="card-title mt-1">{name}</h3>
                                    <h6>Population: {population}</h6>
                                    <h6>Region: {region}</h6>
                                    <h6>Capital: {capital}</h6>
                                    <Link
                                        to={`/countries/${name}`}
                                        className="btn btn-primary btn-sm px-3 mt-2"
                                        flag={flag}
                                        name={name}
                                    >
                                        Details <FiArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </section>
        </div>
    );
};

export default Countries;
