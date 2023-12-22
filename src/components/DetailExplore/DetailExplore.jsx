import NewsFlash from './NewsFlash/NewsFlash'
import Summary from './Summary/Summary'
import AdditionalInfo from './AdditionalInfo/AdditionalInfo'
import './DetailExplore.css'

const DetailExplore = (props) => {
    return (
        <main className="detail-explore">
            <h2>{props.prov_name}</h2>
            <NewsFlash
                flash_info={props.flash_info}
            />
            <Summary
                dance={props.dance}
                dance_image={props.dance_image}
                house={props.house}
                house_image={props.house_image}
                music={props.music}
                music_image={props.music_image}
                weapon={props.weapon}
                weapon_image={props.weapon_image}
            />
            <AdditionalInfo />
        </main>
    )
}

export default DetailExplore
