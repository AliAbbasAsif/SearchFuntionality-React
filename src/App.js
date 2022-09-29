import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import img1 from './Images/OLX-Logo.png'
import img2 from './Images/OLX-Symbol.png'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Data from './Components/carddata';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import banner1 from './Images/img1.jpg'
import TvIcon from '@mui/icons-material/Tv';
import TimerIcon from '@mui/icons-material/Timer';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import { fontSize } from '@mui/system';

function App() {
  const [Txt, setTxt] = useState("");
  const searchtxt = (e) => {
    setTxt(e.taget.value);
  }
  console.warn(Txt)
  let datasearch = Data.carddata.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(Txt.toString().toLowerCase())
    )
  })
  return (
    <div>
      <AppBar position="Static" sx={{ backgroundColor: "#E1E1E1", paddingLeft: "70px", paddingBottom: "15px" }}>
        <div>
          <Toolbar>
            <IconButton size="large" color="inherit" edge="start" >
              <img src={img1} className="logo" />
            </IconButton>
            <IconButton size='large' color='default' sx={{ paddingLeft: "30px" }}>
              <DirectionsCarIcon sx={{ backgroundColor: "#D5D1D0", borderRadius: "50%", padding: "5px" }} />
              <Typography sx={{ marginLeft: "6px" }}>
                MotorCars
              </Typography>
            </IconButton>

            <IconButton size='large' color='default' sx={{ paddingLeft: "30px" }}>
              < LocationCityIcon sx={{ backgroundColor: "#D5D1D0", borderRadius: "50%", padding: "5px" }} />
              <Typography sx={{ marginLeft: "6px" }}>
                Property
              </Typography>
            </IconButton>

          </Toolbar>
        </div>
        <div>
          <Toolbar>
            <IconButton size="large" color="inherit" edge="start" >
              <img src={img2} className="logo2" />
            </IconButton>
            <FormControl sx={{ width: "17%", paddingRight: "20px", marginLeft: "20px" }} >
              <InputLabel id="demo-simple-select-label" >Pakistan</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={}
                label="Age"
              // onChange={}
              >
                <MenuItem value={"Sindh,Pakistan"}>Sindh,Pakistan</MenuItem>
                <MenuItem value={"Balochistan,Pakistan"}>Balochistan,Pakistan</MenuItem>
                <MenuItem value={"Punjab,Pakistan"}>Punjab,Pakistan</MenuItem>
                <MenuItem value={"NorthAreas,Pakistan"}>NorthAreas,Pakistan</MenuItem>
                <MenuItem value={"Islamabad,Pakistan"}>Islamabad,Pakistan</MenuItem>
                <MenuItem value={"Azad Kashmir,Pakistan"}>Azad Kashmir,Pakistan</MenuItem>
              </Select>
            </FormControl>
            <TextField id="outlined-basic" label="Search " variant="outlined" sx={{ width: "100%" }} value={Txt} onChange={(e) => {
              setTxt(e.target.value)
            }}

            />
            <Button sx={{ textDecoration: "underline", margin: "15px", fontSize: "17px", color: "black" }} >Login</Button>
            <Button sx={{ height: "50px", width: "140px", color: "Black", borderRadius: "15px", border: " 1px solid black" }} variant="outlined" startIcon={<AddIcon />}>
              Sell
            </Button>
          </Toolbar>
        </div>
      </AppBar>
      <div className='b'>
        <div className='bannercont'>
          <img src={banner1} />
        </div>
      </div>


      <Box sx={{ flexGrow: 1, padding: "30px" }}>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }}>
          {datasearch.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.pic}
                  alt="green iguana"
                />
                <CardContent>

                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.location}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }} sx={{padding:"20px 80px"}}>
          <Grid item xs={2} sx={{ backgroundColor: "#f5f4f5", width:"150px",padding:"20px",margin:"0px 20px"}}>
            <div><TvIcon sx={{margin:"0 80px",fontSize:"45px"}} />
              <Typography sx={{textAlign:"center"}} variant="h5">
                
                Online Resume Bulider
              </Typography>
            </div>
          </Grid>

          <Grid item xs={2} sx={{ backgroundColor: "#f5f4f5", width:"150px",padding:"20px",margin:"0px 20px"}}>
            <div><TimerIcon sx={{margin:"0 80px",fontSize:"45px"}} />
              <Typography sx={{textAlign:"center"}} variant="h5">
                
                Resume in 5 mins
              </Typography>
            </div>
          </Grid>

          <Grid item xs={2} sx={{ backgroundColor: "#f5f4f5", width:"150px",padding:"20px",margin:"0px 20px"}}>
            <div><AutoFixNormalIcon sx={{margin:"0 80px",fontSize:"45px"}} />
              <Typography sx={{textAlign:"center"}} variant="h5">
                
                20+ Resume Tempelates
              </Typography>
            </div>
          </Grid>

          <Grid item xs={2} sx={{ backgroundColor: "#f5f4f5", width:"150px",padding:"20px",margin:"0px 20px"}}>
            <div><TvIcon sx={{margin:"0 80px",fontSize:"45px"}} />
              <Typography sx={{textAlign:"center"}} variant="h5">
                
                Cover Letter Builder
              </Typography>
            </div>
          </Grid>

          <Grid item xs={2} sx={{ backgroundColor: "#f5f4f5", width:"150px",padding:"20px",margin:"0px 20px"}}>
            <div><TvIcon sx={{margin:"0 80px",fontSize:"45px"}} />
              <Typography sx={{textAlign:"center" }} variant="h5">
                
                Expert Tips and Examples
              </Typography>
            </div>
          </Grid>



        </Grid>
      </Box>

      <div className='b'>
        <div className='bannercont'>
          <img src={banner1} />
        </div>
      </div>

    </div >

  );
}

export default App;
