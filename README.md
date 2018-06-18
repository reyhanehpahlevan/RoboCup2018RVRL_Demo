# RoboCup2018 Rescue Simulation Virtual Robot League 



##  Network Setup

check the network folder and setup your computer based on the coressponding files.  
  

## Server Setup 
    $ cd ~/RoboCup2018RVRL_Demo  
    $ ./cleanup    
    $ catkin_make  
  
## Launch the server
    At terminal1 :  

    $ cd ~/RoboCup2018RVRL_Demo  
    $ . setup.bash  
    $ roslaunch setup robot_world.launch  

## Spawn robots
    At terminal2 :  

    $ cd ~/RoboCup2018RVRL_Demo  
    $ . setup.bash  
    $ roslaunch robot_description spawn_multi_robots.launch  
    (roslaunch quadrotor_description spawn_multi_robots.launch)  

## Run the robot controller
    At terminal3 :  

    $ cd ~/RoboCup2018RVRL_Demo  
    $ . setup.bash  
    $ roslaunch teleop_twist_keyboard teleop_twist_keyboard.py cmd_vel:=robot0/cmd_vel  
    (roslaunch hector_quadrotor_teleop SELECT_YOUR_GC.launch robot:=robot0)  

check the network folder and setup your computer based on the coressponding files.
  
 ## Launch the server
    At terminal1 :  
    $ roslaunch setup robot_world.launch  
    At terminal2 :  
    $ roslaunch robot_description spawn_multi_robots.launch  



