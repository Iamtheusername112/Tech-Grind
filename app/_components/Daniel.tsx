import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Daniel = () => {
  return (
    <Dialog>
      <DialogTrigger>Read More</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>FullStack Python developer</DialogTitle>
          <DialogDescription>
            Daniel is a highly experienced full stack React developer with 12
            years of expertise. He is proficient in both front-end and back-end
            technologies, specializing in React for building interactive and
            dynamic user interfaces. His extensive experience includes working
            with modern frameworks, API integration, and ensuring responsive,
            scalable applications. His depth of knowledge and adaptability make
            him an invaluable resource for delivering cutting-edge web
            solutions.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Daniel;
