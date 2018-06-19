# RoboCup2018 Rescue Simulation Virtual Robot League 

### You can access the scoring by the clicking [here](https://docs.google.com/spreadsheets/d/1-B7wG5-vcC4PbqGRlvNE4zfG6vQnTvdOxo-FyXnkg1U)


##  Network Setup

check the network folder and setup your computer based on the coressponding files.  
  

## Server Setup 
    $ cd ~/RoboCup2018RVRL_Demo  
    $ ./cleanup    
    $ catkin_make  
    
## Server Setup for world_Pre_outdoor1_1.launch

### Launch the server
    At terminal1 :  

    $ cd ~/RoboCup2018RVRL_Demo  
    $ . setup.bash  
    $ roslaunch setup world_pre_outdoor1_1.launch  

### Spawn robots
    At terminal2 :  

    $ cd ~/RoboCup2018RVRL_Demo  
    $ . setup.bash  
    $ roslaunch robot_description spawn_multi_robots_pre_outdoor1_1.launch  
    (roslaunch quadrotor_description spawn_multi_robots.launch)  

## Server Setup for world_Pre_outdoor1_1.launch

### Launch the server
    At terminal1 :  

    $ cd ~/RoboCup2018RVRL_Demo  
    $ . setup.bash  
    $ roslaunch setup world_pre_indoor1_1.launch  

### Spawn robots
    At terminal2 :  

    $ cd ~/RoboCup2018RVRL_Demo  
    $ . setup.bash  
    $ roslaunch robot_description spawn_multi_robots_pre_indoor1_1.launch  
    (roslaunch quadrotor_description spawn_multi_robots.launch)  

## Run the robot controller
    At terminal3 :  

    $ cd ~/RoboCup2018RVRL_Demo  
    $ . setup.bash  
    $ rosrun teleop_twist_keyboard teleop_twist_keyboard.py cmd_vel:=robot0/cmd_vel  
    (roslaunch hector_quadrotor_teleop SELECT_YOUR_GC.launch robot:=robot0)  
  


