import ItemList from './components/ItemList/';

import { carros } from './mock/carros.js';

import styles from './styles.module.css';

  const AppCarros = () => {
    return (
      <ul>
        {carros.map((carro)=>(
            <ItemList key={`list-item-${carro.id}`} item={carro}/>
        ))}
        <p className={styles.item_list}>a</p>
      </ul>
    )
  }
  
  export default AppCarros; 