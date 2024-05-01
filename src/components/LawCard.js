import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import lawData from "../../src/Law.json"; // Import JSON data

const LawCard = ({ title, id, enactmentDate, definition }) => {
  return (
    <Card className="mb-4" style={{ backgroundColor: "#fff0f0", color: "#333", border: "1px solid #ff4d6d", borderRadius: "15px" }}>
      <CardBody>
        <CardTitle tag="h5" style={{ color: "#ff4d6d" }}>{title}</CardTitle>
        <CardText className="mb-2">Act ID: {id}</CardText>
        <CardText className="mb-2">Enactment Date: {enactmentDate}</CardText>
        <CardText className="mb-4">Act Definition:</CardText>
        {definition.map((def, index) => (
          <CardText key={index} style={{ textAlign: "justify", marginBottom: "10px" }}>{def}</CardText>
        ))}
      </CardBody>
    </Card>
  );
};

const LawCardsContainer = () => {
  return (
    <div>
      {lawData.map((law, index) => (
        <LawCard
          key={index}
          title={law["Act Title"]}
          id={law["Act ID"]}
          enactmentDate={law["Enactment Date"]}
          definition={Object.values(law["Act Definition"])}
        />
      ))}
    </div>
  );
};

export default LawCardsContainer;
