/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Filter = () => {
    const inputRef = React.createRef();
    const selectRef = React.createRef();

    const [inpValue, setInpValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [country, setCountry] = useState([]);

    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);

    const handleChange = (e) => {
        e.preventDefault();
        setInpValue(e.target.value);

        fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
            .then((res) => res.json())
            .then((country) => {
                setCountry(country);
            });
    };

    const handleChangeSelect = (e) => {
        e.preventDefault();
        setSelectValue(e.target.value);

        fetch(`https://restcountries.eu/rest/v2/region/${e.target.value}`)
            .then((res) => res.json())
            .then((country) => {
                setCountry(country);
            });
    };

    return (
        <section className="container  my-3">
            <div className="row d-flex justify-content-around my-3">
                <div className="col-sm-6">
                    <form>
                        <input
                            type="search"
                            className="form-control"
                            name="search"
                            id="search"
                            ref={inputRef}
                            value={inpValue}
                            onChange={handleChange}
                            placeholder="search for a country"
                        />
                    </form>
                </div>

                <div className="col-sm-4">
                    <select
                        className="form-select"
                        value={selectValue}
                        ref={selectRef}
                        onChange={handleChangeSelect}
                    >
                        <option value="select by region">select by region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>

            {country.length > 0 && (
                <div className="card ">
                    {country.map((countries) => {
                        const { name, numericCode, flag, population, region, capital } = countries;
                        return (
                            <article key={numericCode}>
                                <div className="my-3 mx-3 card text-center col-6 mx-auto">
                                    <img src={flag} alt={name} className="card-img-top mt-2" />
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
                </div>
            )}
        </section>
    );
};

export default Filter;
