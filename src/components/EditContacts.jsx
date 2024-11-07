
import { useSelector, useDispatch } from 'react-redux';
import { updateContact } from '../redux/reducers';


import TabsComponent from '../components/TabsComponent';


import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
//material-ui avatar
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';


import { Mail, Phone, Edit2, Save, MapPinHouse } from 'lucide-react'

function editContacts() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [contact, setContact] = useState('')
  const [place, setPlace] = useState('')
  const [tags, setTags] = useState([])



  const [isEdit, setIsEdit] = useState(false)

  const { id } = useParams();
  const contactId = Number(id);

  const contactDetails = useSelector((state) =>
    state.contacts.contacts.find(contact => contact.id === contactId)
  );


  const dispatch = useDispatch();

  useEffect(() => {
    if (contactDetails) {
      setName(contactDetails.name);
      setMail(contactDetails.mail);
      setContact(contactDetails.phone);
      setPlace(contactDetails.place);
      setTags(contactDetails.tags);
    }
    
  }, [contactDetails]);


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setMail(value);
    } else if (name === "contact") {
      setContact(value);
    } else if (name === "place") {
      setPlace(value);
    }
  };

  const toggleEdit = () => {
    if (isEdit === false) {
      setIsEdit(true)
    }
    if (isEdit === true) {
      setIsEdit(false)
    }



  };

  const handleSave = () => {
    setIsEdit(false);
    const updatedData = {
      id: contactId,
      avatar: contactDetails.avatar,
      name: name,
      contactNumber: contact,
      mail: mail,
      place: place,

    };
    console.log(updatedData)
    dispatch(updateContact(contactId, updatedData)); // Update user with id 
  };

  return (
    <div className='w-full min-h-screen bg-custom-gradient py-10 flex flex-col  gap-10 justify-start items-center '>
      <div className='flex flex-col space-y-4 p-5 items-center'>
        <h1 className=' text-customDarkGreen text-2xl md:text-5xl font-semibold'>View Contact</h1>

        <Link to='/' className='text-blue-600 thover:text-customGreen bg-slate-50 px-3 py-2 rounded-lg'>
          <span>
            go back
          </span>
        </Link>
      </div>
      <div
        className='md:w-5/6 flex flex-col md:flex-row bg-white overflow-hidden rounded-lg min-h-[500px]'
      >
        {/* Left Section - Contact Details */}
        <div className='w-full md:w-2/5 flex items-center '>
          <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center space-y-4">
              <img
                src={contactDetails.avatar}
                alt={contactDetails.name}
                className="w-24 h-24 rounded-full object-cover"
              />

              {isEdit ? (
                <div className="w-full space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      value={mail}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Contact Number
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="tel"
                      value={contact}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="place" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Place
                    </label>
                    <input
                      id="place"
                      name="place"
                      type="text"
                      value={place}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h2>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Mail size={16} />
                    <span>{mail}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Phone size={16} />
                    <span>{contact}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <MapPinHouse size={16} />
                    <span>{place}</span>
                  </div>
                  <div className='flex gap-3 '>
                    {tags.map((tag, index) => (
                      <Chip key={index} label={tag} style={{color:"white", backgroundColor:"#415a77"}} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="px-6 pb-6">
              {isEdit ? (
                <button
                  onClick={handleSave}
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ease-in-out flex items-center justify-center"
                >
                  <Save className="mr-2 h-4 w-4" /> Save Changes
                </button>
              ) : (
                <button
                  onClick={toggleEdit}
                  className="w-full px-4 py-2 text-sm font-medium text-blue-600 bg-transparent border border-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ease-in-out flex items-center justify-center"
                >
                  <Edit2 className="mr-2 h-4 w-4" /> Edit Details
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Right Section - Tabs or Additional Content */}
        <div className="flex w-full md:w-3/5 bg-gray-200 justify-center items-center">
          <TabsComponent contactId={contactId} />
        </div>
      </div>
    </div>
  )
}

export default editContacts