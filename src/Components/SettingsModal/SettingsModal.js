import {Button, DialogContent, DialogTitle, FormControl, FormLabel, Input, Modal, ModalDialog, Stack} from "@mui/joy";
import {useState} from "react";
import Link from "@mui/joy/Link";

const SettingsModal = (props) => {
    const [state, setState] = useState(props.initialState)
    const close = () => {
        props.close()
    }

    const setLimit = (value) => {
        if (value === ""){
            setState({...state, limit: ""})
        }else{
            setState({...state, limit: Number(value)})
        }
    }

    return (
        <Modal open={props.open} onClose={() => close()}>
            <ModalDialog>
                <DialogTitle>Change your 🦆-ing settings</DialogTitle>
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
                            <FormLabel>Your duck name (<Link href="https://nerdburglars.net/namegenerator/duck-name-generator/" target="_blank">Duck Name Generator</Link>)</FormLabel>
                            <Input autoFocus required value={state.name} onChange={event => setState({...state, name: event.target.value})}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Carbon-dioxide emission in kg</FormLabel>
                            <Input required type="number" value={state.limit} onChange={event => setLimit(event.target.value)} />
                        </FormControl>
                        <Button type="submit" disabled={
                            !(state.name !== null
                                && state.name.length > 0
                                && state.limit !== ""
                                && state.limit > 0)
                        }>Submit</Button>
                    </Stack>
                </form>
            </ModalDialog>
        </Modal>
    );
}

export default SettingsModal;