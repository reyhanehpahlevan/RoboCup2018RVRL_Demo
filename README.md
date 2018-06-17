# RoboCup2018 Rescue Simulation Virtual Robot League 



##  Network Setup
check the network folder and setup your computer based on the coressponding files.
  

## Server Setup 
  $ cd ~/RoboCup2018RVRL_Demo/workspace
  $ rm -rf build/  
  $ rm -rf devel/  
  $ catkin_make  
  
 ## Launch the server
 $ roslaunch setup robot_world.launch  
 $ roslaunch robot_description spawn_multi_robots.launch  



