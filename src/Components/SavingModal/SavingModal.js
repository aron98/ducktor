import {Button, DialogContent, DialogTitle, FormControl, FormLabel, Input, Modal, ModalDialog, Stack} from "@mui/joy";
import {useState} from "react";

const SavingModal = (props) => {
    const initialState = {
        name: "",
        saving: ""
    }
    const [state, setState] = useState(initialState)
    const close = () => {
        props.close()
        setState(initialState)
    }

    const setSaving = (value) => {
        if (value === ""){
            setState({...state, saving: ""})
        }else{
            setState({...state, saving: Number(value)})
        }
    }

    return (
        <Modal open={props.open} onClose={() => close()}>
            <ModalDialog>
                <DialogTitle>Add new carbon footprint reduction</DialogTitle>
                <DialogContent>Fill in the information.</DialogContent>
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
                            <Input required type="number" value={state.saving} onChange={event => setSaving(event.target.value)} />
                        </FormControl>
                        <Button type="submit" disabled={
                            !(state.name !== null
                            && state.name.length > 0
                            && state.saving !== ""
                            && state.saving > 0)
                        }>Submit</Button>
                    </Stack>
                </form>
            </ModalDialog>
        </Modal>
    );
}

export default SavingModal;