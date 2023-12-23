import NewsFlash from './NewsFlash/NewsFlash'
import Summary from './Summary/Summary'
import AdditionalInfo from './AdditionalInfo/AdditionalInfo'
import './DetailExplore.css'

const DetailExplore = (props) => {
    return (
        <main className="detail-explore" id='detail-explore'>
            <h2>{props.prov_name}</h2>
            <NewsFlash
                banner={props.banner}
                flash_info={props.flash_info}
            />
            <Summary
                dance={props.dance}
                dance_desc={props.dance_desc}
                dance_image={props.dance_image}
                house={props.house}
                house_desc={props.house_desc}
                house_image={props.house_image}
                music={props.music}
                music_desc={props.music_desc}
                music_image={props.music_image}
                weapon={props.weapon}
                weapon_desc={props.weapon_desc}
                weapon_image={props.weapon_image}
                capital={props.capital}
                ethnic={props.ethnic}
                island={props.island}
                local_language={props.local_language}
                population={props.population}
            />
            {/* <AdditionalInfo /> */}
        </main>
    )
}

export default DetailExplore
