

import { useState } from 'react'



//import for material ui tabs
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import ChartsTab from './ChartsTab';
import Notes from './Notes';
import Interactions from './Interactions';

import { useSelector, useDispatch } from 'react-redux';



function TabsComponent({contactId}) {
    const [value, setValue] = useState('1');

    //HandleChange Event for Tabs
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const contactDetails = useSelector((state) =>
        state.contacts.contacts.find(contact => contact.id === contactId)
      );
   

    const notes =  contactDetails.notes
    const interactionsData = contactDetails.emailThreads

    return (
        <div className=' w-full min-h-full md:p-5  '>

            <Box sx={{ width: '100%', typography: 'body1' }} >
                <TabContext value={value}>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        borderBottom: 1,
                        borderColor: 'divider', // Defines the thickness and style of the border
                    }}   
                    className='border-gray-200'>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Notes"  value="1" />
                            <Tab label="Interactions" value="2" />
                            <Tab label="Charts" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><Notes noteData ={notes} contactId={contactId}/></TabPanel>
                    <TabPanel value="2"><Interactions emailThreads={interactionsData}/></TabPanel>
                    <TabPanel value="3"><ChartsTab/></TabPanel>
                </TabContext>
            </Box>
        </div>
    )
}

export default TabsComponent