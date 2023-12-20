import NewsFlash from './NewsFlash/NewsFlash'
import Summary from './Summary/Summary'
import AdditionalInfo from './AdditionalInfo/AdditionalInfo'
import './DetailExplore.css'

const DetailExplore = () => {
    return (
        <main className="detail-explore">
            <h2>Jawa Barat</h2>
            <NewsFlash />
            <Summary />
            <AdditionalInfo />
        </main>
    )
}

export default DetailExplore
