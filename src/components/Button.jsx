import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonComponent() {
    // State to keep track of the number of recipients
    const [selectedRecipients, setSelectedRecipients] = React.useState(0);

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '10%' }}>
            
            <Button variant="text">
                You have selected
                &nbsp;
                <span style={{ fontSize: '1.2em' }}>{selectedRecipients}</span>
                &nbsp;
                recipients
            </Button>

            <Button 
                variant="contained" 
                color="primary"
                // Disable the button when there are less then 1 recipients selected.
                disabled={selectedRecipients < 1}
            >
                Continue
            </Button>
        </div>
    );
}