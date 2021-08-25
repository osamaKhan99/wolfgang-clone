import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 10px",
  },
  secondaryTail: {
    backgroundColor: "#2c2c2c",
  },
}));

const roadmap = [
  {
    id: "0%",
    heading: "Giveaway",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: "25%",
    heading: "Companions for early adopters",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: "30%",
    heading: "Ehterium Reward",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: "50%",
    heading: "Start Game Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: "75%",
    heading: "Item Airdrop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: "100%",
    heading: "Special Prizes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
];

export function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="left">
      <TimelineItem>
        <TimelineOppositeContent flex="none">
          <Typography variant="body2" color="textSecondary">
            0%
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Charity
            </Typography>
            <Typography>
              2 Percent of all sales will be donated to Animal Conservation
              Charities! Hand pick by you all!
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1" color="textSecondary">
            10%
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Giveaway
            </Typography>
            <Typography>
              25 random NFTs from our collection will be airdropped to random
              owners
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            25%
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Companions for early adopters!
            </Typography>
            <Typography>Because you need rest</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            30%
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Ethereum Reward
            </Typography>
            <Typography>
              1 Ethereum airdropped to 10 Wolf Owners Randomly!
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export function MobileTimeline() {
  return (
    <div className="roadmap">
      <ul>
        {roadmap.map((item) => (
          <li className="element" key={item.id}>
            <p className="el-id">{item.id}</p>
            <h2>{item.heading}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NewTimeline() {
  return (
    <div data-v-20efba9a id="timeline-content">
      <ul className="timeline">
      <li data-date="0%" className="event">
        <h3>Charity</h3>
        <p>
          2 Percent of all sales will be donated to Animal Conservation
          Charities! Hand pick by you all!
        </p>
      </li>
      <li data-date="10%" className="event">
        <h3>Giveaway</h3>
        <p>
          25 random NFTs from our collection will be airdropped to random owners
        </p>
      </li>
      <li id="date" data-date="25%" className="event">
        <h3>Companions for early adopters!</h3>
        <p>
          We have Companions for every wolf owner that minted before #4000! They
          will have traits and rarities like they adult counterparts! (Pups)
        </p>
      </li>
      <li data-date="30%" className="event">
        <h3>Ethereum Reward</h3>
        <p>1 Ethereum airdropped to 10 Wolf Owners Randomly!</p>
      </li>
      <li id="date" data-date="50%" className="event">
        <h3>Start Game Development</h3>
        <p>
          We are ready to start the game web based PVP and PVE game will be in
          development! With release TBA!
        </p>
      </li>
      <li id="date" data-date="75%" className="event">
        <h3>Item Airdrop</h3>
        <p>
          After completing the game, we will have airdropped every wolf owner a
          piece of armor and a shield for the game! To start you on your journey
          in the PVP world!
        </p>
      </li>
      <li id="date" data-date="100%" className="event">
        <h3>Special Prizes!</h3>
        <p>
          25 ETH + special prizes** will be transferred as a reward to the top
          1000 unique owners, depending on their activity in our
          discord/community.
        </p>
      </li>
    </ul>
    </div>
  );
}
