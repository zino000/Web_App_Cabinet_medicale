import React, { useState, useEffect} from "react";
import { SidebarItem } from "../../components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logoImage from './medicare_logo.png';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";



import {
    Checkbox,
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

function SuperAdminAddCabinet() {

    

  return (
    
    <div className="backdrop-blur-none relative transition duration-500 ease-in-out w-screen h-screen flex justify-start items-start">
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
            <div className="flex px-16 pt-4 justify-start items-center gap-2">
                <Typography variant="h4" color="gray" className="opacity-50">
                  Cabinets 
                </Typography>
                <ChevronDownIcon
                  strokeWidth={4}
                  className="h-5 w-5 transition-transform -rotate-90 opacity-50"
                />
                <Typography variant="h4" color="gray">
                  Ajouter cabinet 
                </Typography>
            </div>
            <div class="bg-white rounded p-4 px-8 md:p-8 mb-6 m-8">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
                <div class="lg:col-span-2">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-2 sm:grid-cols-1">
                    <div class="">
                      <label className="flex" for="zipcode">Code du cabinet</label>
                      <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="code cabinet"/>
                    </div>
                    <div class="">
                      <label className="flex" for="zipcode">Mot de passe du cabinet</label>
                      <input type="password" name="password" id="password" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="********" />
                    </div>
                    <div class="">
                      <label className="flex" for="zipcode">Adresse mail</label>
                      <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                    </div>
                    <div class="">
                      <label className="flex" for="zipcode">Ville</label>
                      <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                    </div>
                    <div class="">
                      <label className="flex" for="zipcode">Code postal</label>
                      <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""/>
                    </div>
                    <div class="">
                      <label className="flex" for="zipcode">Adresse</label>
                      <input type="mail" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                    </div>
                  </div>
                  <div className="flex w-full flex-row justify-end gap-1 my-4">
                        <Button variant="outlined" color="gray">Annuler</Button>
                        <Button variant="filled">Ajouter Cabinet</Button>
                      </div>
                </div>
              </div>
            </div>
        </Card>

      </div>
      
    </div>
  
  );
}

export default SuperAdminAddCabinet;
