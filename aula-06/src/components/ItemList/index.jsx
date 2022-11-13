/*const ItemList = (props) =>{
    return <li><h2>{props.item.modelo}</h2></li>;
};*/
import styles from './styles.module.css';

const ItemList = ({item}) => {
    const {id, marca, modelo, descricao, cor, img} = item;

    return (
        <li className={styles.item_list} style={{background: cor}}>
            <h2>{modelo}</h2>
            <h3>{marca}</h3>
            <p>{descricao}</p>
            <img src={img}/>
        </li>

    )
}

export default ItemList;