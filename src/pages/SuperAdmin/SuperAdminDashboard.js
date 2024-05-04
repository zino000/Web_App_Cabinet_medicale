import React, { useState, useEffect} from "react";
import { SidebarItem } from "../../components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logoImage from './medicare_logo.png';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, PlusIcon , TrashIcon} from "@heroicons/react/24/solid";



import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
    Navbar,
    MobileNav,
    Button,
    IconButton,
    Input,
    Drawer,
    CardHeader,
    CardBody,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";

function SuperAdminDashboard() {

    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);

    


      const TABLE_HEAD = ["Cabinet", "Adresse", "Email", "Fix", "Code postal", "Actions"];
 
    const TABLE_ROWS = [
      {
        cabinet: "Cabinet AAA",
        email: "cabinet111@exemple.com",
        adresse: "Rabat, RUE FGHJFG",
        fix: "0612345678",
        code: "123456",
      },
      {
        cabinet: "Cabinet BBB",
        email: "cabinet222@exemple.com",
        adresse: "Rabat, RUE FGHJFG",
        fix: "0612345678",
        code: "123456",
      },
      {
        cabinet: "Cabinet CCC",
        email: "cabinet333@exemple.com",
        adresse: "Rabat, RUE FGHJFG",
        fix: "0612345678",
        code: "123456",
      },
    ];

  return (
    
    <div className="backdrop-blur-none relative transition duration-500 ease-in-out transform w-screen h-screen flex justify-center items-center">
      <div className="flex w-full h-full overflow-hidden lg:h-full flex-col transition duration-500 ease-in-out transform  justify-center items-start bg-white py-4 px-16 sm:px-4">
        <Navbar className="z-50 sticky shadow-none top-0 max-w-screen-xl py-1 px-0 lg:py-1">
          <div className="container flex flex-row items-center justify-between text-blue-gray-900">
            <div className="w-full flex items-start justify-start mt-1">
              <img className=" h-10 -ml-2" src={logoImage} alt="Logo"/>
            </div>
            <div className="container mx-auto flex justify-end">
              <div className="flex items-center gap-x-1 mt-1">
                <Button variant="gradient" size="md" className="" color="red">
                  <span>Deconnexion</span>
                </Button>
              </div>
            </div>
          </div>
        </Navbar>

        <Card className="h-full w-full mt-10">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                    <Typography variant="h4" color="blue-gray">
                      Cabinets
                    </Typography>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <Button className="flex items-center gap-3 border-blue border" color="indigo">
                        <PlusIcon strokeWidth={2} className="h-4 w-4" />
                        Ajouter un cabinet
                    </Button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="w-full mb-8">
                <Input
                  label="Rechercher un cabinet"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left border rounded-xl	">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(
                  ({ cabinet, email, fix, adresse, code }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
                
                    return (
                      <tr key={cabinet}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {cabinet}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {adresse}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal opacity-70"
                                >
                                {email}
                              </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {fix}
                          </Typography>
                        </td>
                        <td className={classes}>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                                {code}
                            </Typography>
                        </td>
                        <td className={classes}>
                          <div className="">
                            <TrashIcon strokeWidth={2} className="h-8 w-8 border rounded bg-red-400 text-white p-1" />
                          </div>
                          <div>
                            <PencilIcon strokeWidth={2} className="h-8 w-8 border rounded bg-black text-white p-1" />
                          </div>
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-blue-gray-50 p-4 pt-0 mb-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
              Page 1 de 10
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm">
                Précédant
              </Button>
              <Button variant="outlined" size="sm">
                Suivant
              </Button>
            </div>
          </CardFooter>
        </Card>
        
      </div>
      
    </div>
  
  );
}

export default SuperAdminDashboard;
