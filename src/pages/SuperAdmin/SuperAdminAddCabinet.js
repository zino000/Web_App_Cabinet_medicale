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
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 xxl:grid-cols-3">
                    <div class="md:col-span-5">
                      <label for="full_name">Full Name</label>
                      <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    </div>
                    <div class="md:col-span-5">
                      <label for="email">Email Address</label>
                      <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com" />
                    </div>
                    <div class="md:col-span-3">
                      <label for="address">Address / Street</label>
                      <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                    </div>
                    <div class="md:col-span-2">
                      <label for="city">City</label>
                      <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                    </div>
                    <div class="2xl:col-span-2">
                      <label for="country">Country / region</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input name="country" id="country" placeholder="Country" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                        <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </button>
                      </div>
                    </div>
                    <div class="2xl:col-span-2">
                      <label for="state">State / province</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input name="state" id="state" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                        <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </button>
                      </div>
                    </div>
                    <div class="2xl:col-span-2">
                      <label className="flex" for="zipcode">Zipcode</label>
                      <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""/>
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
