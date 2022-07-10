import './card-list.styles.css'
import Card from '../card/card.component'

import { Monster } from '../../App'

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster, index) => {
      return <Card monster={monster} key={index} />
    })}
  </div>
)

export default CardList
