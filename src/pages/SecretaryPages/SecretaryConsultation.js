import React, { useState, useEffect} from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SidebarItem } from "../../components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";
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

   

function SecretaryConsultation() {


    let { rdvId } = useParams();

    const [users, setUsers] = useState([]);
    const [docs, setDocs] = useState([]);

  const navigate = useNavigate();

  const [clinicDb, setClinicDb] = useState([]);


  
  
  

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
                Consultation pour : {rdvId}
              </Typography>
            </div>
          </div>
         
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          
        </CardBody>
        </Card>
    </div>

  );
}

export default SecretaryConsultation;
