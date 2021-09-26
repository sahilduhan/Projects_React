import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
function infoBox({ title, cases, total }) {
  return (
    <div>
      <Card className="infoBox">
        <CardContent>
          <Typography className="infoBox_title" color="textSecondry">
            {title}
          </Typography>
          <h2 className="infoBox_cases">{cases}</h2>
          <Typography className="infoBox_total" color="textSecondry">
            {total} cases
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default infoBox;
