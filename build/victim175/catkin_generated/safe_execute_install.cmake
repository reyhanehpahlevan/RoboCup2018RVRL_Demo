execute_process(COMMAND "/home/virtual/RoboCup2018RVRL_Demo/build/victim175/catkin_generated/python_distutils_install.sh" RESULT_VARIABLE res)

if(NOT res EQUAL 0)
  message(FATAL_ERROR "execute_process(/home/virtual/RoboCup2018RVRL_Demo/build/victim175/catkin_generated/python_distutils_install.sh) returned error code ")
endif()
