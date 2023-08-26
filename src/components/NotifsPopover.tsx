import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { BellIcon } from "@heroicons/react/24/outline";

const NotifsPopover = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <BellIcon className="h-6 w-6" />
        </PopoverTrigger>
        <PopoverContent bg="white" color="black">
          <PopoverArrow />
          <div className="flex justify-end">
            <PopoverCloseButton />
          </div>
          <PopoverHeader fontWeight="bold">Notifications</PopoverHeader>
          <PopoverBody>
            <li>Log your day!</li>
            <li>Your energy is low</li>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NotifsPopover;
