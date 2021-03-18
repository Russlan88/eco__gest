import React, { useState, useEffect } from "react";
import Loader from '../Loader/Preloader';
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

// import css
import 'bootstrap/dist/css/bootstrap.min.css';

const { SearchBar } = Search;


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
                setProducts(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (loading) {
        return (
            <Loader />
        );
    }

    const columns = [{
        dataField: 'ar_codart',
        text: 'Nome del prodotto'
    }, {
        dataField: 'ar_descr',
        text: 'Descrizione del prodotto',
    }, {
        formatter: (rowContent, row) => {
            return (
                <div className="d-flex align-middle justify-content-center">
                    <input type="text" className="form-control mr-sm-8 mr-4" placeholder="Aggiungi il numero di prodotti" />
                    <a href="#" className="btn btn-info col-sm-4">Aggiungi la quantit&agrave;</a>
                </div>
            )
        }
    }];

    return (
        <>
            <ToolkitProvider
                keyField="id"
                data={products}
                columns={columns}
                search

            >
                {
                    // @ts-ignore
                    props => (
                        <div>
                            <SearchBar {...props.searchProps} />
                            <hr />
                            <BootstrapTable
                                {...props.baseProps}
                                // @ts-ignore
                                keyField="ar_codart" data={products} columns={columns} hover pagination={paginationFactory()}
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
            {/* <BootstrapTable keyField="ar_codart" data={products} columns={columns} pagination={paginationFactory()} /> */}
        </>
    );
}

export default FetchCountries;

