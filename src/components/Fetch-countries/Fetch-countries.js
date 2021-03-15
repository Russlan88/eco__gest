import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryDetail from '../CountryDetail/Country-detail';
import Loader from '../Loader/Preloader';
import { Grid } from './Styled__fetch-countries';

const FetchCountries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then((res) => {
                setCountries(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        setFilteredCountries(
            countries.filter((country) =>
                country.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, countries]);

    if (loading) {
        return (
            <Loader />
        );
    }

    return (
        <div className="container">
            <h1>Countries Lists</h1>
            <input
                type="text"
                placeholder="Search Countries"
                onChange={(e) => setSearch(e.target.value)}
            />
            <Grid>
                {filteredCountries.map((country, idx) => (
                    <CountryDetail key={idx} {...country} />
                ))}
            </Grid>
        </div>
    );
}

export default FetchCountries;

