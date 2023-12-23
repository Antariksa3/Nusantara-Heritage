import React, { useEffect, useState } from 'react'
import DetailExplore from '../components/DetailExplore/DetailExplore'
import { useParams } from 'react-router-dom';
import { getDetailProvince } from '../api/api';
import HeaderDetail from '../components/Header/HeaderDetail';
import FooterDetail from '../components/Footer/FooterDetail';
import ScrollUp from '../components/ScrollUp/ScrollUp';

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
            <HeaderDetail />
            {detailProv && (
                <DetailExplore
                    prov_name={detailProv.province_name}
                    banner={detailProv.banner}
                    flash_info={detailProv.flash_info}
                    dance={detailProv.dance}
                    dance_desc={detailProv.dance_desc}
                    dance_image={detailProv.dance_image}
                    house={detailProv.regional_house}
                    house_desc={detailProv.regional_house_desc}
                    house_image={detailProv.regional_house_image}
                    music={detailProv.music}
                    music_desc={detailProv.music_desc}
                    music_image={detailProv.music_image}
                    weapon={detailProv.weapon}
                    weapon_desc={detailProv.weapon_desc}
                    weapon_image={detailProv.weapon_image}
                    capital={detailProv.capital}
                    ethnic={detailProv.ethnic}
                    island={detailProv.island}
                    local_language={detailProv.local_language}
                    population={detailProv.population}
                />
            )}
            <FooterDetail />
            <ScrollUp to='detail-explore' />
        </div>
    )
}

export default DetailProvince   
