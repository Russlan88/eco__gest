import React from "react";
import { Img, GridItem } from './Styled__country-detail';

const CountryDetail = (props) => {
    const { name, flag } = props;

    return (

        <GridItem >
            <Img src={flag} alt={name} />
            <div className="grid__name" style={{ textTransform: 'uppercase', letterSpacing: 1 }}>{name}</div>
        </GridItem>
    );
};

export default CountryDetail;