import React, { useState, useEffect } from "react";
import axios from "axios";
// import CountryDetail from '../CountryDetail/Country-detail';
import Loader from '../Loader/Preloader';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';


const FetchCountries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://zmag.azurewebsites.net/api/Products/GetAllFake", {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((res) => {
                setCountries(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    delete axios.defaults.headers.common["Authorization"];

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

    console.log(countries)

    const columns = [{
        dataField: "id",
        text: "ID"
    },
    {
        dataField: 'name',
        text: 'Product Names'
    }, {
        dataField: 'alpha3Code',
        text: 'Product init'
    }];

    return (
        <BootstrapTable keyField="alpha3Code" data={countries} columns={columns} cellEdit={cellEditFactory({ mode: 'click' })} />
    );
}

export default FetchCountries;

