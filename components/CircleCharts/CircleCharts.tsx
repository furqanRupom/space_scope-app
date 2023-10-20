"use client"
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import React, { PureComponent } from "react";
import { ChartsOne, ChartsThree, ChartsTwo } from "../Charts/Charts";

const CircleCharts = () => {


    let tabs = [
      {
        id: "Elements",
        label: "Elements",
        content:<ChartsOne />

      },
      {
        id: "Metals",
        label: "Metals",
        content:<ChartsTwo />

      },
      {
        id: "Others",
        label: "Others",
        content:<ChartsThree />

      },
    ];


  return (
    <div className="mr-10">


      <div className="flex w-full flex-col">
        <Tabs aria-label="Dynamic tabs" items={tabs}>
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <Card>
                <CardBody>{item.content}</CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default CircleCharts;
