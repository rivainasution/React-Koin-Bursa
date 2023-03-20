import { faSortDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";
import { Modals } from "./pages";

export default function Setting({currencySymbol, setCurrencySymbol, setRates, rates, setSymbol}){
    const [lgShow, setLgShow] = useState(false);

    return(
        <Container className="my-3">
            <div className="d-flex flex-row justify-content-end align-items-center t-4">
                <div className='d-flex align-items-start justify-content-center t-4 t-hover mx-3'>
                    <FontAwesomeIcon icon={faSortDown} className='mx-1' onClick={()=>setLgShow(true)}/>
                    <span>{currencySymbol}</span>
                </div>
                <Form>
                    <Form.Check 
                        type="switch"
                        id="mode"
                        label="Dark"
                        // onClick={setMode(true)}
                    />
                </Form>
            </div>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Pilih Currency
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modals 
                        currencySymbol={currencySymbol}
                        setCurrencySymbol={setCurrencySymbol}
                        setRates={setRates}
                        rates={rates}
                        setLgShow={setLgShow}
                        setSymbol={setSymbol}
                    />
                </Modal.Body>
            </Modal>
        </Container>
    );
}