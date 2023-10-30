import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import BaseCard from "../shared/DashboardCard";
var Chart = dynamic(function () { return import("react-apexcharts"); }, { ssr: false });
var SalesOverview = function () {

    const [salesArray, setSalesArray] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);
    const [highestSales, setHighestSales] = useState(0);
    useEffect(()=>{
        const fetchSalesData = async()=>{
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/salesdata`,{
                    method:"GET",
                    headers:{
                      "Content-Type": "application/json",
                      "admin-token":localStorage.getItem("admin-token"),
                    },
                  });
                if(response.status === 200){
                    const parsedArray = await response.json();
                    setSalesArray(parsedArray);
                    const sortedClonedArray = [...parsedArray].sort((a,b)=> a-b)
                    setHighestSales(sortedClonedArray[11])
                    
                }
            } catch (error) {
                console.log(error)
            }
        }

        //call the function
        fetchSalesData();
    },[])

    var theme = useTheme();
    var primary = theme.palette.primary.main;
    var secondary = theme.palette.secondary.main;
    var optionssalesoverview = {
        grid: {
            show: true,
            borderColor: "transparent",
            strokeDashArray: 2,
            padding: {
                left: 0,
                right: 0,
                bottom: 0,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "42%",
                endingShape: "rounded",
                borderRadius: 5,
            },
        },
        colors: ["#048c3b"],
        fill: {
            type: "solid",
            opacity: 1,
        },
        chart: {
            offsetX: -15,
            toolbar: {
                show: false,
            },
            foreColor: "#adb0bb",
            fontFamily: "inherit",
            sparkline: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 0,
        },
        legend: {
            show: false,
        },
        xaxis: {
            type: "category",
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "July",
                "Aug",
                "Sept",
                "Oct",
                "Nov",
                "Dec",
            ],
            labels: {
                style: {
                    cssClass: "grey--text lighten-2--text fill-color",
                },
            },
        },

        
        yaxis: {
            show: true,
            min: 0,
            max: highestSales,
            tickAmount: 5,
            labels: {
                style: {
                    cssClass: "grey--text lighten-2--text fill-color",
                },
            },
        },
        stroke: {
            show: true,
            width: 5,
            lineCap: "butt",
            colors: ["transparent"],
        },
        tooltip: {
            theme: "dark",
        },
    };


    var seriessalesoverview = [
        {
            name: "Sales ₹",
            data: salesArray,
        }
    ];

    return (<BaseCard title="Sales Overview">
      <Chart options={optionssalesoverview} series={seriessalesoverview} type="bar" height={"350px"}/>
    </BaseCard>);
};
export default SalesOverview;
