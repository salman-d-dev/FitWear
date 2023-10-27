import { Card } from "@mui/material";
var BlankCard = function (_a) {
    var children = _a.children, className = _a.className;
    return (<Card sx={{ p: 0, position: "relative" }} className={className} elevation={9} variant={undefined}>
      {children}
    </Card>);
};
export default BlankCard;
