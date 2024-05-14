import React, { useState, useEffect} from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineHeader,
} from "@material-tailwind/react";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SidebarItem } from "../../components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { WalletMinimal, Users, Hospital, TrashIcon } from "lucide-react";
import { useCountries } from "use-react-countries";
import axios from "axios";

import {
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  CardFooter,
  Avatar,
  Tooltip,
  Card,
  CardHeader,
  CardBody,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
  Input, 
  IconButton, 
  Drawer
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  PencilIcon,
  UserPlusIcon,
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";

   

function SecretaryRDV() {


  const navigate = useNavigate();

  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [idToDelete, setIdToDelete] = useState();

  const TABS = [
    {
      label: "Docteurs",
      value: "docteurs",
    },
    {
      label: "Secrétaire",
      value: "secretaire",
    },
    {
      label: "Patients",
      value: "patients",
    },
  ];

  const TABLE_HEAD = ["Patient", "email", "Date de naissance", "Téléphone", "Actions",];

  
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  

  


  const [users, setUsers] = useState([]);
  const [rdvs, setRdvs] = useState([]);
  const [clinicDb, setClinicDb] = useState([]);

  const handleCancel = () => {
    setDisplayed(0);
  };

  
  
  

  const cdb = localStorage.getItem('clinic-database');
  useEffect(() => {
    const token = localStorage.getItem('access-token');
    const role = localStorage.getItem('role');
    const clinicDb = localStorage.getItem('clinic-database');

    const fetchUsers = async () => {
      const token = localStorage.getItem('access-token');
      const role = localStorage.getItem('role');
      setClinicDb(cdb);
      if(cdb){
        try {
          axios.get('http://localhost:3002/patients', {
              headers: {
                  // 'Authorization': Bearer ${token} ,
                  'access-token': token ,
                  'clinic-database': cdb ,
                  'role' : role
              }
          })
          .then(response => {
              //console.log(response.data[0].role);
                
                if(response.data){
                    setUsers(response.data);
                    const doctors = response.data.filter(user => user.role === "doctor");
                    setDocs(doctors);
                }
                console.log(users);
          })
          .catch(error => {
              console.log(error);
          });
        } catch (error) {
          console.log("Token d'authentification non disponible.");
        }
      }
    };
  
    fetchUsers();
  }, []);

  useEffect(() => {
    const clinicDb = localStorage.getItem('clinic-database');

      const token = localStorage.getItem('access-token');
      const role = localStorage.getItem('role');
      setClinicDb(cdb);
      if(cdb){
        try {
          axios.get('http://localhost:3002/users', {
              headers: {
                  // 'Authorization': Bearer ${token} ,
                  'access-token': token ,
                  'clinic-database': cdb ,
                  'role' : role
              }
          })
          .then(response => {
              //console.log(response.data[0].role);
                
                if(response.data){
                    const doctors = response.data.filter(user => user.role === "doctor");
                    setDocs(doctors);
                }
                console.log(users);
          })
          .catch(error => {
              console.log(error);
          });
        } catch (error) {
          console.log("Token d'authentification non disponible.");
        }
      }
  
  }, []);

  const TABLE_ROWS = users;


  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [time, setTime] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [selectedDoc, setSelectedDoc] = useState();
  const [selectedType, setSelectedType] = useState();
  const [date, setDate] = useState();
  const [docId, setDocId] = useState();
  const [patientId, setPatientId] = useState();
  const [displayed, setDisplayed] = useState();
  const [docs, setDocs] = useState([]);



  

  const handleDocSelection = (event) =>{
    setDocId(event.target.value);
  }
  const handlePatientSelection = (event) =>{
    setPatientId(event.target.value);
  }
  const handleTypeSelection = (event) =>{
    setSelectedType(event.target.value);
  }

  const handleDeleteUser = (UserIdDelete) => {
    const tokens = localStorage.getItem('access-token');
    const roles = localStorage.getItem('role');
    const clinicDbs = localStorage.getItem('clinic-database');
    
    // Vérifier si le token est disponible
    if (UserIdDelete =! 0) {
        // Ajouter le token dans les en-têtes de la requête
        axios.delete(`http://localhost:3002/users/${UserIdDelete}`, {
            headers: {
                // 'Authorization': `Bearer ${token}` ,
                'access-token': tokens ,
                'clinic-database': clinicDbs ,
                'role' : roles
            }
        })
        .then(response => {
            console.log(response);
            handleCancel();
            navigate("/admin/dashboard");
        })
        .catch(error => {
            console.log(error);
        });
    } else {
        console.log("Token d'authentification non disponible.");
    }
}

  const handleAddPatient = async () => {
    const token = localStorage.getItem('access-token');
    const role = localStorage.getItem('role');
    const clinicDb = localStorage.getItem('clinic-database');

    // Vérifier si le token est disponible
    if (token) {
        // Ajouter le token dans les en-têtes de la requête
        axios.post('http://localhost:3002/patients', {
            	
            "last_name": nom,
            "first_name": prenom,
            "email": email,
            "phone": phone,
            "gender": selectedGender,
            "date_of_birth": date,
            "doctor_id": docId

        } , {
            headers: {
                // 'Authorization': `Bearer ${token}` ,
                'access-token': token ,
                'clinic-database': clinicDb ,
                'role' : role
            }
        })
        .then(response => {
            console.log(response);
            handleCancel();
            navigate("/secretaire/dashboard");
        })
        .catch(error => {
            console.log(error);
        });
    } else {
        console.log("Token d'authentification non disponible.");
    }
  };

  const handleAddRDV = async () => {
    const token = localStorage.getItem('access-token');
    const role = localStorage.getItem('role');
    const clinicDb = localStorage.getItem('clinic-database');

    // Vérifier si le token est disponible
    if (token) {
        // Ajouter le token dans les en-têtes de la requête
        axios.post('http://localhost:3002/appointments', {
            	
            "patient_id": patientId,
            "time": time,
            "date": date,
            "type": selectedType,
            "doctor_id": docId

        } , {
            headers: {
                // 'Authorization': `Bearer ${token}` ,
                'access-token': token ,
                'clinic-database': clinicDb ,
                'role' : role
            }
        })
        .then(response => {
            console.log(response);
            handleCancel();
            navigate("/secretaire/rdv");
        })
        .catch(error => {
            console.log(error);
        });
    } else {
        console.log("Token d'authentification non disponible.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('access-token');
    const role = localStorage.getItem('role');
    const clinicDb = localStorage.getItem('clinic-database');

    const fetchRDVs = async () => {
      const token = localStorage.getItem('access-token');
      const role = localStorage.getItem('role');
      setClinicDb(cdb);
      if(cdb){
        try {
          axios.get('http://localhost:3002/appointments', {
              headers: {
                  // 'Authorization': Bearer ${token} ,
                  'access-token': token ,
                  'clinic-database': cdb ,
                  'role' : role
              }
          })
          .then(response => {
              //console.log(response.data[0].role);
                
                if(response.data){
                    setRdvs(response.data);
                }
                console.log(rdvs);
          })
          .catch(error => {
              console.log(error);
          });
        } catch (error) {
          console.log("Token d'authentification non disponible.");
        }
      }
    };
  
    fetchRDVs();
  }, []);

    
  

  return (
    
    <div className="backdrop-blur-none	 bg-login-color transition duration-500 ease-in-out w-screen h-screen flex justify-center items-center">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Accueil" alert />
          <SidebarItem icon={<Users size={20} />} text="Utilisateurs" active />
          <SidebarItem icon={<Hospital size={20} />} text="Patients" alert />
          <SidebarItem icon={<Calendar size={20} />} text="Rendez-vous" />
          <SidebarItem icon={<WalletMinimal size={20} />} text="Paiements" />
          <hr className="my-3" />
        </Sidebar>
        <Card className="h-full w-full rounded-none">
          <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Liste des rendez-vous
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 2xl:flex-row">
              <Button onClick={() => setDisplayed(1)} className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Ajouter un rendez-vous
              </Button>
            </div>
          </div>
          
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
        <CardBody className="overflow-scroll px-4 flex flex-wrap flex-row gap-4 items-start">
          
            {
                rdvs.map((item) => (
                    <TimelineItem className="w-[22rem]">
                      <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" variant="ghost" color="red">
                          <Calendar className="h-5 w-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1 items-start">
                          <Typography variant="h6" color="blue-gray">
                            {item.type}: {item.doctor_id} - {item.patient_id}
                          </Typography>
                          <Typography variant="small" color="gray" className="font-normal">
                          Le {new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(item.date))} à {item.time}
                          </Typography>
                        </div>
                      </TimelineHeader>
                    </TimelineItem>
                    )
                )
            }
          
          
          
        </CardBody>
        </CardBody>
        </Card>
        { displayed ? (

            <div className="relative z-20" aria-labelledby="modal-title" role="dialog" aria-modal="true">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className=" flex min-h-full items-center justify-center p-4 text-center lg:items-center lg:p-0">
                  <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all 2xl:my-8 2xl:w-full 2xl:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 lg:p-6 lg:pb-4">
                      <div className="2xl:flex justify-start 2xl:items-start">
                        <form class="w-full max-w-2xl">
                          <div class="flex  mx-3 mb-6">
                            <div class="w-4/6 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                Patient
                              </label>
                              <div class="relative">
                                <select name="roler" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={patientId} onChange={handlePatientSelection}>
                                  <option value="">Choisir</option>
                                    {
                                        users.map((item) => (
                                            <option key={item.id} value={item.id}>{item.first_name} {item.last_name}</option>)
                                        )
                                    }
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                              </div>
                            </div>
                            <div class="w-4/6 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                Docteur
                              </label>
                              <div class="relative">
                                <select name="roler" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={docId} onChange={handleDocSelection}>
                                  <option value="">Choisir</option>
                                    {
                                        docs.map((item) => (
                                            <option key={item.id} value={item.id}>{item.first_name} {item.last_name}</option>)
                                        )
                                    }
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                              </div>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                heure
                              </label>
                              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="time" placeholder="SIX" value={time} onChange={(e) => setTime(e.target.value)}/>
                            </div>
                          </div>
                          <div class="flex mx-3 mb-6">
                            
                            <div class="w-full md:w-1/2 px-3">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                date
                              </label>
                              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="SIX" value={date} onChange={(e) => setDate(e.target.value)}/>
                            </div>
                            <div class="w-4/6 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                type de rdv
                              </label>
                              <div class="relative">
                                <select name="roler" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={selectedType} onChange={handleTypeSelection}>
                                  <option value="">Choisir</option>
                                  <option value="Consultation">Consultation</option>
                                  <option value="Test">Test</option>
                                  <option value="Contrôle">Contrôle</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          
                        </form>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 2xl:flex 2xl:flex-row-reverse 2xl:px-6">
                      <button onClick={handleAddRDV} type="button" className="inline-flex w-full justify-center rounded-md bg-super-admin-submit px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 2xl:ml-3 2xl:w-auto">Enregistrer</button>
                      <button onClick={()=>{setDisplayed(0)}} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 2xl:mt-0 2xl:w-auto">Annuler</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ) : (
            <></>
        )
        }
    </div>

  );
}

export default SecretaryRDV;
