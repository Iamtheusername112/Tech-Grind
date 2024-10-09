import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CheckUsOut() {
  return (
    <div className="grid grid-cols-1 p-5 gap-6 md:grid-cols-3">
      <div className="mt-5 gap-6 shadow-lg">
        <Card>
          <CardHeader>
            <CardTitle>Jaden</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-5 gap-6  shadow-lg">
        <Card>
          <CardHeader>
            <CardTitle>Jaden</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-5 gap-6 shadow-lg">
        <Card>
          <CardHeader>
            <CardTitle>Francis</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default CheckUsOut;
