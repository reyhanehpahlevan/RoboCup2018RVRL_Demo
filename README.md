# RoboCup2018 Rescue Simulation Virtual Robot League 

### You can access the scoring by the clicking [here](https://docs.google.com/spreadsheets/d/1-B7wG5-vcC4PbqGRlvNE4zfG6vQnTvdOxo-FyXnkg1U)


##  Installation   
You can install Ros(Kinetic), Gazebo 8, neccessary packages by the following command using the ubuntu 16.04:  

    $sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'   
    $sudo apt-key adv --keyserver hkp://pool.sks-keyservers.net --recv-key 0xB01FA116   
    $sudo sh -c 'echo "deb http://packages.osrfoundation.org/gazebo/ubuntu `lsb_release -cs` main" > /etc/apt/sources.list.d/gazebo-latest.list'   
    $wget http://packages.osrfoundation.org/gazebo.key -O - | sudo apt-key add -     
    $sudo apt-get update   
    $sudo apt-get install -y cmake g++ protobuf-compiler pavucontrol libignition-math3 libsdformat5 libignition-math3-dev libignition-msgs0-dev gazebo8-plugin-base libgazebo8 libgazebo8-dev ros-kinetic-desktop  ros-kinetic-ros-control ros-kinetic-ros-controllers ros-kinetic-image-view2 ros-kinetic-rqt ros-kinetic-rqt-common-plugins ros-kinetic-joy ros-kinetic-teleop-twist-keyboard ros-kinetic-message-to-tf ros-kinetic-tf2-geometry-msgs ros-kinetic-audio-common ros-kinetic-costmap-2d ros-kinetic-image-transport ros-kinetic-image-transport-plugins ros-kinetic-hector-mapping ros-kinetic-hector-geotiff 
    $sudo apt-get install ros-kinetic-hector-pose-estimation ros-kinetic-hector-sensors-description ros-kinetic-controller-manager ros-kinetic-gmapping ros-kinetic-move-base ros-kinetic-hector-mapping ros-kinetic-gazebo8* 


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

## Server Setup for world_Pre_indoor1_1.launch

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
  


