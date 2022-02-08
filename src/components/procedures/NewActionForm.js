import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewActionForm(props) {

    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const criteriaInputRef = useRef();
    const min_performancesRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
    
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
    
        const meetupData = {
          title: enteredTitle,
          image: enteredImage,
          address: enteredAddress,
          description: enteredDescription,
        };
    
        props.onAddAction(actionData);
    }
    return(
        <Card>
            <form>
                
            </form>
        </Card>

    );
}