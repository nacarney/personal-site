import Card from "../ui/Card";
import classes from "./TextBlockItem.module.css";


function TextBlockItem(props){

    return (
        <li className={classes.item}>
          <Card>
            <div className={classes.content}>
              <h3>{props.title}</h3>
              <address>{props.address}</address>
              <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
              <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
            </div>
          </Card>
        </li>
      );

}

export default TextBlockItem;