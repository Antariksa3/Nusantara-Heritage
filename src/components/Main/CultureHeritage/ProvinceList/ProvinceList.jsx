import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProvince } from "../../../../api/api";

const ProvinceList = () => {
    const [province, setProvince] = useState([])

    const provinces = [
        "Aceh",
        "Sumatera Utara",
        "Sumatera Barat",
        "Riau",
        "Kepulauan Riau",
        "Jambi",
        "Bengkulu",
        "Sumatera Selatan",
        "Kepulauan Bangka Belitung",
        "Lampung",
        "DKI Jakarta",
        "Jawa Barat",
        "Banten",
        "Jawa Tengah",
        "DI Yogyakarta",
        "Jawa Timur",
        "Bali",
        "Nusa Tenggara Barat (NTB)",
        "Nusa Tenggara Timur (NTT)",
        "Kalimantan Barat",
        "Kalimantan Tengah",
        "Kalimantan Selatan",
        "Kalimantan Timur",
        "Kalimantan Utara",
        "Sulawesi Utara",
        "Gorontalo",
        "Sulawesi Tengah",
        "Sulawesi Barat",
        "Sulawesi Selatan",
        "Sulawesi Tenggara",
        "Maluku",
        "Maluku Utara",
        "Papua Barat",
        "Papua",
    ];

    useEffect(() => {
        getProvince().then((province) => {
            // console.log(province)
            setProvince(province)
        })
    }, [])

    return (
        <div>
            <h3>List Provinsi di Indonesia</h3>
            <ul>
                {provinces.map((province, index) => (
                    <li key={index}>{province}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProvinceList;
