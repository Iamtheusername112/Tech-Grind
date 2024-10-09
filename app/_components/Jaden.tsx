import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Jaden = () => {
  return (
    <Dialog>
      <DialogTrigger>Read More</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>FullStack Python developer</DialogTitle>
          <DialogDescription>
            Jaden is a seasoned Python full stack developer with 10 years of
            experience. They have a deep understanding of both front-end and
            back-end development, excelling in frameworks like Django and Flask,
            and are proficient in database management, API design, and
            user-friendly interfaces. His decade of experience has honed their
            skills in building robust and scalable applications, making them a
            go-to expert for delivering high-quality solutions in Python-based
            environments.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Jaden;
