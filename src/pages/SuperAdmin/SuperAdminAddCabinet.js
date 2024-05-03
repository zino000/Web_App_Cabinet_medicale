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
      <div className="flex w-full h-full overflow-hidden lg:h-full flex-col transition duration-500 ease-in-out  justify-center items-start bg-white">
        <Navbar className="z-50 sticky shadow-none top-0 max-w-screen-xl px-4 py-1 lg:px-8 lg:py-1">
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
        <>
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
        </>
      </div>
      
    </div>
  
  );
}

export default SuperAdminAddCabinet;
