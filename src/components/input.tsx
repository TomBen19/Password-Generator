import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Input: React.FC<{onNewPassword: (length : number, lowerLettersIsChecked : boolean, upperLettersisChecked :boolean, numberIsChecked :boolean) => void }> = (props) => {
    const [length, setLength] = useState<number>(0);
    const [lowerLettersIsChecked, setLowerLettersIsChecked] = useState(false)
    const [upperLettersisChecked, setUpperLettersIsChecked] = useState(false)
    const [numberIsChecked, setNumberIsChecked] = useState(false)

    const submitHandler = (event: any) => {
        


        props.onNewPassword(length, lowerLettersIsChecked, upperLettersisChecked, numberIsChecked);
       
        event.preventDefault();

    }
    const lengthChangeHandler = (event: any) => {
        setLength(event.target.value)

    }

    const lowerLetterChangeHandler = (event : any) => {
        if (event.target.checked) {

        
        setLowerLettersIsChecked(true)
        }
        else {
            setLowerLettersIsChecked(false)
        }
    }
    const upperLetterChangeHandler = (event : any) => {
        if (event.target.checked) {

        
        setUpperLettersIsChecked(true)
        }
        else {
            setUpperLettersIsChecked(false)
        }
    }
    const numberChangeHandler = (event : any) => {
        if (event.target.checked) {

        
        setNumberIsChecked(true)
        }
        else {
            setNumberIsChecked(false)
        }
    }
    
    
        return (
            <Form className='container' onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Length</Form.Label>
                <Form.Control type="number" placeholder="Length" value={length} onChange={lengthChangeHandler}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Add Uppercase Letters" onChange={upperLetterChangeHandler} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Add Lowercase Letters" onChange={lowerLetterChangeHandler}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Include Numbers" onChange={numberChangeHandler}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Include Symbols" />
              </Form.Group>
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </Form>
          );
};

export default Input;