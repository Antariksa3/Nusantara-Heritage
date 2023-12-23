import React from "react";

import './CultureHeritage.css';

import HeaderImage from '../../../assets/images/culture/heading-bg.svg';
import GridLeft from './LeftContent/LeftContent'
import GridRight from './RightContent/RightContent'
import ProvinceList from "./ProvinceList/ProvinceList";


import Wayang from '../../../assets/images/culture/wayang.svg';
import RumahGadang from '../../../assets/images/culture/rumah-gadang.svg';
import TariSaman from '../../../assets/images/culture/saman.svg';
import Keris from '../../../assets/images/culture/keris.svg';
import Angklung from '../../../assets/images/culture/angklung.svg';

const CultureHeritage = () => {
    return (
        <div className="culture" id="culture">
            <div className="heading">
                <img src={HeaderImage}></img>
                <h3>Kebudayaan di Indonesia</h3>
            </div>
            <div className="grid">
                <GridLeft image={Wayang} category="Kesenian" name="Wayang" text="Wayang merupakan warisan budaya Indonesia yang kaya akan nilai-nilai tradisional, seni, dan cerita-cerita klasik yang mendalam. Melalui pertunjukan wayang kulit atau wayang orang, masyarakat Indonesia memperoleh pengajaran moral, sejarah, dan nilai kehidupan yang turun-temurun. Wayang juga menjadi simbol penting dalam masyarakat, tidak hanya sebagai hiburan, tetapi juga sebagai sarana untuk mempertahankan dan mewariskan warisan budaya yang khas dan berharga bagi generasi mendatang." />
                <GridRight image={RumahGadang} category="Rumah Daerah" name="Rumah Gadang" text="Rumah Gadang, ikon budaya Minangkabau, adalah rumah tradisional dengan atap melengkung mirip tanduk kerbau. Selain sebagai tempat tinggal, rumah ini menyimpan nilai simbolis yang mendalam, mewakili kekayaan, kebesaran keluarga, dan menjadi pusat kegiatan budaya serta upacara adat dalam masyarakat Minangkabau." />
                <GridLeft image={Keris} category="Senjata" name="Keris" text="Keris, senjata tradisional Indonesia, bukan hanya simbol kejantanan tapi juga memiliki makna spiritual dan simbolis yang dalam. Dikenal dengan bilah berlekuk khasnya, keris bukan sekadar senjata, melainkan juga pusaka yang dianggap membawa keberuntungan serta sebagai karya seni yang menggambarkan keahlian tinggi para pandai besi, memperkaya warisan budaya Indonesia dengan nilai-nilai filosofis dan sejarah yang kaya." />
                <GridRight image={TariSaman} category="Tarian" name="Tari Saman" text="Tari Saman, tarian tradisional Aceh, Indonesia, memukau dengan gerakan yang serasi dan cepat diiringi nyanyian dan tepukan tangan. Dalam pertunjukan yang dilakukan secara berkelompok, para penari duduk berjejer saling berhadapan, menampilkan harmoni gerakan yang koordinatif dan indah. Lebih dari sekadar tarian, Saman menjadi simbol kebersamaan, kekompakan, dan kekuatan kolektivitas, menggambarkan nilai-nilai budaya yang mendalam serta keindahan seni yang memukau dari warisan budaya Indonesia." />
                <GridLeft image={Angklung} category="Alat Musik" name="Angklung" text="Angklung adalah alat musik tradisional Indonesia yang terbuat dari bambu. Dikenal karena suaranya yang unik, angklung menghasilkan nada saat bambu diguncangkan. Alat musik ini dimainkan dengan cara digoyangkan, dan sering kali dimainkan secara kolektif dalam sebuah ensemble. Angklung bukan hanya alat musik, tapi juga simbol identitas budaya Indonesia yang kaya, sering digunakan dalam upacara adat, pertunjukan seni, dan kegiatan budaya lainnya, mewakili kekayaan warisan musik dan keindahan tradisi Indonesia." />
            </div>
            <ProvinceList />
        </div>
    )
}

export default CultureHeritage