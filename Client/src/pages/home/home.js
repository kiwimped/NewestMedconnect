import { StyleSheet, Button, View, Text, Alert } from "react-native";
import React, { Component } from "react";
import { MDBNotification } from "mdbreact";
import { ArrowsOut, Robot, FirstAid } from "phosphor-react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";



export default function Home() {
  const {user} = useContext(UserContext)

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Do you want to book an appointment?</h1>

        <Button
          onPress={() => navigation.navigate("/appointments")} // Replace 'AnotherPage' with your desired route
          title="I wanna book an appointment"
          color="#841584"
          accessibilityLabel="Go to another page"
        />

        <h1>Do you want a diagnosis without an appoinment?</h1>

        <Button
          onPress={() => navigation.navigate("/AI")} // Replace 'AnotherPage' with your desired route
          title="Click Here for AI diagonois"
          color="#841584"
          accessibilityLabel="Go to another page"
        />
      </div>
      <Accordion>
        <AccordionSummary id="panel-footer" aria-controls="panel-content">
          <ArrowsOut size={32} />
        </AccordionSummary>
        <AccordionDetails>
          {!!user && (<h1>Hi {user.name}!</h1>)}
</AccordionDetails>
      </Accordion>
      
    </div>
  );
};
