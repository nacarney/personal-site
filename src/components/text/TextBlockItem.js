import Card from '@mui/material/Card';
import classes from "./TextBlockItem.module.css";


function TextBlockItem(props){

    return (
        <li className={classes.item}>
          <Card raised = "true">
            <div className={classes.content}>
              <h3>{props.title}</h3>
              <p>{props.description}</p>
            </div>
          </Card>
        </li>
      );

}

export default TextBlockItem;