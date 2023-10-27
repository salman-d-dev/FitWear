import React from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
var DashboardCard = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, children = _a.children, action = _a.action, footer = _a.footer, cardheading = _a.cardheading, headtitle = _a.headtitle, headsubtitle = _a.headsubtitle, middlecontent = _a.middlecontent;
    return (<Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
      {cardheading ? (<CardContent>
          <Typography variant="h3">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>) : (<CardContent sx={{ p: "30px" }}>
          {title ? (<Stack direction="row" spacing={2} justifyContent="space-between" alignItems={"center"} mb={3}>
              <Box>
                {title ? <Typography variant="h3">{title}</Typography> : ""}

                {subtitle ? (<Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>) : ("")}
              </Box>
              {action}
            </Stack>) : null}

          {children}
        </CardContent>)}

      {middlecontent}
      {footer}
    </Card>);
};
export default DashboardCard;
