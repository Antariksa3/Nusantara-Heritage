import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProvince } from "../../../../api/api";
import './ProvinceList.css'

const ProvinceList = () => {
    const [provinces, setProvinces] = useState([]);

    useEffect(() => {
        getProvince().then((provinceData) => {
            setProvinces(provinceData);
        });
    }, []);

    return (
        <div className="province-list">
            <h3>List Provinsi di Indonesia</h3>
            <ul>
                {provinces.map((province) => (
                    <li key={province.id}>
                        <Link to={`/detailprovince/${province.id}`}>
                            {province.province_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProvinceList;
