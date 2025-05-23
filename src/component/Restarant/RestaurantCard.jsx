import { Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  return (
    <Card className='m-5 w-[18rem]'>

            <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
            <img className="w-full h-[10rem] rounded-t-md object-cover"
                src="https://cdn.pixabay.com/photo/2020/11/14/22/12/restaurant-5744144_960_720.jpg"
                alt=""
                />

                <Chip
                size="small"
                className="absolute top-2 left-2"
                color={true?"success":"error"}
                label={true?"Open":"Closed"}
                />

</div>

<div>
    <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
            <p className="font-semibold text-lg">Indian fast food</p>
            <p className="text-gray-500 text-sm">
                craving it all? dive into our global fla...
                </p>
                </div>
                <div>
                    <IconButton>
                        {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                    </IconButton>
                </div>
        </div>
      
    </div>

    </Card>
    
  )
}


//1.07
