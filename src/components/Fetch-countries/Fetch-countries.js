import React, { useState, useEffect } from "react";
import axios from "axios";
// import CountryDetail from '../CountryDetail/Country-detail';
import Loader from '../Loader/Preloader';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';


const FetchCountries = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://zmag.azurewebsites.net/api/products/getallfake", {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // useEffect(() => {
    //     setFilteredCountries(
    //         countries.filter((country) =>
    //             country.name.toLowerCase().includes(search.toLowerCase())
    //         )
    //     );
    // }, [search, countries]);

    if (loading) {
        return (
            <Loader />
        );
    }

    console.log(products)


    const columns = [
        {
            dataField: 'ar_codart',
            text: 'Product Names'
        }, {
            dataField: 'ar_descr',
            text: 'Product init'
        }];

    return (
        <BootstrapTable keyField="ar_codart" data={products} columns={columns} cellEdit={cellEditFactory({ mode: 'click' })} pagination={paginationFactory()} />
    );
}

export default FetchCountries;

