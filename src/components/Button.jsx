import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonComponent() {
    // State to keep track of the number of recipients
    const [selectedRecipients, setSelectedRecipients] = React.useState(0);

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '10%' }}>
            <Button variant="text">You have selected {selectedRecipients} recipients</Button>
            <Button variant="contained" color="primary">
                Continue
            </Button>
        </div>
    );
}