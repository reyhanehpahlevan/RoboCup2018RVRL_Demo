cmake_minimum_required(VERSION 2.8.3)
project(bring_up)

add_compile_options(-std=c++11)

find_package(catkin REQUIRED COMPONENTS
  geometry_msgs

  roscpp

)


catkin_package(
#  INCLUDE_DIRS include
  LIBRARIES 
  CATKIN_DEPENDS geometry_msgs roscpp 
  DEPENDS 
)
