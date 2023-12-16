import NewsFlash from './NewsFlash/NewsFlash'
import Summary from './Summary/Summary'
import AdditionalInfo from './AdditionalInfo/AdditionalInfo'
import './DetailExplore.css'

const DetailExplore = () => {
    return (
        <main className="detail">
            <p className="province-name">Jawa Barat</p>
            <NewsFlash />
            <Summary />
            <AdditionalInfo />
        </main>
    )
}

export default DetailExplore
