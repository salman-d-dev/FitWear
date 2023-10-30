import { IconPlus, IconUpload, IconDashboard, IconListTree, IconDatabase } from "@tabler/icons-react";
import { uniqueId } from "lodash";
var Menuitems = [
    {
        id: uniqueId(),
        title: "Admin Dashboard",
        icon: IconDashboard,
        href: "/admin/dashboard",
    },
    {
        id: uniqueId(),
        title: "Add Product",
        icon: IconPlus,
        href: "/admin/addproduct",
    },
    {
        id: uniqueId(),
        title: "View Products",
        icon: IconListTree,
        href: "/admin/viewproducts",
    },
    {
        id: uniqueId(),
        title: "All Orders",
        icon: IconDatabase,
        href: "/admin/allorders",
    },
];
export default Menuitems;
