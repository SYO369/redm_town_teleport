# Town Teleportation System

A simple teleportation system for RedM that allows players to quickly travel between towns.

## Overview

This script provides a user interface to teleport players to various towns across the map. It's activated through a command and presents a UI for town selection.

## Features

- Teleport to 9 different towns: Annesburg, Armadillo, Blackwater, Rhodes, Saint Denis, Strawberry, Tumbleweed, Valentine, and Van Horn
- Clean screen fade transitions during teleportation
- Simple command-based activation
- NUI (Native UI) integration for town selection

## Usage

1. Type `/towntp` in the chat to open the teleportation menu
2. Select your desired destination from the available towns
3. Experience a smooth transition to your selected location

## Configuration

The script includes a configuration table (`Config.des`) containing coordinates for each town destination

You can modify these coordinates to adjust teleportation destinations.

## Installation

1. Place the script in your server's resources folder
2. Add the resource `redm_town_teleport` to your server.cfg
3. Restart your server or start the resource