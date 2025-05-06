import React, { useState } from "react";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const categories = ["pizza", "biriyani", "burger", "chicken", "rice"];

const foodTypes = [
  { label: "All", value: "all" },
  { label: "vegetarian only", value: "vegetarian" },
  { label: "non vegetarian", value: "non_vegetarian" },
  { label: "seasonal", value: "seasonal" },
];

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/india/indian fast food/3
        </h3>

        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://th.bing.com/th/id/OIP.GYaxPIPpWr8DeHC3ovycPQHaEr?rs=1&pid=ImgDetMain"
                alt=""
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://th.bing.com/th/id/OIP.F48Ta-u-I74gaRY18l_8sAHaE8?rs=1&pid=ImgDetMain"
                alt=""
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://th.bing.com/th/id/OIP.GYaxPIPpWr8DeHC3ovycPQHaEr?rs=1&pid=ImgDetMain"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Indian fast food</h1>
          <p className="text-gray-500 mt-1">
            This is lskrjwie kjewir wkjwlk iwejqlkjeq{" "}
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>colombo, sri lanka</span>
            </p>

            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>900 am-5pm</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28 p-5 d">
            <div>
              <Typography variant="h5" sx={{ ppaddingBottom: "1rem" }}>
                Food type
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
                      </div>
                      <Divider/>
                      <div>
              <Typography variant="h5" sx={{ ppaddingBottom: "1rem" }}>
                Food category
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item.value}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="space-y-5 lg:w-[80%] lg:pl-10">menu</div>
      </section>
    </div>
  );
};
export default RestaurantDetails;
