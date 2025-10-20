# Open Source Code

I am a strong supporter of the open source idea and make virtually all of my research and utility code available. In particular, I try to pay attention to producing modular and reusable code to enable the community to extend and build upon existing frameworks.  
So far, my software has received **over 2k stars and 300 forks** on GitHub.  
Please feel free to use, modify, and contribute to any of these projects!

---

## Navigation
- [Mapping](#mapping)
- [Prediction](#prediction)
- [Planning](#planning)
- [Utility](#utility)
- [Others](#others)

---

## Mapping

### Khronos
**A unified approach for Spatio-temporal Metric-Semantic SLAM (SMS).**  
Khronos reasons about both short-term dynamics (e.g. people moving around the robot) and long-term changes (e.g. items being rearranged) in the environment.  
It jointly optimizes for motion estimation, change detection, the robot trajectory, and dense semantic reconstruction.  
The resulting spatio-temporal map represents the scene and its evolution at every time step and is incrementally built during online robot operation.

---

### Clio
**Task-driven 3D Scene Graphs in real time.**  
Clio builds 3D scene graphs with embedded open-set semantics inspired by the Information Bottleneck principle, forming task-relevant clusters for tasks like “Read brown textbook” and clustering scenes into regions such as “Kitchenette” or “Workspace”.

---

### Dynablox
**Dynamic object detection in complex environments.**  
An online volumetric mapping-based framework for real-time detection of diverse dynamic objects. The framework integrates efficiently with voxblox with minimal computation overhead.

---

### Panoptic Mapping
**Semantic volumetric mapping framework.**  
Supports submap-based adaptive spatio-temporal consistency, change detection, and 3D reconstruction with both monolithic and multi-resolution mapping.

---

### NeuralBlox
**Incremental volumetric mapping for robot planning using implicit neural representations.**  
Provides a framework for online fusion of neural representations and tools for training and extending models.  
*Main implementation by Stefan Lionar.*

---

## Prediction

### 3D Variable Scene Graphs (3D VSGs)
**Long-term semantic scene change prediction.**  
Implementation of DeltaVSG including data, training, inference, and evaluation tools.  
*Main implementation by Samuel Looper.*

---

### Language-based Probabilistic Long-term Prediction (LP²)
**Long-term (up to 60s) prediction of human trajectories in complex environments.**  
Uses 3D Dynamic Scene Graphs to represent environment semantics.  
Large language models (LLMs) predict possible future interactions, which are translated into probabilistic spatio-temporal distributions using Continuous-time Markov Chains (CTMC).

---

## Planning

### MAV Active 3D Planning
**Modular framework for online informative path planning (IPP).**  
Supports exploration, 3D reconstruction, and more through sampling-based receding-horizon algorithms optimizing gain vs. cost.

---

### GLocal Exploration
**Global and Local exploration planning for large-scale environments.**  
A submap-based approach that ensures robustness to state estimation drift while maintaining computational efficiency.

---

### CVAE Exploration Planning
**Learning-augmented local exploration planning.**  
Combines sampling-based planning with deep learning models. Includes open-source simulator, datasets, and model implementations.

---

### Active Learning For Segmentation
**Autonomous domain adaptation for semantic segmentation models.**  
Provides simulation, uncertainty estimation, and informative path planning modules for improving segmentation in real-time.  
*Main implementation by René Zurbrügg.*

---

### SC Explorer
**Incremental fusion of 3D scene completion for exploration mapping.**  
Combines multiple map layers for safe, interpretable, and efficient exploration.

---

### Traversing Mars: Cooperative Scouting IPP
**Informative Path Planning (IPP) for cooperative robots.**  
Enables a dexterous scout to explore optimal cost paths for follower robots in unknown environments.

---

## Utility

### Config Utilities
**Revamped utility toolkit for C++ config management.**  
Makes config struct handling more uniform, readable, and convenient across libraries.

---

### Spatial-Hash
**Lightweight spatial data structures in C++.**  
Implements voxel block hashing for efficient spatial mapping.

---

### Unreal AirSim
**Simulation tools for Unreal Engine (UE4).**  
Leverages Microsoft AirSim for realistic autonomous system simulation.

---

### Unreal CV ROS
**ROS simulation package for MAVs in Unreal Engine 4.**  
Integrates the UnrealCV plugin for vision-based MAV simulations.

---

### Config Utilities (legacy)
**Legacy version of config management tools for ROS and non-ROS C++ libraries.**

---

## Others

### Plant Stress Phenotyping
**Computer Vision-based crop phenotyping routines.**

---

