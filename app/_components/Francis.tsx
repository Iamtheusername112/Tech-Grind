import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Francis = () => {
  return (
    <Dialog>
      <DialogTrigger>Read More </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>FullStack web developer</DialogTitle>
          <DialogDescription>
            Francis is a highly skilled full stack web developer with over 5
            years of experience. Proficient in both front-end and back-end
            technologies, Francis has worked on a wide variety of projects,
            building scalable and dynamic web applications. They possess
            expertise in modern frameworks such as React and Node.js, and are
            well-versed in database management, API integration, and responsive
            design. Their ability to adapt to new technologies and solve complex
            technical challenges makes Francis a versatile and valuable asset to
            any development team.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Francis;
