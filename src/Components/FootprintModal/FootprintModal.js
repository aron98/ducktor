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
        if (value === ""){
            setState({...state, footprint: ""})
        }else{
            setState({...state, footprint: Number(value)})
        }
    }

    return (
        <Modal open={props.open} onClose={() => close()}>
            <ModalDialog>
                <DialogTitle>Add new footprint</DialogTitle>
                <DialogContent>Fill in the information of the footprint.</DialogContent>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        props.submit(state)
                        close()
                    }}
                >
                    <Stack spacing={2}>
                        <FormControl>
                            <FormLabel>Activity</FormLabel>
                            <Input autoFocus required value={state.name} onChange={event => setState({...state, name: event.target.value})}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Carbon-dioxide emission in kg</FormLabel>
                            <Input required type="number" value={state.footprint} onChange={event => setFootprint(event.target.value)} />
                        </FormControl>
                        <Button type="submit" disabled={
                            !(state.name !== null
                            && state.name.length > 0
                            && state.footprint !== ""
                            && state.footprint > 0)
                        }>Submit</Button>
                    </Stack>
                </form>
            </ModalDialog>
        </Modal>
    );
}

export default FootprintModal;