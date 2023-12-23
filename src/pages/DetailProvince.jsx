import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import DetailExplore from '../components/DetailExplore/DetailExplore'
import Footer from '../components/Footer/Footer'
import { useParams } from 'react-router-dom';
import { getDetailProvince } from '../api/api';

const DetailProvince = () => {
    const { id } = useParams();
    const [detailProv, setDetailProv] = useState(null);

    useEffect(() => {
        getDetailProvince(id).then((detailProv) => {
            setDetailProv(detailProv)
        })
    }, [id])

    return (
        <div>
            <Header />
            {detailProv && (
                <DetailExplore
                    prov_name={detailProv.province_name}
                    flash_info={detailProv.flash_info}
                    dance={detailProv.dance}
                    dance_image={detailProv.dance_image}
                    house={detailProv.regional_house}
                    house_image={detailProv.regional_house_image}
                    music={detailProv.music}
                    music_image={detailProv.music_image}
                    weapon={detailProv.weapon}
                    weapon_image={detailProv.weapon_image}
                    capital={detailProv.capital}
                    ethnic={detailProv.ethnic}
                    island={detailProv.island}
                    local_language={detailProv.local_language}
                />
            )}
            <Footer />
        </div>
    )
}

export default DetailProvince   
