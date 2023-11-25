import {Button, DialogContent, DialogTitle, FormControl, FormLabel, Input, Modal, ModalDialog, Stack} from "@mui/joy";
import {useState} from "react";

const FootprintModal = (props) => {
    const initialState = {
        name: "",
        footprint: ""
    }
    const [state, setState] = useState(initialState)
    const close = () => {
        props.close()
        setState(initialState)
    }

    const setFootprint = (value) => {
        if (value === 0){
            setState({...state, footprint: ""})
        }else{
            setState({...state, footprint: value})
        }
    }

    return (
        <Modal open={props.open} onClose={() => close()}>
            <ModalDialog>
                <DialogTitle>Create new project</DialogTitle>
                <DialogContent>Fill in the information of the project.</DialogContent>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        props.submit(state)
                        close()
                    }}
                >
                    <Stack spacing={2}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input autoFocus required value={state.name} onChange={event => setState({...state, name: event.target.value})}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Carbon-dioxide emission in kg</FormLabel>
                            <Input required type="number" value={state.footprint} onChange={event => setFootprint(Number(event.target.value))} />
                        </FormControl>
                        <Button type="submit" disabled={
                            !(state.name !== null
                            && state.name.length > 0
                            && state.footprint !== 0
                            && state.footprint > 0)
                        }>Submit</Button>
                    </Stack>
                </form>
            </ModalDialog>
        </Modal>
    );
}

export default FootprintModal;